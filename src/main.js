import { createApp } from 'vue';
import App from './MainPageForUser.vue';
import router from './router'; 
import './assets/styles/style.css';
import './assets/styles/login.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartSimple, faUsersRectangle, faEnvelope, faUtensils, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Add icons to library
library.add(faChartSimple, faUsersRectangle, faEnvelope, faUtensils, faGear, faMagnifyingGlass);

// Create Vue application
const app = createApp(App);

// Use router
app.use(router);

// Register FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app
app.mount('#app');
