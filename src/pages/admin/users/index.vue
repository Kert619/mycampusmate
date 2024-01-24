<template>
  <div>
    <!-- ADMIN NAVIGATION -->
    <AdminNav />
    <div class="p-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">Admin</li>
          <li class="breadcrumb-item active">Users</li>
        </ol>
      </nav>

      <div class="container">
        <div class="d-flex justify-content-end">
          <RouterLink to="/admin/users/create" class="btn btn-primary"
            >Create User</RouterLink
          >
        </div>

        <div class="table-responsive">
          <!-- DISPLAY LOADING IF FETCHING IS NOT DONE -->
          <div v-if="loading">LOADING...</div>

          <!-- DISPLAY THIS TABLE IF FETCHING IS DONE -->
          <table class="table" v-else-if="users">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Middle Name</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, idx) in users">
                <th scope="row">{{ idx + 1 }}</th>
                <td>{{ user.first_name }}</td>
                <td>{{ user.last_name }}</td>
                <td>{{ user.middle_name }}</td>
                <td>
                  <!-- 0 = PENDING, 1 = APPROVED, 2 = REJECTED -->
                  <!-- DISPLAY PENDING BADGE IF USER STATUS IS PENDING -->
                  <span
                    v-if="user.is_approved == 0"
                    class="badge rounded-pill text-bg-primary"
                    >Pending</span
                  >
                  <!-- DISPLAY APPROVED BADGE IF USER STATUS IS APPROVED -->
                  <span
                    v-if="user.is_approved == 1"
                    class="badge rounded-pill text-bg-success"
                    >Approved</span
                  >
                  <!-- DISPLAY REJECTED BADGE IF USER STATUS IS REJECTED -->
                  <span
                    v-if="user.is_approved == 2"
                    class="badge rounded-pill text-bg-danger"
                    >Rejected</span
                  >
                </td>
                <td>
                  <!-- DISABLE BUTTON IF USER IS APPROVED OR REJECTED -->
                  <button
                    type="button"
                    class="btn btn-success me-3"
                    :disabled="user.is_approved"
                    @click="approveStudent(user.id)"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    :disabled="user.is_approved"
                    @click="rejectStudent(user.id)"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import api from "@/http/api";
import AdminNav from "@/components/admin-nav.vue";
import { onMounted, ref } from "vue";

const loading = ref(false);
const users = ref(null);

// GET ALL USERS
const loadUsers = async () => {
  loading.value = true;
  const response = await api.get("/admin/getAllStudent/");
  users.value = response.data;
  loading.value = false;
};

// LOAD USERS WHEN PAGE LOADS
onMounted(async () => {
  await loadUsers();
});

// APPROVE STUDENT
const approveStudent = async (id) => {
  await api.put("/admin/approveStudent/", null, { params: { id } });
  const user = users.value.find((x) => x.id == id);
  user.is_approved = 1;
};

// REJECT STUDENT
const rejectStudent = async (id) => {
  await api.delete("/admin/rejectStudent/", { params: { id } });
  const user = users.value.find((x) => x.id == id);
  user.is_approved = 2;
};
</script>
