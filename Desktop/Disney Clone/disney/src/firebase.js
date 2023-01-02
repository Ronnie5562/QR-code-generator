const firebaseConfig = {
    apiKey: "AIzaSyCYfJ70TAt_E9ddo9yEMVSQBJmUvbllHYg",
    authDomain: "disneyweb-clone.firebaseapp.com",
    projectId: "disneyweb-clone",
    storageBucket: "disneyweb-clone.appspot.com",
    messagingSenderId: "846667116929",
    appId: "1:846667116929:web:28ac9b243c67b3fa71f880",
    measurementId: "G-50T113EJ08"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db; 