import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Orders from './pages/Orders';

function App() {

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route
          path='/products'
          element={
            <Products
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />

        <Route
          path='/cart'
          element={<Cart cart={cart} />}
        />

        <Route
          path='/wishlist'
          element={<Wishlist wishlist={wishlist} />}
        />

        <Route path='/login' element={<Login />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/orders' element={<Orders />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;