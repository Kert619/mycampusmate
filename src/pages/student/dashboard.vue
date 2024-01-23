<template>
  <div class="vw-100 vh-100 d-flex flex-column overflow-auto">
    <StudentNav></StudentNav>
    <main class="flex-grow-1 container overflow-auto">
      <div class="row h-100 overflow-auto">
        <!-- LEFT SIDEBAR -->
        <div class="col h-100 overflow-auto">
          <div class="p-3 h-100 overflow-auto d-flex flex-column">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search person here"
              />
            </div>

            <div class="flex-grow-1 overflow-auto"></div>
          </div>
        </div>

        <!-- MAIN CONTENT -->
        <div class="col col-6 overflow-auto h-100 overflow-auto">
          <div class="border-start border-end p-3 h-100 overflow-auto"></div>
        </div>

        <!-- RIGHT SIDEBAR -->
        <div class="col h-100 overflow-auto">
          <div class="p-3 h-100 overflow-auto d-flex flex-column">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search friend here"
              />
            </div>

            <div class="flex-grow-1 overflow-auto">
              <FriendList></FriendList>
              <FriendList></FriendList>
              <FriendList></FriendList>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import StudentNav from "@/components/student-nav.vue";
import FriendList from "@/components/friend-list.vue";
</script>

<style scoped>
.overflow-auto {
  overflow: hidden !important;
}
.overflow-auto:hover {
  overflow: auto !important;
}
</style>
