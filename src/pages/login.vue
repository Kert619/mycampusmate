<template>
  <div>
    <vLazyImage
      src="/bg.png"
      src-placeholder="/bg-thumbnail.png"
      class="bg-img"
    />
    <div class="darken"></div>
    <div class="d-flex justify-content-center">
      <!-- WE ADD .PREVENT TO AVOID RELOADING THE PAGE WHEN THE FORM SUBMITS -->
      <form class="my-5 p-5 border bg-white" @submit.prevent="submitForm">
        <div class="d-flex justify-content-center mb-3">
          <VLazyImage src="/logo.png" width="300" />
        </div>
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input type="text" class="form-control" v-model="form.username" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" v-model="form.password" />
        </div>

        <!-- DISPLAY ERROR MESSAGE IF THE ERRORMSG VARIABLE HAS A VALUE OR NOT EMPTY -->
        <div class="alert alert-danger text-center" v-if="errorMsg">
          {{ errorMsg }}
        </div>

        <div class="d-grid">
          <button type="submit" class="btn btn-danger">Login</button>
        </div>

        <p class="mt-3 text-center">
          Not a member? Sign up
          <RouterLink to="/register" class="">here</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import api from "@/http/api";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const router = useRouter();
const authStore = useAuthStore();

// THIS IS WHERE THE USER INPUT WILL BE STORED AND EVENTUALLY WILL BE SENT INTO THE API
const form = ref({
  username: "",
  password: "",
});

// WE STORE THE ERROR MESSAGE HERE IF LOGIN FAILED
const errorMsg = ref(null);

// SUBMIT THE FORM
const submitForm = async () => {
  try {
    const response = await api.post("/jwt/login/", form.value);

    // STORE THE TOKEN IN LOCAL STORAGE IF LOGIN SUCCESS
    const token = response.data.token;
    localStorage.setItem("token", token);
    authStore.token = token;

    const res = await api.get("/jwt/getOne/");
    authStore.userInfo = res.data;

    if (response.data.data.usertype === 1) {
      // REDIRECT TO ADMIN DASHBOARD IF USERTYPE IS ADMIN
      router.push("/admin/dashboard");
    } else {
      // REDIRECT TO STUDENT DASHBOARD IF USERTYPE IS STUDENT
      router.push("/student/newsfeed");
    }
  } catch (error) {
    console.log(error);
    errorMsg.value = error.response.data;
  }
};
</script>

<style scoped>
form {
  width: 500px;
  z-index: 999;
}

.darken {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  pointer-events: none;
}

.bg-blur {
  backdrop-filter: blur(5px);
}

.bg-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>
