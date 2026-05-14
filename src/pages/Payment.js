import React, { useState } from 'react';

function Payment() {

  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    setSuccess(true);
  };

  return (

    <div style={{padding:'40px'}}>

      <h1>Payment Page</h1>

      <input type='text' placeholder='Card Number' /><br /><br />

      <input type='text' placeholder='Expiry Date' /><br /><br />

      <input type='text' placeholder='CVV' /><br /><br />

      <button onClick={handlePayment}>
        Pay Now
      </button>

      {
        success &&
        <h2 style={{color:'green', marginTop:'20px'}}>
          Order Placed Successfully
        </h2>
      }

    </div>

  );
}

export default Payment;