import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import router from "./router/index.js"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const firebaseConfig = {
  apiKey: "AIzaSyDFUG7mnprtqkyKI7XGeWRp28MnKJO7Ktc",
  authDomain: "authentication-project-d02de.firebaseapp.com",
  projectId: "authentication-project-d02de",
  storageBucket: "authentication-project-d02de.appspot.com",
  messagingSenderId: "517691937309",
  appId: "1:517691937309:web:bd02ffdf68ff6f792a2cf4",
  measurementId: "G-0GJVZTW2CF"
  };

initializeApp(firebaseConfig);
const app = createApp(App)
app.use(router)
app.mount('#app')
