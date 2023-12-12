import { initializeApp } from "firebase/app";
import { FIREBASE_KEY, FIREBASE_ID } from '../../env'

const firebaseConfig = {
  apiKey: `${FIREBASE_KEY}`,
  authDomain: "izymovies-b8f2e.firebaseapp.com",
  projectId: "izymovies-b8f2e",
  storageBucket: "izymovies-b8f2e.appspot.com",
  messagingSenderId: "438224862362",
  appId: `${FIREBASE_ID}`,
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

export default App;