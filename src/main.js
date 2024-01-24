// import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "../router";
import { createPinia } from "pinia";

// CREATE VUE APP INSTANCE
const app = createApp(App);
// CREATE PINIA INSTANCE FOR GLOBAL STATE MANAGEMENT
const pinia = createPinia();

// USE PINIA FOR GLOBAL STATE MANAGEMENT
app.use(pinia);
// USE ROUTER FOR MULTI PAGE NAVIGATION
app.use(router);

// MOUNT THE PAGE TO DIV WITH AN ID OF APP
app.mount("#app");
