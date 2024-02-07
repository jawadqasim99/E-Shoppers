
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import  LoginSignup from'./pages/LoginSignup';
import Product  from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import men_banners from '../src/components/assets/banner_mens.png';
import womem_benners from '../src/components/assets/banner_women.png';
import kids_banners from '../src/components/assets/banner_kids.png';



function App() {
  return (
    <div >
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banners} category="men"/> }/>
      <Route path='/womens' element={<ShopCategory banner={womem_benners} category="women"/> }/>
      <Route path='/Kids' element={<ShopCategory banner={kids_banners} category="kid"/> }/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
