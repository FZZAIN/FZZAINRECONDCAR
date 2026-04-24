const firebaseConfig = {
  apiKey: "AIzaSyDOOk23Vg3SdQln7FXqHe9slbsaxPz3_4s",
  authDomain: "fzzainrecondcar.firebaseapp.com",
  projectId: "fzzainrecondcar",
  storageBucket: "fzzainrecondcar.firebasestorage.app"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();