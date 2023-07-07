import React from 'react';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import Login from './components/Login'
import Friendlist from './components/Friendlist';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <header>
        <div className='header-container'>
          <h1>FRIENDS DATABASE</h1>
          <nav>
            <NavLink className='navlink' to='/login'>LOGIN</NavLink>
            <NavLink className='navlink' to='/friends'>FRIENDLIST</NavLink>
            <NavLink className='navlink' to='/friends/add'>ADD FRIEND</NavLink>
            <NavLink className='navlink' to='/logout'>LOGOUT</NavLink>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='friends' element={<Friendlist />} />
        <Route path='friends/add' element={<AddFriend />} />
        <Route path='logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
