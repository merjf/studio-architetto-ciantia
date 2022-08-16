import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdZ2ec4KizgQz5El31Ads4ISFV0r6bTDM",
  authDomain: "salvatoreciantiaarchitet-56b67.firebaseapp.com",
  projectId: "salvatoreciantiaarchitet-56b67",
  storageBucket: "salvatoreciantiaarchitet-56b67.appspot.com",
  messagingSenderId: "644249899862",
  appId: "1:644249899862:web:46a94086a2de0247a43cf7",
  measurementId: "G-FVEK6B6G3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.use(Vuetify)
const vuetify = new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: 'white',
        secondary: '#455A64',
        accent: '#455A64',
      }
    }
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
