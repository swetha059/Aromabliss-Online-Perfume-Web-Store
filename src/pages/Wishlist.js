import React from 'react';

function Wishlist({ wishlist }) {

  return (

    <div style={{padding:'30px'}}>

      <h1>Wishlist Page</h1>

      {
        wishlist.map((item,index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
          </div>
        ))
      }

    </div>

  );
}

export default Wishlist;