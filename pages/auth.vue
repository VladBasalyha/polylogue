<template>
	<div id="AuthPage" class="w-full h-[100vh] h-screen pt-32">
		<div class="w-full">
			<div class="w-full flex items-center justify-center p-2">
				<img class="w-[100px]" src="../public/images/icons/polylogueIcon.svg" />
				<span class="font-bold text-2xl text-gray-500">Polylogue</span>
			</div>

			<div class="max-w-[350px] mx-auto px-2 text-white">
				<div class="text-center text-gray-500 mb-6 mt-4">Login / Register</div>
				<div class="flex items-center justify-center gap-5">
					<button @click="login('github')">
						<div class="flex flex-col items-center gap-2 justify-center">
							<Icon name="ri:github-fill" size="40" />
							GITHUB
						</div>
					</button>
				</div>

				<button class="flex items-center" @click="login('google')">
					<div class="flex flex-col items-center gap-2 justify-center">
						<Icon name="ci:google" size="40" />
						GOOGLE
					</div>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	const client = useSupabaseClient();
	const user = useSupabaseUser();

	watchEffect(() => {
		if (user.value) {
			return navigateTo("/");
		}
	});

	const login = async (prov) => {
		const { data, error } = await client.auth.signInWithOAuth({
			provider: prov,
			redirectTo: window.location.origin,
		});

		if (error) console.log(error);
	};
</script>
