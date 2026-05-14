import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  return (

    <nav className='navbar'>

      <h2>AromaBliss</h2>

      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/wishlist'>Wishlist</Link>
        <Link to='/payment'>Payment</Link>
        <Link to='/orders'>Orders</Link>
        <Link to='/login'>Login</Link>
      </div>

    </nav>

  );
}

export default Navbar;