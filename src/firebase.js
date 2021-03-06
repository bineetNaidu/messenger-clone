import { firebaseConfig } from './env';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebaseApp.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
