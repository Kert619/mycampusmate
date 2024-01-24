<template>
  <div class="container">
    <!-- WE ADD .PREVENT TO AVOID RELOADING THE PAGE WHEN THE FORM SUBMITS -->
    <form class="mt-5 p-5" @submit.prevent="submitForm">
      <div class="mb-3">
        <label class="form-label">First Name</label>
        <input type="text" class="form-control" v-model="form.first_name" />
      </div>
      <div class="mb-3">
        <label class="form-label">Last Name</label>
        <input type="text" class="form-control" v-model="form.last_name" />
      </div>
      <div class="mb-3">
        <label class="form-label">Middle Name</label>
        <input type="text" class="form-control" v-model="form.middle_name" />
      </div>
      <div class="mb-3">
        <label class="form-label">Username</label>
        <input type="text" class="form-control" v-model="form.username" />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" v-model="form.password" />
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script setup>
import api from "@/http/api";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// THIS IS THE USER DATA OR INPUT WILL BE STORED AND EVENTUALLY WILL BE SENT INTO THE API
const form = ref({
  first_name: "",
  last_name: "",
  middle_name: "",
  username: "",
  password: "",
  usertype: "student",
});

// SUBMIT THE FORM
const submitForm = async () => {
  const response = await api.post("/jwt/register", form.value);
  // REDIRECT THE USER TO LOGIN PAGE WHEN SUCCESSFULLY REGISTERED
  if (response.status === 200) {
    router.push("/");
  }
};
</script>
