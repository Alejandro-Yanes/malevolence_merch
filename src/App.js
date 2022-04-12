import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import ErrorPage from "./pages/error/error.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component.jsx";
import CollectionPageContainer from "./pages/collection/collection.container";

import { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import { connect } from "react-redux";

import { fetchCollectionsStart } from "./redux/shop/shop.actions";
import { checkUserSession } from "./redux/user/user.actions";

function App({ fetchCollectionsStart, checkUserSession }) {
  useEffect(() => {
    fetchCollectionsStart();
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route
          path="shop/:collectionId"
          element={<CollectionPageContainer />}
        />

        <Route path="signin" element={<SignInSignUp />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Outlet />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(App);
