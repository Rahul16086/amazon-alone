import firebase from "firebase";
import { firebaseAuth } from "./APIKeys";

const firebaseApp = firebase.initializeApp(firebaseAuth);

const auth = firebase.auth();

export { auth };
