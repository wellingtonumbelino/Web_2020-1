import firebase from 'firebase/app';
import 'firebase/firestore';
import key from '../keys/firebase_key';

export default class Firebase {
  constructor() {
    firebase.initializeApp(key);
  }

  getFirestore() {
    return firebase.firestore();
  }
}