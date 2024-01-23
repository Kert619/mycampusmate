<template>
  <nav class="navbar navbar-expand-lg bg-white shadow">
    <div class="container">
      <RouterLink to="/student/dashboard" class="navbar-brand">
        <img src="@/assets/images/logo.png" width="200" />
      </RouterLink>
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
              My Timeline</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              active-class=" active"
              class="nav-link"
              to="/admin/users"
            >
              Profile</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
