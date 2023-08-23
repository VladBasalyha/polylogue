<script setup>
	// import { uuid } from "uuid";
	import { useUserStore } from "../stores/user";

	const userStore = useUserStore();

	const runtimeConfig = useRuntimeConfig();

	let isMenu = ref(false);
	let isLike = ref(false);
	let isDeleting = ref(false);

	let text = ref(null);
	let isLoading = ref(false);
	let file = ref(null);
	let fileDisplay = ref(null);
	let fileData = ref(null);

	const emit = defineEmits(["isDeleted"]);
	const props = defineProps({ post: Object });

	const changeTextAreaSize = () => {
		var textArea = document.getElementById("textarea");
		textArea.style.height = "auto";
		textArea.style.height = textArea.scroll.height + "px";
	};

	const clearData = () => {
		text.value = null;
		file.value = null;
		fileDisplay.value = null;
		fileData.value = null;
	};

	const onChange = () => {
		fileDisplay.value = URL.createObjectURL(file.value.files[0]);
	};
</script>

<template>
	<div id="CreatePost" class="fixed z-80 bottom-0 h-full w-full overflow-hidden">
		<div class="bg-gray-900 h-full text-black overflow-auto">
			<div class="flex items-center justify-start py-4 max-w-[500px] mx-auto border-b border-b-gray-500">
				<button
					@click="
						userStore.isMenuOverlay = false;
						clearData();
					"
					class="rounded-full px-2"
				>
					<Icon class="text-gray-300" name="solar:close-circle-bold-duotone" size="30" />
				</button>
				<div class="text-gray-300 text-[16px] font-semibold">New discussion</div>
			</div>
			<div id="Post" class="z-40 bottom-0 max-h-[100vh - 200px] w-full px-4 max-w-[500px] mx-auto">
				<div class="py-2 w-full">
					<div class="flex items-center text-gray-300">
						<img class="rounded-full h-[35px] w-[35px]" src="https://picsum.photos/seed/picsum/200/300" alt="post-photo" />
						<div class="ml-2 font-semibold text-[18px]">Test User</div>
					</div>
					<div class="relative flex items-center w-full">
						<div class="w-[40px] mx-auto">
							<div class="absolute ml-3 mt-2 top-0 w-[1px] bg-gray-700 h-full"></div>
						</div>
						<div class="bg-gray-700 rounded-lg pr-[10px] pb-[10px] pl-[10px] w-[calc(100% - 50px)] text w-full font-light">
							<div class="pt-2 text-gray-200 bg-gray-700 w-full rounded-lg">
								<textarea
									@input="changeTextAreaSize()"
									class="p-3 w-full bg-gray-700 outline-none text-[20px]"
									v-model="text"
									style="resize: none"
									placeholder="Start polylogue"
									id="textarea"
								></textarea>
							</div>

							<div class="w-full">
								<div class="flex flex-col gap-2 py-2">
									<div v-if="fileDisplay">
										<img class="mx-auto w-full mt-2 mr-3 rounded-sm" :src="fileDisplay" alt="picture for polylogue" />
									</div>
								</div>
							</div>

							<label for="pictureInput">
								<Icon name="material-symbols:add-photo-alternate-outline" size="30" />
								<input @input="onChange" hidden accept=".jpg,.jpeg, .png" ref="file" type="file" id="pictureInput" />
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
		<button
			v-if="text"
			:disabled="isLoading"
			class="fixed bottom-0 font-bold text-lg w-full p-2 bg-gray-700 inline-block float-right p-4 border-t-gray-200"
			:class="isLoading ? 'text-gray-400' : 'text-gray-400'"
		>
			<div v-if="!isLoading">Start polylogue</div>
			<div v-else class="flex items-center justify-center">
				<Icon size="30" name="eos-icons:loading" />
			</div>
		</button>
	</div>
</template>
