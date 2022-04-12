import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDoc, doc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA0ZA45LwSwdee9o73lppg4wIF0i7kQNUU",
  authDomain: "malevolence-merch.firebaseapp.com",
  projectId: "malevolence-merch",
  storageBucket: "malevolence-merch.appspot.com",
  messagingSenderId: "927722264855",
  appId: "1:927722264855:web:7a63d40b5928911d88bf52",
});

export const firestoredb = getFirestore();
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export const addUser = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestoredb, "users", userAuth.uid);
  const userSnap = await getDoc(userRef);
  console.log(userSnap);
  if (!userSnap._document) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });

      console.log("user added");
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const signInWithGoogle = (navigate) => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.map((doc) => {
    const { items, title } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// to add into database

// addCollectionAndDocuments(
//   "collections",
//   collectionsArray.map(({ title, items }) => ({ title, items }))
// );

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = collection(firestoredb, collectionKey);
//   objectsToAdd.forEach(async (obj) => {
//     await addDoc(collection(firestoredb, collectionKey), obj);
//   });
// };
