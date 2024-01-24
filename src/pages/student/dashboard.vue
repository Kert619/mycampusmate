<template>
  <div class="vw-100 vh-100 d-flex flex-column overflow-auto">
    <!-- HEADER -->
    <StudentHeader></StudentHeader>
    <main class="flex-grow-1 container overflow-auto">
      <div class="row h-100 overflow-auto">
        <!-- LEFT SIDEBAR -->
        <div class="col h-100 overflow-auto">
          <div class="p-3 h-100 overflow-auto d-flex flex-column">
            <!-- SEARCH PERSON INPUT -->
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search person here"
              />
            </div>

            <!-- NAVIGATION BUTTONS -->
            <div class="flex-grow-1 overflow-auto">
              <div class="d-grid gap-2">
                <!-- HOME BUTTON -->
                <button
                  class="btn btn-outline-primary text-start d-flex align-items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-house"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
                    />
                  </svg>
                  <span>Home</span>
                </button>
                <!-- MY TIMELINE BUTTON -->
                <button
                  class="btn btn-outline-primary text-start d-flex align-items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-range"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M9 7a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1M1 9h4a1 1 0 0 1 0 2H1z"
                    />
                    <path
                      d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
                    />
                  </svg>
                  <span>My Timeline</span>
                </button>
                <!-- PROFILE BUTTON -->
                <button
                  class="btn btn-outline-primary text-start d-flex align-items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                    />
                  </svg>
                  <span>Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- MAIN CONTENT/NEWSFEED -->
        <div
          class="col col-6 overflow-auto h-100 overflow-auto bg-body-secondary"
        >
          <div class="p-3 h-100 overflow-auto d-flex flex-column gap-3">
            <CreatePost></CreatePost>
            <FriendPost></FriendPost>
            <FriendPost></FriendPost>
            <FriendPost></FriendPost>
          </div>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import StudentHeader from "@/components/student-header.vue";
import FriendList from "@/components/friend-list.vue";
import CreatePost from "@/components/create-post.vue";
import FriendPost from "@/components/friend-post.vue";
</script>
