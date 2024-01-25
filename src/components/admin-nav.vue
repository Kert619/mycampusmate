<template>
  <!-- ADMIN NAVIGATION -->
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container">
      <a class="navbar-brand" href="#">
        <!-- <img src="@/assets/images/logo.png" width="200" /> -->
        My Campus Mate
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink
              active-class=" active"
              class="nav-link"
              to="/admin/dashboard"
            >
              Dashboard</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              active-class=" active"
              class="nav-link"
              to="/admin/users"
            >
              Users</RouterLink
            >
          </li>
          <li class="nav-item">
            <button class="btn nav-link" @click="logout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import api from "@/http/api";

const logout = async () => {
  const response = await api.get("/jwt/logout/");
  if (response.status === 200) {
    localStorage.removeItem("token");
    window.location.reload();
  }
};
</script>
