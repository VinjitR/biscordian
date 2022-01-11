import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDA3K_pZvZvkgsSp3-cO2mOU_Z8xJm8Rt4",
    authDomain: "biscordian.firebaseapp.com",
    projectId: "biscordian",
    storageBucket: "biscordian.appspot.com",
    messagingSenderId: "472158568223",
    appId: "1:472158568223:web:6c49ba84c1d24c2a7c7a2a",
    measurementId: "G-QLR3M3ME2K"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();


  export {auth,provider};
  export default db;
