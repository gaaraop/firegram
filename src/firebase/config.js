import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD1OWwhfQrRY5EBKNvOI-5PraI_K5WJ_j8",
    authDomain: "firegram-270da.firebaseapp.com",
    projectId: "firegram-270da",
    storageBucket: "firegram-270da.appspot.com",
    messagingSenderId: "680409597958",
    appId: "1:680409597958:web:45f1aa53d077e3bf7b9b87"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };