<template>
  <div v-if="!showMessage">
    <div class="mt-3 p-3 d-flex gap-3 bg-white">
      <div style="height: 300px; width: 100%; position: relative">
        <VLazyImage
          src="/bg.png"
          src-placeholder="/bg-thumbnail.png"
          class="cover-photo"
        />
        <VLazyImage
          :src="`${apiUrl}${student.student_profile.file_path}${student.student_profile.file_rand_name}`"
          class="profile-photo"
          width="200"
          height="200"
        />
      </div>
    </div>

    <div class="d-flex flex-column align-items-end mt-3">
      <h5 class="fw-bold">
        {{ `${student.first_name} ${student.last_name}` }}
      </h5>
      <div class="d-flex gap-2" v-if="!isOwnTimeline">
        <button class="btn btn-success btn-sm" @click="addFriend">
          Add Friend
        </button>
        <button class="btn btn-primary btn-sm" @click="showMessage = true">
          Message
        </button>
      </div>
    </div>

    <div class="d-flex flex-column gap-3 mt-5">
      <CreatePost
        v-if="isOwnTimeline"
        :auth-student-id="authStudentId"
        :student-name="`${student.first_name} ${student.last_name}`"
        :profile="`${apiUrl}${student.student_profile.file_path}${student.student_profile.file_rand_name}`"
        @post-created="postCreated"
      ></CreatePost>
      <Post
        :post="{
          createdAt: post.createdAt,
          id: post.id,
          post_description: post.post_description,
          post_files: post.post_files,
          visibility: post.visibility,
          studentpost: {
            first_name: student.first_name,
            middle_name: student.middle_name,
            last_name: student.last_name,
            age: student.age,
            address: student.address,
            student_num: student.student_num,
            student_profile: student.student_profile,
          },
        }"
        v-for="post in student.poststudent"
        :isOwnPost="isOwnTimeline"
        @post-deleted="deletePost(post.id)"
      ></Post>
    </div>
  </div>

  <div class="bg-white h-100 d-flex flex-column" v-else>
    <div class="d-flex bg-primary text-white">
      <button class="btn text-white" @click="showMessage = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
          />
        </svg>
      </button>
      <h4 class="text-end py-2 px-4 flex-grow-1">
        {{ `${student.first_name} ${student.last_name}` }}
      </h4>
    </div>

    <div class="p-3 d-flex flex-column gap-3 flex-grow-1 overflow-auto">
      <!-- CHAT LEFT -->
      <div class="d-flex justify-content-start">
        <div
          class="border p-2 rounded-4 rounded-top-0 rounded-end-4 w-75"
          style="background-color: #f5deb3"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptatem perferendis possimus aliquam esse pariatur, recusandae
          aperiam cumque culpa, expedita eum. Ipsa vel aut delectus, quam minus
          praesentium autem accusamus.
        </div>
      </div>
      <!-- CHAT RIGHT -->
      <div class="d-flex justify-content-end">
        <div
          class="border p-2 rounded-4 rounded-end-0 rounded-bottom-4 w-75"
          style="background-color: #b0e0e6"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptatem perferendis possimus aliquam esse pariatur, recusandae
          aperiam cumque culpa, expedita eum. Ipsa vel aut delectus, quam minus
          praesentium autem accusamus.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Post from "@/components/post.vue";
import CreatePost from "@/components/create-post.vue";
import { ref } from "vue";
const props = defineProps({
  student: {
    type: Object,
    required: true,
  },
  isOwnTimeline: {
    type: Boolean,
    required: true,
  },
  authStudentId: {
    type: Number,
    required: true,
  },
});

const showMessage = ref(false);

const emits = defineEmits([
  "postCreatedTimeline",
  "postDeletedTimeline",
  "addFriend",
]);
const apiUrl = import.meta.env.VITE_API_URL;

const postCreated = () => {
  emits("postCreatedTimeline", props.student.id);
};

const deletePost = (postId) => {
  emits("postDeletedTimeline", props.student.id, postId);
};

const addFriend = () => {
  emits("addFriend", props.student.id);
};
</script>

<style scoped>
.cover-photo {
  width: 100%;
  height: 100%;
  object-position: bottom;
}
.profile-photo {
  border-radius: 1rem;
  border: 2px solid #eee;
  position: absolute;
  left: 30px;
  bottom: -100px;
}
</style>
