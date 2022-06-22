import { initializeApp } from "firebase/app";
import "firebase/database";

const config = {
  //API keys
  apiKey: "AIzaSyBnZqsJJfw_teKW7j8tQBB2t_0kNdp_RGc",
  authDomain: "fir-vue-chatapp-86cb4.firebaseapp.com",
  projectId: "fir-vue-chatapp-86cb4",
  storageBucket: "fir-vue-chatapp-86cb4.appspot.com",
  messagingSenderId: "135627422587",
  appId: "1:135627422587:web:c120164cb8e1de7b4cdbde",
  measurementId: "G-J1NCKVVVZ8"
}

const db = initializeApp(config);
export default db;