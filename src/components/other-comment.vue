<template>
  <div class="bg-light p-3">
    <!-- PERSON WHO COMMENT BUTTON-->
    <button class="btn mb-2 d-flex gap-2 align-items-center">
      <VLazyImage
        src="https://source.unsplash.com/random/300×300 "
        src-placeholder="/spinner.svg"
        class="rounded-circle"
        width="24"
        height="24"
      />
      <div class="d-flex flex-column align-items-start">
        <span class="text-sm">Friend 1</span>
        <span class="text-xs text-secondary">Jan. 24, 2024 12:04 pm</span>
      </div>
    </button>
    <!-- TEXT COMMENT CONTENT-->
    <p class="text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum explicabo,
      porro iure cum quidem enim unde? Nam sapiente molestias, id repudiandae
      suscipit cupiditate magni asperiores vel eos, illo porro nisi.
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.text-sm {
  font-size: 0.8rem;
}

.text-xs {
  font-size: 0.7rem;
}
</style>
