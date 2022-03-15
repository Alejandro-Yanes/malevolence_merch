import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import ErrorPage from './pages/error/error.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component'
import Header from  './components/header/header.component.jsx';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

import { useState , useEffect } from 'react';
import {Routes , Route , Link  , Outlet}  from 'react-router-dom';

import {auth , addUser} from './firebase/firebase.utils';
import {onAuthStateChanged} from 'firebase/auth';
import { getDoc } from "firebase/firestore"; 

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';



function App({ setCurrentUser , currentUser}) {
  let unsubscribeFromAuth = null

  useEffect(() => {
      unsubscribeFromAuth = onAuthStateChanged(auth,async userAuth => {
        
        if(userAuth){
          const userRef = await addUser(userAuth)

          const docSnap = await getDoc(userRef)
          if(docSnap){
              setCurrentUser({
                id : docSnap.id,
                ...docSnap.data()
              });

          } else {
            console.log("No such document!");
          }

        } else {
          setCurrentUser(null)
        }
      })

      return () => { unsubscribeFromAuth() }
  },[])

      


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/signin" element={<SignInSignUp/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>

      <Outlet/>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
      setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
