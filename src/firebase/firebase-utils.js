import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



const config = {
    apiKey: "AIzaSyB4Pk1T9ogAuFQvpDTNHPFXtdcSuGr6hHE",
    authDomain: "crown-cloth-db-9e1e2.firebaseapp.com",
    databaseURL: "https://crown-cloth-db-9e1e2.firebaseio.com",
    projectId: "crown-cloth-db-9e1e2",
    storageBucket: "crown-cloth-db-9e1e2.appspot.com",
    messagingSenderId: "867418152187",
    appId: "1:867418152187:web:9f63b10cd3190a5551a45e",
    measurementId: "G-P1RGZ8EVPB"
};


export const createUserProfileDocument = async (userAuth, additionalData) => { 
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
   
    const snapshot = await userRef.get()
    if (!snapshot.exists) { 

        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })

        } catch (error) { 
             console.log('error creating user',error.message  )
        }

    }
    
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


