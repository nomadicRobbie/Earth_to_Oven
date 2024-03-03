import { createApp } from "vue";

import router from "./router";
// import Vuex from 'vuex'
import store from "./store/store.js";
import App from "./App.vue";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEdit, faPlus, faSave, faTrash, faBars, faSort, faMinusCircle, faPlusCircle, faEnvelope, faCaretDown, faShoppingCart, faShop, faShoppingBasket, faCircleArrowLeft, faCircleArrowRight, faTrashCan} from "@fortawesome/free-solid-svg-icons";
library.add( faFacebook, faInstagram, faPhone, faEdit, faPlus, faSave, faTrash, faBars, faSort, faMinusCircle, faPlusCircle, faEnvelope, faCaretDown, faShoppingCart, faShop, faShoppingBasket, faCircleArrowLeft, faCircleArrowRight, faTrashCan);

store.dispatch('loadCartFromLocalStorage');

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(store);

app.mount('#app')
