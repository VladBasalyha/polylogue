<script setup>
	import { useUserStore } from "../stores/user";

	const userStore = useUserStore();
	// const client = useSupabaseClient();

	const signOut = () => {
		client.auth.signOut();
		userStore.isLogoutOverlay = false;
		return navigateTo("/");
	};
</script>

<template>
	<div
		id="Modal"
		class="fixed grid place-items-center h-screen z-50 bottom-0 bg-gray-700 bg-opacity-40 backdrop-blur-md h-screen w-full"
	>
		<div class="bg-gray-700 w-full max-w-300px rounded-lg text-gray-300 border border-gray-300 p-4">
			<button @click="userStore.isLogoutOverlay" class="flex items-center justify-between bg-gray-700 w-full p-3">
				<div>Close window</div>
				<Icon name="ic:twotone-cancel" size="30" />
			</button>

			<div class="border-b border-b-gray-700 my-2"></div>
			<button class="flex items-center justify-between bg-gray-700 w-full p-4">
				<div>Sign Out</div>
				<Icon name="solar:exit-bold-duotone" size="30" />
			</button>
		</div>
	</div>
</template>
