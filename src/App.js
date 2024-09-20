import './App.css';

// Components
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';
import OrderSummary from './pages/OrderSummary';


import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Topbar /> 
      <Navbar />
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product' element={<Navigate to="/product/:id" />} /> {/* Redirect to a default product */}
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/ordersummary' element={<OrderSummary />} />
        
      </Routes>
   
      
      <Footer />
    </div>
  );
}

export default App;



