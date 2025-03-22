import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'
import Particles from "@tsparticles/vue3"
import { loadSlim } from "@tsparticles/slim"
import { MotionPlugin } from "@vueuse/motion";
import Tooltip from 'primevue/tooltip';

const app = createApp(App)
app.directive('tooltip', Tooltip);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        darkModeSelector: false
    }
});
app.use(MotionPlugin)
app.use(Particles, {
    init: async engine => {
        await loadSlim(engine);
    }
})
app.mount('#app')
