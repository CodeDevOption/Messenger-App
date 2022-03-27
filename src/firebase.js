import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO472huH7pYia4I4O__-eWUkTAC66inlI",
  authDomain: "messenger-26e05.firebaseapp.com",
  projectId: "messenger-26e05",
  storageBucket: "messenger-26e05.appspot.com",
  messagingSenderId: "198548290199",
  appId: "1:198548290199:web:ca26ff8a9308e220aec7d2",
  measurementId: "G-LVYKQ55TN9"
};

  const App = initializeApp(firebaseConfig);
  const db = getFirestore(App);
  
export default db