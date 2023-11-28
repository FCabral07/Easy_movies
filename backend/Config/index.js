import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const db = getFirestore(app);

const firebaseConfig = {
  apiKey: "AIzaSyApdTPa1cdZy6D1BUTNh061ghMig5od4k8",
  authDomain: "izymovies-b8f2e.firebaseapp.com",
  projectId: "izymovies-b8f2e",
  storageBucket: "izymovies-b8f2e.appspot.com",
  messagingSenderId: "438224862362",
  appId: "1:438224862362:web:f7b45ab4cb54069d6bb323",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;