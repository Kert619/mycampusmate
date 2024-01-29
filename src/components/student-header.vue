<template>
  <!-- STUDENT PAGE HEADER -->
  <nav class="navbar navbar-expand-lg shadow">
    <div class="container">
      <span class="navbar-brand">
        <VLazyImage src="/logo.png" width="200" />
      </span>
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
            <span> <img src="/about.png" height="60" loading="lazy" /></span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
