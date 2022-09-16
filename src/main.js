import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtSgWTNJ9DCTIhQAO62oLqeCFEQQ--h2I",
  authDomain: "btcchokidar-362406.firebaseapp.com",
  projectId: "btcchokidar-362406",
  storageBucket: "btcchokidar-362406.appspot.com",
  messagingSenderId: "509873204247",
  appId: "1:509873204247:web:12b8b16dde3d230f918052"
};

const app = initializeApp(firebaseConfig)

console.log(" APP ", app)