import React, { useState } from 'react'
import './Login.scss'
import newRequest from '../../utils/newRequest';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await newRequest.post('/auth/login', {username, password});
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      navigate('/')
    } catch (error) {
      setError(error.response.data);
    }
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input type="text" name='username' placeholder='johndoe' onChange={e=>setUsername(e.target.value)}/>
        <label htmlFor="">Password</label>
        <input
          name='password'
          type='password'
          onChange={e=>setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
        {error && error}
      </form>
    </div>
  )
}

export default Login