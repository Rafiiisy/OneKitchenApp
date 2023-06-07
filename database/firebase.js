import firebase from 'firebase/compat/app';
import {getDatabase} from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyAJIDl9HpPB-lqCZPK0a2sIsPlvdu2jceY",

  authDomain: "onek-3e750.firebaseapp.com",

  databaseURL:
    "https://onek-3e750-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "onek-3e750",

  storageBucket: "onek-3e750.appspot.com",

  messagingSenderId: "469274829509",

  appId: "1:469274829509:web:19d69d177cb80aaa0606ac",

  measurementId: "G-2XM9N17CGK",
};

if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export {db}
