import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCehGrSzNeXcpGtPKUcpANTQMn7wEIr620",
    authDomain: "facebook-clone-8ce55.firebaseapp.com",
    databaseURL: "https://facebook-clone-8ce55.firebaseio.com",
    projectId: "facebook-clone-8ce55",
    storageBucket: "facebook-clone-8ce55.appspot.com",
    messagingSenderId: "417986308454",
    appId: "1:417986308454:web:f8b6a5fba8a3b3280980a7",
    measurementId: "G-NQYVFMM0YN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db