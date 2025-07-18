
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div>
      {/* <h2>Welcome, {user?.name}</h2>
      <p>Email/Phone: {user?.emailOrPhone}</p> */}
      <button> forget our password</button>
      <button onClick={logout}>Signin</button>
      <button onClick={logout}>Log Out </button>
    </div>
  );
}

export default Home;
