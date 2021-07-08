import { firebaseAuth } from "./APIKeys";
import firebase from "firebase";

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseAuth);

const auth = firebase.auth();

export { auth };
