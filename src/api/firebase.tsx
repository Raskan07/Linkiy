// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUGPqTmEaAd6eM_exI1hlxsQnqAoy2emU",
  authDomain: "linkdin-clone-6cd5f.firebaseapp.com",
  projectId: "linkdin-clone-6cd5f",
  storageBucket: "linkdin-clone-6cd5f.appspot.com",
  messagingSenderId: "1018502525549",
  appId: "1:1018502525549:web:fe977826837a0694b2c564",
  measurementId: "G-SED1CTHJL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app,"gs://linkdin-clone-6cd5f.appspot.com")