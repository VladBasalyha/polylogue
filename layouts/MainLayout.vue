<template>
	<div id="MainLayout" class="h-screen">
		<div class="w-full max-w-[500px] mx-auto">
			<div id="TopMenu" class="w-full flex items-center justify-start px-2 h-10 my-2 text-gray-500 text-2xl font-bold">
				<img width="100" height="100" class="w-[60px]" src="../public/images/icons/polylogueIcon.svg" />
				Polylogue
			</div>
		</div>

		<div class="flex w-full max-w-[500px] mx-auto h-screen">
			<slot />
		</div>

		<div id="BottomNav" class="fixed z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-gray-700">
			<div class="flex w-full max-w-[500px] mx-auto flex items-center justify-around">
				<button @click="navigateTo('/')" class="w-full h-full">
					<Icon name="material-symbols:home-outline" size="35" color="#ffffff" />
				</button>
				<button @click="userStore.isMenuOverlay = true" class="w-full h-full">
					<Icon class="mb-1" name="material-symbols:edit-square-outline-rounded" size="32" color="#ffffff" />
				</button>
				<button @click="userStore.isLogoutOverlay = true" class="w-full h-full">
					<Icon class="mb-1" name="ph:sign-out" size="32" color="#ffffff" />
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useUserStore } from "../stores/user";
	const userStore = useUserStore();

	const client = useSupabaseClient();
	const user = useSupabaseUser();
</script>
