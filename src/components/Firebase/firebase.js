import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyA9jLLgGd7FCfDguvxHnQg5R7SsnUZxEBg",
    authDomain: "name-de40c.firebaseapp.com",
    databaseURL: "https://name-de40c.firebaseio.com",
    projectId: "name-de40c",
    storageBucket: "name-de40c.appspot.com",
    messagingSenderId: "218464169431",
    appId: "1:218464169431:web:0488f7cc61e07f0d3eef92",
    measurementId: "G-DTM9RNMR5N"
};

class Firesbase {
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

export default Firesbase;
