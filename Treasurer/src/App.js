import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Subscription from './Component/Subscription';
import Manage from './Component/Manage';
import Master from './Component/Master';
import Addmember from './Component/Addmember';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter basename='/bharatilodge'>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/subscription' element={<Subscription/>} />
          <Route path='/manage' element={<Manage/>} />
          <Route path='/master' element={<Master/>} />
          <Route path='/add' element={<Addmember/>} />
        </Routes>
      </BrowserRouter>
      <h1>hii</h1>
    </React.StrictMode>
  );
}

export default App;
