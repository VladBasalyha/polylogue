<script setup>
	const client = useSupabaseClient();
	const user = useSupabaseUser();

	watchEffect(() => {
		if (user.value) {
			return navigateTo("/");
		}
	});

	const signIn = async (prov) => {
		const { data, error } = await client.auth.signWithAuth({
			provider: prov,
			redirectTo: window.location.origin,
		});

		if (error) {
			console.log(error);
		}
	};
</script>

<template>
	<div id="authPage" class="w-full h-100vh h-screen pt-25">
		<div class="w-full">
			<div class="w-full flex items-center justify-center gap-2">
				<img src="../public/images/icons/polylogueIcon.svg" alt="polylogue-icon" />
				<span class="font-bold text-2xl text-gray-500">Polylogue</span>
			</div>

			<div class="max-w-300px mx-auto px-3 text-gray-500">
				<div class="text-center mb-6 mt-4">Sign In / Sign Up</div>
				<button class="flex items-center justify-center gap-4 py-2 w-full border rounded-full text-lg font-bold"></button>
			</div>
		</div>
	</div>
</template>
