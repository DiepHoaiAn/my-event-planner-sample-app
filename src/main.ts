/**
 * Bootstraps Vue app, registers plugins, creates Pinia store, 
 * initializes mock data, and mounts main App component
 */

// AWS Amplify
// @ts-ignore
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';
Amplify.configure(awsExports);


// Components
import App from './App.vue';
import { createPinia } from 'pinia';
import { useDataStore } from './store/data';

// Composables
import { ref, Ref, createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';

// Create app
const pinia = createPinia();
const app = createApp(App);

registerPlugins(app);
app.use(pinia);

// Optional: initialize mock data if needed
const dataStore = useDataStore();
dataStore.initMockData();

app.mount('#app');
