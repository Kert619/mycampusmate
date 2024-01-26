<template>
  <div class="min-vh-100 d-flex flex-column overflow-auto bg-light">
    <!-- ADMIN NAVIGATION BAR -->
    <AdminNav></AdminNav>
    <div class="d-flex flex-grow-1 overflow-auto">
      <!-- ADMIN SIDEBAR -->
      <AdminSideBar></AdminSideBar>
      <!-- MAIN CONTENT -->
      <div class="p-3 flex-grow-1">
        <h3 class="mb-3">Profile</h3>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div
                class="border p-5 d-flex align-items-center flex-column gap-3 bg-white mb-3"
              >
                <img
                  src="/profile.png"
                  width="150"
                  height="150"
                  class="border rounded-circle"
                  ref="imageRef"
                />
                <input
                  type="file"
                  class="d-none"
                  id="file"
                  accept="image/*"
                  @change="fileSelected"
                />
                <label for="file" class="btn btn-primary">Change Photo</label>
              </div>

              <div class="border bg-white">
                <p class="fw-bold text-secondary p-2">Change Password</p>

                <div class="p-3">
                  <form>
                    <div class="mb-3">
                      <label class="form-label">New Password</label>
                      <input type="password" class="form-control" required />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Change Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="border bg-white mb-3">
                <p class="fw-bold text-secondary p-2 mb-3">User Settings</p>

                <div class="p-3">
                  <form>
                    <div class="row mb-3">
                      <div class="col-md-6">
                        <label class="form-label">Username</label>
                        <input type="text" class="form-control" required />
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" required />
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Save Settings
                    </button>
                  </form>
                </div>
              </div>

              <div class="border bg-white">
                <p class="fw-bold text-secondary p-2 mb-3">Contact Settings</p>

                <div class="p-3">
                  <form>
                    <div class="row mb-3">
                      <div class="col-12">
                        <label class="form-label">Address</label>
                        <input type="text" class="form-control" required />
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Contact</label>
                        <input type="text" class="form-control" required />
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Emergency Contact</label>
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Save Settings
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdminNav from "@/components/admin-nav.vue";
import AdminSideBar from "@/components/admin-sidebar.vue";
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";

const imageRef = ref(null);

const user = ref({});

const fileSelected = (e) => {
  const input = e.target;

  if (!input.files || input.files.length === 0) return;

  const reader = new FileReader();
  const file = input.files[0];

  reader.onload = (result) => {
    imageRef.value.src = result.target.result;
  };

  reader.readAsDataURL(file);
};
</script>
