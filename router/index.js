import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

// IF USER IS NOT AUTHENTICATED, REDIRECT TO LOGIN PAGE
const auth = (to, from, next) => {
  const authStore = useAuthStore();

  if (authStore.token) {
    next();
  } else {
    next("/login");
  }
};

// CREATE ROUTER INSTANCE TO BE USED BY THE APP
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/pages/login.vue"),
    },
    {
      path: "/register",
      component: () => import("@/pages/register.vue"),
    },
    {
      path: "/admin/dashboard",
      component: () => import("@/pages/admin/dashboard.vue"),
      beforeEnter: auth,
    },
    {
      path: "/admin/users",
      component: () => import("@/pages/admin/users/index.vue"),
      beforeEnter: auth,
    },
    {
      path: "/admin/users/create",
      component: () => import("@/pages/admin/users/create-student.vue"),
      beforeEnter: auth,
    },
    {
      path: "/student/dashboard",
      component: () => import("@/pages/student/dashboard.vue"),
      beforeEnter: auth,
    },
    {
      path: "/student/edit/:id",
      component: () => import("@/pages/student/edit-profile.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/pages/not-found.vue"),
    },
  ],
});

export default router;
