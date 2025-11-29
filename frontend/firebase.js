import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "safarmeal-f717.firebaseapp.com",
  projectId: "safarmeal-f717",
  storageBucket: "safarmeal-f717.appspot.com",
  messagingSenderId: "693314883513",
  appId: "1:693314883513:web:4840c943ecf3fb61a33068"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
