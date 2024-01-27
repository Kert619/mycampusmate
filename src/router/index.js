import { createRouter, createWebHistory } from "vue-router";

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
    },
    {
      path: "/admin/user-applications",
      component: () => import("@/pages/admin/applications/index.vue"),
    },
    {
      path: "/admin/user-applications/:id",
      component: () => import("@/pages/admin/applications/[id].vue"),
    },
    {
      path: "/admin/settings",
      component: () => import("@/pages/admin/settings.vue"),
    },
    {
      path: "/admin/community",
      component: () => import("@/pages/admin/community.vue"),
    },
    {
      path: "/student/newsfeed",
      component: () => import("@/pages/student/dashboard.vue"),
    },
    {
      path: "/student/:id/profile",
      component: () => import("@/pages/student/edit-profile.vue"),
    },
  ],
});

export default router;
