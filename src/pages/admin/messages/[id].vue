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
      </div>
    </div>
  </div>
</template>

<script setup>
import api from "@/http/api";
import AdminNav from "@/components/admin-nav.vue";
import AdminSideBar from "@/components/admin-sidebar.vue";
import { onMounted, ref } from "vue";

const apiUrl = import.meta.env.VITE_API_URL;
</script>
