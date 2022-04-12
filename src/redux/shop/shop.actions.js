import shopActionTypes from "./shop.types";
import {
  firestoredb,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { getDocs, collection } from "firebase/firestore";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// THUNK
// export const fetchCollectionsStartAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCollectionsStart());
//     const collectionsRef = await getDocs(collection(firestoredb, "collections"))
//       .then((snapshot) => {
//         const collectionObject = convertCollectionsSnapshotToMap(snapshot.docs);
//         dispatch(fetchCollectionSuccess(collectionObject));
//       })
//       .catch((error) => dispatch(fetchCollectionFailure(error)));
//   };
// };
