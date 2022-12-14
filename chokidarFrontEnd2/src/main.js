import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getFunctions, httpsCallable } from 'firebase/functions';
import { videosList } from "./videosList";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBBJKklaYU772b6kHbOWQFmcpm5zw8pPI4",
    authDomain: "btcv2-9892c.firebaseapp.com",
    projectId: "btcv2-9892c",
    storageBucket: "btcv2-9892c.appspot.com",
    messagingSenderId: "926821013818",
    appId: "1:926821013818:web:8c320fdfd845978fcb9803"
  };

  const app = initializeApp(firebaseConfig)
  
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  
  //Initialize Cloud Functions and get a reference to the service
  const functions = getFunctions(app);

  //THIS IS AIRTABLE!!!
  export const callAirtable = async () => {
    let data = {};
    const ytLinks = httpsCallable(functions, 'ytlinks');
    await ytLinks({ text: "" })
    .then( (result) => {
      // Read result of the Cloud Function.
      console.log("Remote lambda RESULT 3 ", result)
      data = result.data;
    })
    .catch ( e => {
      console.error(" ERR: ", e)
    })
    return data;
  }


//make sure to pay attention to the name of the database.
//THIS IS FIRESTORE!!
export const queryFirebase = async () => {
  const results = [];

  const queryDB = async () => {
    const x = await getDocs(collection(db, 'test'))
    x.forEach( (doc) => {
      results.push(doc.data())
    });
  }

  await queryDB();
  return results;
}