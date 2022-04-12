import { takeLatest, call, put, all } from "redux-saga/effects";
import shopActionTypes from "./shop.types";
import {
  firestoredb,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { getDocs, collection } from "firebase/firestore";

import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");

  try {
    const collectionsRef = yield getDocs(
      collection(firestoredb, "collections")
    );
    const collectionObject = yield call(
      convertCollectionsSnapshotToMap,
      collectionsRef.docs
    );
    yield put(fetchCollectionSuccess(collectionObject));
  } catch (error) {
    put(fetchCollectionFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
