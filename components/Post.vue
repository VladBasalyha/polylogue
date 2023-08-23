<script setup>
	import { useUserStore } from "~/stores/user";

	const userStore = useUserStore();
	const runtimeConfig = useRuntimeConfig();

	let isMenu = ref(false);
	let isLike = ref(false);
	let isDeleting = ref(false);

	const emit = defineEmits(["isDeleted"]);
	const props = defineProps({ post: Object });

	// const client = useSupabaseClient();
	// const user = useSupabaseUser();
</script>

<template>
	<div class="z-60 bottom-0 h-full w-full">
		<div class="py-2 w-full">
			<div class="flex items-center text-white">
				<img class="rounded-full w-[35px] h-[35px]" :src="post.image" alt="post-image" />
				<div class="ml-2 font-semibold text-[18px]">
					{{ post.name }}
				</div>
				<div @click="isMenu = !isMenu" class="relative ml-auto">
					<button
						class="flex items-center text-white p-1 h-[30px] w-[30px] hover:bg-gray-700 rounded-full cursor-pointer"
						:class="isMenu ? bg - gray - 700 : ''"
						:disabled="isDeleting"
					>
						<Icon v-if="!isDeleting" name="material-symbols:settings" size="30" color="#78716c" />
						<Icon v-else name="eos-icons:hourglass" size="30" color="#78716c" />
					</button>

					<div v-if="isMenu" class="absolute border border-gray-700 right-0 z-50 mt-1 rounded">
						<button
							class="flex items-center rounded gap-2 text-red-400 justify-between bg-transparent w-full pl-4 pr-4 py-1 hover:bg-gray-700"
						>
							<Icon name="ic:baseline-delete-sweep" size="30" />
						</button>
					</div>
				</div>
			</div>
			<div class="relative flex items-center w-full">
				<div class="w-[42px]">
					<div class="absolute ml-4 mt-1 top-0 bg-gray-700 h-full" />
				</div>
				<div class="bg-gray-800 rounded-lg w-[calc(100% - 50px)] text-sm w-full font-light">
					<div class="pl-4 pr-3 py-2 text-gray-200">{{ post.text }}</div>
					<img v-if="post && post.picture" class="mx-auto w-full mt-2 p-2 rounded" :src="post.picture" />

					<div class="flex items-center gap-1 mt-2 absolute w-full ml-2">
						<button :disabled="isLike" class="flex items-center gap-1">
							<Icon
								class="p-1 text-white hover:bg-gray-700 rounded-full cursor-pointer"
								name="pepicons-pop:thumbs-up-circle"
								size="30"
								color="#a3a3a3"
							/>
						</button>
						<div class="relative text-sm text-gray-500">
							<div>
								<span>4</span>
								Likes
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="relative inline-block text-gray-500">
			<div class="flex items-center">
				<div class="flex items-center flex-wrap text-white gap-1 w-[42px]">
					<div class="flex gap-0.5">
						<img class="rounded-full w-[20px] h-[20px] mt-2" src="https://picsum.photos/200/400" alt="photo" />
						<img class="rounded-full w-[17px] h-[17px]" src="https://picsum.photos/200/300" alt="photo" />
					</div>
				</div>
			</div>
		</div>
		<div class="h-[1px] bg-gray-700 w-full mt-3"></div>
	</div>
</template>
