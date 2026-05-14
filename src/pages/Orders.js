import React from 'react';

function Orders() {

  const orders = [
    {
      id: 1,
      product: 'Rose Perfume',
      price: 999,
      status: 'Shipped'
    },
    {
      id: 2,
      product: 'Luxury Oud',
      price: 1999,
      status: 'Delivered'
    }
  ];

  return (

    <div style={{padding:'40px'}}>

      <h1>My Orders</h1>

      {
        orders.map((order) => (

          <div
            key={order.id}
            style={{
              background:'white',
              padding:'20px',
              marginTop:'20px',
              borderRadius:'10px',
              boxShadow:'0 0 10px rgba(0,0,0,0.1)'
            }}
          >

            <h2>{order.product}</h2>

            <p>Price: ₹ {order.price}</p>

            <p>Status: {order.status}</p>

          </div>

        ))
      }

    </div>

  );
}

export default Orders;