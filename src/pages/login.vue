<template>
  <div class="d-flex justify-content-center">
    <!-- WE ADD .PREVENT TO AVOID RELOADING THE PAGE WHEN THE FORM SUBMITS -->
    <form class="my-5 p-5 border" @submit.prevent="submitForm">
      <div class="d-flex justify-content-center mb-3">
        <img src="@/assets/images/logo.png" width="300" />
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
        <button type="submit" class="btn btn-primary">Login</button>
      </div>

      <p class="mt-3 text-center">
        Not a member? Sign up
        <RouterLink to="/register">here</RouterLink>
      </p>
    </form>
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
  const response = await api.post("/jwt/login", form.value);
  const token = response.data.token;

  if (token) {
    // STORE THE TOKEN IN LOCAL STORAGE IF LOGIN SUCCESS
    localStorage.setItem("token", token);
    authStore.token = token;

    if (response.data.data.usertype === "admin") {
      // REDIRECT TO ADMIN DASHBOARD IF USERTYPE IS ADMIN
      router.push("/admin/dashboard");
    } else {
      // REDIRECT TO STUDENT DASHBOARD IF USERTYPE IS STUDENT
      router.push("/student/dashboard");
    }
  } else {
    // POPULATE ERROR MESSAGE IF LOGIN FAILED
    errorMsg.value = response.data;
  }
};
</script>

<style scoped>
form {
  width: 500px;
}
</style>
