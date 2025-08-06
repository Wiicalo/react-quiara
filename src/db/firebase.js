import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4qLWilaK3gnNJr_z-_L2TO91Uv2ruveg",
    authDomain: "ecommer-proyectofinal.firebaseapp.com",
    projectId: "ecommer-proyectofinal",
    storageBucket: "ecommer-proyectofinal.firebasestorage.app",
    messagingSenderId: "147069293587",
    appId: "1:147069293587:web:bafaec940f8599baa99be6"
  };

  const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth = getAuth(app);


const signIn = async () => {
    try {
        await signInAnonymously(auth);
        console.log("Autenticación con Firebase exitosa.");
    } catch (error) {
        console.error("Error de autenticación con Firebase:", error);
    }
};


signIn();


export { db, auth };