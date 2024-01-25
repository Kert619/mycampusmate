<template>
  <div class="p-3 rounded bg-white">
    <div class="mb-3">
      <!-- USER WHO POST BUTTON-->
      <button class="btn mb-2 d-flex gap-2 align-items-center">
        <VLazyImage
          src="https://source.unsplash.com/random/300×300 "
          src-placeholder="/spinner.svg"
          class="rounded-circle"
          width="24"
          height="24"
        />
        <span class="text-sm">Sample Student</span>
      </button>

      <!-- POST TEXT INPUT-->
      <textarea
        class="form-control overflow-y-hidden"
        rows="3"
        placeholder="What's on your mind?"
        ref="textAreaRef"
        @input="resize"
      ></textarea>
    </div>
    <div class="d-flex justify-content-end gap-3">
      <button class="btn btn-primary">Post</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const textAreaRef = ref(null);

// AUTO RESIZE THE INPUT BASE ON THE CONTENT
const resize = () => {
  textAreaRef.value.style.height = "auto";
  textAreaRef.value.style.height = textAreaRef.value.scrollHeight + "px";
};
</script>

<style scoped>
textarea {
  resize: none;
}
.text-sm {
  font-size: 0.8rem;
}
</style>
