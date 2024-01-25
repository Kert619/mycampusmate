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

      <!-- SHOW ONLY THIS SUCCESS MESSAGE WHEN SUCCESSFULLY REGISTERED -->
      <div class="alert alert-success" role="alert" v-if="showSuccess">
        <span class="fw-bold">Successfully registered!</span> You will have to
        wait for the confirmation of your account from the admin before you can
        login.
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
      <RouterLink to="/login" class="btn btn-secondary ms-2">Back</RouterLink>
    </form>
  </div>
</template>

<script setup>
import api from "@/http/api";
import { ref } from "vue";

// THIS IS WHERE THE USER INPUT WILL BE STORED AND EVENTUALLY WILL BE SENT INTO THE API
const form = ref({
  first_name: "",
  last_name: "",
  middle_name: "",
  username: "",
  password: "",
  usertype: "student",
});

const showSuccess = ref(false);

// SUBMIT THE FORM
const submitForm = async () => {
  const response = await api.post("/jwt/register", form.value);
  // CLEAR THE INPUTS WHEN SUCCESSFULLY REGISTERED
  if (response.status === 200) {
    form.value.first_name = "";
    form.value.last_name = "";
    form.value.middle_name = "";
    form.value.username = "";
    form.value.password = "";
    form.value.usertype = "";
    showSuccess.value = true;
  }
};
</script>
