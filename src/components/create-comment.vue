<template>
  <div>
    <!-- COMMENT INPUT -->
    <div class="d-flex gap-3 mb-3">
      <img
        src="@/assets/images/bg.png"
        class="rounded-circle align-self-start"
        width="24"
      />
      <textarea
        class="form-control overflow-y-hidden"
        rows="3"
        placeholder="Write a comment"
        ref="textAreaRef"
        @input="resize"
      ></textarea>
    </div>

    <!-- COMMENT BUTTON -->
    <div class="d-flex justify-content-end gap-3">
      <button class="btn btn-primary">Comment</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const textAreaRef = ref(null);

const resize = () => {
  textAreaRef.value.style.height = "auto";
  textAreaRef.value.style.height = textAreaRef.value.scrollHeight + "px";
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
