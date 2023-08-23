<script setup>
	import { useUserStore } from "../stores/user";
	const userStore = useUserStore();
</script>

<template>
	<div id="MainLayout" class="h-screen">
		<div class="w-full max-w-[500px] mx-auto">
			<div width="30" height="30" id="TopMenu" class="w-full flex items-center justify-start px-2">
				<img width="60" height="60" src="../public/images/icons/polylogueIcon.svg" alt="logo" />
			</div>
		</div>

		<div class="flex-w-full max-w-[500px] mx-auto h-screen">
			<slot />
		</div>

		<div id="BottomNav" class="fixed z-100 bottom-0 flex w-full h-[70px] border-t-white-700 bg-white-900">
			<button @click="navigateTo('/')" class="w-full h-full">
				<Icon name="material-symbols:face" color="#a1a1aa" size="30" />
			</button>
			<button class="w-full h-full" @click="userStore.isMenuOverlay = true">
				<Icon name="material-symbols:rate-review" size="30" color="#a1a1aa" />
			</button>

			<button @click="userStore.isLogoutOverlay = true" class="w-full h-full">
				<Icon class="mb-1" size="30" color="#a1a1aa" name="material-symbols:exit-to-app" />
			</button>
		</div>
	</div>
</template>
