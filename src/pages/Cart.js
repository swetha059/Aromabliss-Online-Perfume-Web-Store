import React from 'react';

function Cart({ cart }) {

  return (

    <div style={{padding:'30px'}}>

      <h1>Cart Page</h1>

      {
        cart.map((item,index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
          </div>
        ))
      }

    </div>

  );
}

export default Cart;