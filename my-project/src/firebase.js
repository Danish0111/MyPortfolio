import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCdoZieeA9IRKP6EuvUHFVhNuD8G7ndIhA",
    authDomain: "myportfolio-9e866.firebaseapp.com",
    projectId: "myportfolio-9e866",
    storageBucket: "myportfolio-9e866.appspot.com",
    messagingSenderId: "860876919718",
    appId: "1:860876919718:web:ff83918893a3cdaef67567",
    databaseURL: "https://myportfolio-9e866-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app); // If using Firebase Storage

export { database, storage };
  