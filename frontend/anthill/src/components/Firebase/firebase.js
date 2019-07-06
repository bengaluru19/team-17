import app from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyCLBNi290Yw23BV1bf_rTkizYPtz4sBcCM',
    authDomain: 'anthill.firebaseapp.com',
    databaseURL: 'https://anthill.firebaseio.com',
    projectId: 'anthill-c40f8',
    storageBucket: 'anthill.appspot.com',
    messagingSenderId: '999999999',
  };


  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.database();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  }

  export default Firebase;
