import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const auth = (to, from, next) => {
  const authStore = useAuthStore();
  const token = authStore.token;

  if (token) {
    next();
  } else {
    next("/login");
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/index.vue"),
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
      beforeEnter: auth,
      children: [
        {
          path: "",
          component: () => import("@/pages/admin/users/index.vue"),
        },
        {
          path: "/admin/users/create",
          component: () => import("@/pages/admin/users/create-student.vue"),
        },
      ],
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
