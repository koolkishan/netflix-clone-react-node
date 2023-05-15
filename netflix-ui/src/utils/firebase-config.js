import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-9ULKBlWdevghDN8ZV0yEI-r2legpVo4",
  authDomain: "calltech-8c94e.firebaseapp.com",
  projectId: "calltech-8c94e",
  storageBucket: "calltech-8c94e.appspot.com",
  messagingSenderId: "473021741610",
  appId: "1:473021741610:web:7b86ad1bab6bb4e3d52153",
  measurementId: "G-TBK5RRHNF5"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
