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
            <a
              class="nav-link"
              href="https://www.coderstribe.net"
              target="_blank"
            >
              <img src="@/assets/images/coderstribe.png" height="60"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
