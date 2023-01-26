import React, { useContext, useState } from 'react';
import { useAuth } from "../AuthContext";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  let history = useNavigate();


  const handleSubmit = e => {
    e.preventDefault();

    if (username === 'foo' && password === 'pass') {
      // Successful login
      login();
      history('/');

    } else {
      // Unsuccessful login
      setError('Incorrect username or password');
    }
  };

  return (


    // <form onSubmit={handleSubmit} className='container'>
    //   <label>
    //     Username:
    //     <input className='m-3'
    //       type="text"
    //       value={username}
    //       onChange={e => setUsername(e.target.value)}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Password:
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={e => setPassword(e.target.value)}
    //     />
    //   </label>
    //   <br />
    //   <button type="submit">Log in</button>
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    // </form>
    <form onSubmit={handleSubmit} className='container p-3'>
    <div className="form-group">
      <label for="exampleInputEmail1">Username</label>
      <input type="text" className="form-control" id="exampleInputEmail1" value={username} aria-describedby="emailHelp" onChange={e => setUsername(e.target.value)}/>
      
    </div>
    <div className="form-group my-3">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"  value={password} onChange={e => setPassword(e.target.value)} />
    </div>
    <button type="submit" className="btn btn-primary">Log in</button>
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </form>
  
  
  
  
  
  
  
  
  
  
  
  
  );
};

export default Login;
