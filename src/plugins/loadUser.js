import { useAuthStore } from "@/stores/authStore";
import api from "@/http/api";
export default {
  // LOAD USER BEFORE LOADING ANY PAGE SO THAT WE CAN ACCESS THE CURRENT USER IN ANY PAGE
  install: async () => {
    const authStore = useAuthStore();
    const token = localStorage.getItem("token");
    if (!authStore.userInfo && token) {
      const response = await api.get("/jwt/getOne/");
      authStore.userInfo = response.data;
    }
  },
};
