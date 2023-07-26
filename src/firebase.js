import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbL4axGsGU48qyuExr2ESY7NkYaI3gYI0",
  authDomain: "hackathon-navigator.firebaseapp.com",
  projectId: "hackathon-navigator",
  storageBucket: "hackathon-navigator.appspot.com",
  messagingSenderId: "712885091215",
  appId: "1:712885091215:web:4905f7190e3a3525f8e9fa",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
