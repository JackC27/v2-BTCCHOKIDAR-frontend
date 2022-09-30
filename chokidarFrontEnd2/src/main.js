import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { videosList } from "./videosList";
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
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  

// export const addDocumentToFirebase = async () => {
//   // videosList
//   // Add a new document in collection "cities"
//   await videosList.forEach( async i => {
//     await addDoc(collection(db, "youtubelinks"), i);
//   })
  
//   console.log(" DONE ADDING ")

// }

export const queryFirebase = async () => {
  const results = [];

  const queryDB = async function(){
    const x = await getDocs(collection(db, "youtubelinks"))
    x.forEach(async (doc) => {
      await results.push(doc.data())
    });
  }

  await queryDB();
  return results;
}
