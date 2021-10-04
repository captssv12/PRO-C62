import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBnjEdKRaZ1lLQjk-6_B8GjQMqFe8ykPzk",
  authDomain: "school-attendance-app-2e73a.firebaseapp.com",
  databaseURL: "https://school-attendance-app-2e73a-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-2e73a",
  storageBucket: "school-attendance-app-2e73a.appspot.com",
  messagingSenderId: "1049404881586",
  appId: "1:1049404881586:web:abbe2b8a78b56b855627ab"
};
   // Initialize Firebase
   if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database();