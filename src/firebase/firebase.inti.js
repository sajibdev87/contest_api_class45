
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTLk6kh6O_QpAAQYhgQFYNdfihqO6myfI",
  authDomain: "email-pass-verification-def8b.firebaseapp.com",
  projectId: "email-pass-verification-def8b",
  storageBucket: "email-pass-verification-def8b.appspot.com",
  messagingSenderId: "367562053119",
  appId: "1:367562053119:web:21dfaa2c58ca7f25d443ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;