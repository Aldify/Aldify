import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBackwardStep,
  faPlay,
  faForwardStep,
  faMagnifyingGlass,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBackwardStep);
library.add(faPlay);
library.add(faPause);
library.add(faForwardStep);
library.add(faMagnifyingGlass);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
