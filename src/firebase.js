import { firebaseAuth } from "./APIKeys";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp(firebaseAuth);

const auth = firebase.auth();

export { auth };
