<script setup>
	import { useUserStore } from "./stores/user";
	const userStore = useUserStore();
</script>

<template>
	<div class="overflow-auto bg-gray-900 fixed w-[calc(100%+1px)] h-full">
		<NuxtPage />
		<CreatePost
			:class="[
				{
					'max-h-[100vh] transition-all duration-200 visible': userStore.isMenuOverlay,
					'max-h-0 transition-all duration-200 ease-out invisible': !userStore.isMenuOverlay,
				},
			]"
		/>
		<Modal
			:class="[
				{
					'max-h-[100vh] transition-all duration-200 visible': userStore.isLogoutOverlay,
					'max-h-0 transition-all duration-200 ease-out invisible': !userStore.isLogoutOverlay,
				},
			]"
		/>
	</div>
</template>
