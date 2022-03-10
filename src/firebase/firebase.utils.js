import { initializeApp }  from 'firebase/app';
import { getFirestore }  from 'firebase/firestore'
import { collection , addDoc  , getDoc , doc , setDoc} from 'firebase/firestore';
import {  GoogleAuthProvider , getAuth , signInWithPopup }  from 'firebase/auth'


const firebaseApp = initializeApp({
  apiKey: "AIzaSyA0ZA45LwSwdee9o73lppg4wIF0i7kQNUU",
  authDomain: "malevolence-merch.firebaseapp.com",
  projectId: "malevolence-merch",
  storageBucket: "malevolence-merch.appspot.com",
  messagingSenderId: "927722264855",
  appId: "1:927722264855:web:7a63d40b5928911d88bf52"
})

export const firestoredb  = getFirestore()

export const addUser = async (userAuth) => {

    if(!userAuth) return;

    const userRef = doc(firestoredb, "users", userAuth.uid);
    const userSnap = await getDoc(userRef);
    
    if(!userSnap._document){
        const { displayName , email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(doc(firestoredb, "users", userAuth.uid), {
                displayName,
                email,
                createdAt
                });
            
            console.log('user added')
        } catch( error ) {
            console.log('error creating user' , error.message)
        }
    }
    
    return userRef
}


const provider = new GoogleAuthProvider()

export const auth  = getAuth()

export const signInWithGoogle = (navigate) =>   {
        
        signInWithPopup(auth , provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch((error) => {
            const errorCode  = error.code;
            const errorMessage = error.message;
            console.log(errorCode , errorMessage)
        })
        }



