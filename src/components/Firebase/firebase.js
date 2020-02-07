import app from "firebase/app";
import "firebase/auth";
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDaG11A5-IJZSLrLqUjlkEM-r2qMWiU2Wg",
    authDomain: "react-firebase-authentic-3c418.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-3c418.firebaseio.com",
    projectId: "react-firebase-authentic-3c418",
    storageBucket: "react-firebase-authentic-3c418.appspot.com",
    messagingSenderId: "602751268694",
    appId: "1:602751268694:web:27496feeea85f63cd308f7",
    measurementId: "G-H2DEP2B51W"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();

        this.googleProvider = new app.auth.GoogleAuthProvider();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignInWithGoogle = () =>
        this.auth.signInWithPopup(this.googleProvider);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    // *** Merge Auth and DB User API *** //

    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .once('value')
                    .then(snapshot => {
                        const dbUser = snapshot.val();
                        // default empty roles 
                        if (!dbUser.roles) {
                            dbUser.roles = [];
                        }
                        // merge auth and db user
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            ...dbUser,
                        };

                        next(authUser);
                    });
            } else {
                fallback();
            }
        });

    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}
export default Firebase;