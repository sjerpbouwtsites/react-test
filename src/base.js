import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBHLmYZ6E1F-hVjSD_CmOx9kDH4BsKRmpA",
  authDomain: "react-test-f5b91.firebaseapp.com",
  databaseURL: "https://react-test-f5b91-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "react-test-f5b91",
  storageBucket: "react-test-f5b91.appspot.com",
  messagingSenderId: "2131754899",
  appId: "1:2131754899:web:5f0f8f5e0971401fe03266",
  measurementId: "G-6EMHDK6HP4"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }

export default base;