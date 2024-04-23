import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { 
  getAuth, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  FacebookAuthProvider     
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAvSwN3ixzAeun5lv8tpe8OY-Ps0TkoGKM",
  authDomain: "rosalia-b2798.firebaseapp.com",
  projectId: "rosalia-b2798",
  storageBucket: "rosalia-b2798.appspot.com",
  messagingSenderId: "331091686613",
  appId: "1:331091686613:web:c8e886e52c825e9d69de5c",
  measurementId: "G-2NHYDL4KXZ"
};

const providerface = new FacebookAuthProvider();
const providergoogle = new GoogleAuthProvider(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginvalidation = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout=()=>signOut(auth)

export const UserRegister = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

export const everification=()=>  
  sendEmailVerification(auth.currentUser)

export const resetPassword=()=>
  sendPasswordResetEmail(auth, email)

export function observador(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      window.location.href = "../Index.html"
    }
  });
}

