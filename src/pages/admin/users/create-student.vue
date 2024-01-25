<template>
  <div>
    <!-- ADMIN NAVIGATION -->
    <AdminNav />
    <div class="p-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">Admin</li>
          <li class="breadcrumb-item">Users</li>
          <li class="breadcrumb-item active">Create User</li>
        </ol>
      </nav>
      <div class="container">
        <!-- WE ADD .PREVENT TO AVOID RELOADING THE PAGE WHEN THE FORM SUBMITS -->
        <form @submit.prevent="submitForm">
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
            <input
              type="text"
              class="form-control"
              v-model="form.middle_name"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input type="text" class="form-control" v-model="form.username" />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              v-model="form.password"
            />
          </div>
          <RouterLink to="/admin/users" class="btn btn-secondary"
            >Back</RouterLink
          >
          <button type="submit" class="btn btn-primary ms-3">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdminNav from "@/components/admin-nav.vue";
import api from "@/http/api";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// THIS IS WHERE THE USER INPUT WILL BE STORED AND EVENTUALLY WILL BE SENT INTO THE API
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
  const response = await api.post("/admin/createStudent/", form.value);
  if (response.data.status === 200) {
    // REDIRECT TO USERS PAGE IF SUCCESS
    router.push("/admin/users");
  }
};
</script>
