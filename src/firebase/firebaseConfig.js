// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC6SlQgnlwlJd8tdqU8KJFY-x_EdPWYosE',
  authDomain: 'firbase-chat-e8271.firebaseapp.com',
  projectId: 'firbase-chat-e8271',
  storageBucket: 'firbase-chat-e8271.appspot.com',
  messagingSenderId: '875457110252',
  appId: '1:875457110252:web:9d6e6e18bce02d640c85c9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
