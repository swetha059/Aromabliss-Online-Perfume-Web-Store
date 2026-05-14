import React from 'react';

function Login() {

  return (

    <div style={{padding:'40px'}}>

      <h1>Login</h1>

      <input type='email' placeholder='Enter Email' /><br /><br />

      <input type='password' placeholder='Enter Password' /><br /><br />

      <button>Login</button>

    </div>

  );
}

export default Login;