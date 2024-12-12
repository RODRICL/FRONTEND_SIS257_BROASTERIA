// Importa estilos y librerías en el orden correcto
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

// Importa los estilos necesarios
import './assets/themes/aura.css';
import 'primeicons/primeicons.css'; // Iconos de PrimeVue

// Importa tu aplicación principal y el enrutador
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.mount('#app');
