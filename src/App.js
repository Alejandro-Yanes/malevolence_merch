import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Routes , Route , Link  , Outlet}  from 'react-router-dom'
import Header from  './components/header/header.component.jsx'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { useState , useEffect } from 'react';
import {auth , addUser} from './firebase/firebase.utils'
import {onAuthStateChanged} from 'firebase/auth'
import { getDoc } from "firebase/firestore"; 



function App() {

  const [currentUser , setCurrentUser] = useState(null)

  let unsubscribeFromAuth = null

  useEffect(() => {
      unsubscribeFromAuth = onAuthStateChanged(auth,async userAuth => {
        
        if(userAuth){
          const userRef = await addUser(userAuth)

          const docSnap = await getDoc(userRef)

          if(docSnap){
            setCurrentUser({
              id: docSnap.id,
              ...docSnap.data()
            })
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
      <Header currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/signin" element={<SignInSignUp/>}/>
      </Routes>

      <Outlet/>
    </div>
  );
}

export default App;
