<template>
  <div class="min-vh-100 d-flex flex-column overflow-auto">
    <!-- ADMIN NAVIGATION BAR -->
    <AdminNav></AdminNav>
    <div class="d-flex flex-grow-1 overflow-auto">
      <!-- ADMIN SIDEBAR -->
      <AdminSideBar></AdminSideBar>
      <!-- MAIN CONTENT -->
      <div class="p-3 flex-grow-1">
        <h3 class="mb-3">Messages</h3>
        <div class="container">
          <div class="d-grid" v-for="user in users">
            <RouterLink
              :to="`/admin/messages/${user.id}`"
              class="btn border-bottom d-flex align-items-center justify-content-start gap-3"
            >
              <VLazyImage
                :src="`${apiUrl}${user.student.student_profile.file_path}${user.student.student_profile.file_rand_name}`"
                width="48"
                height="48"
                class="rounded-circle"
              />
              <span>{{
                user.student.first_name +
                " " +
                user.student.middle_name +
                " " +
                user.student.last_name
              }}</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import api from "@/http/api";
import AdminNav from "@/components/admin-nav.vue";
import AdminSideBar from "@/components/admin-sidebar.vue";
import { onMounted, ref } from "vue";

const users = ref(null);

const apiUrl = import.meta.env.VITE_API_URL;

// GET ALL USERS
const loadUsers = async () => {
  const response = await api.get("/admin/getAllStudent/");
  users.value = response.data;
};

// LOAD USERS WHEN PAGE LOADS
onMounted(async () => {
  await loadUsers();
});
</script>
