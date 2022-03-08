import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Routes , Route , Link  , Outlet}  from 'react-router-dom'
import Header from  './components/header/header.component.jsx'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';


function App() {
  return (
    <div>
      <Header/>
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
