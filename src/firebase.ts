import app from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
app.initializeApp({
  apiKey: "AIzaSyAbj5k3s1aZ79c08Xfc8YjME7qTpollTWI",
  authDomain: "digital-portfolio-ee168.firebaseapp.com",
  databaseURL: "https://digital-portfolio-ee168.firebaseio.com",
  projectId: "digital-portfolio-ee168",
  storageBucket: "digital-portfolio-ee168.appspot.com",
  messagingSenderId: "960889315855",
  appId: "1:960889315855:web:a338ae45c3c8757696797a",
  measurementId: "G-YQP674RFNC",
});

export const db = app.firestore();
