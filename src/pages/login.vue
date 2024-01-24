<template>
  <div class="d-flex justify-content-center">
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

const form = ref({
  username: "",
  password: "",
});

const errorMsg = ref(null);

const submitForm = async () => {
  const response = await api.post("/jwt/login", form.value);
  const token = response.data.token;

  if (token) {
    localStorage.setItem("token", token);
    authStore.token = token;

    if (response.data.data.usertype === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/student/dashboard");
    }
  } else {
    errorMsg.value = response.data;
  }
};
</script>

<style scoped>
form {
  width: 500px;
}
</style>
