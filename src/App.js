import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Routes , Route , Link  , Outlet}  from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
