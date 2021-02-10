import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC2tcxuRHIIeAKsvFDpxK9Dmy8ph6HbjB0",
    authDomain: "eventos-firebase-project.firebaseapp.com",
    projectId: "eventos-firebase-project",
    storageBucket: "eventos-firebase-project.appspot.com",
    messagingSenderId: "29551163882",
    appId: "1:29551163882:web:92a703dfb0703db2335a93",
    measurementId: "G-0LJVD8KX5F"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
firebase.analytics();