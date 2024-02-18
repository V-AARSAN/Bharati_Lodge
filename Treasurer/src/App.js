import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Provider} from "react-redux";
import Login from './Component/Login';
import Subscription from './Component/Subscription';
import Manage from './Component/Manage';
import Master from './Component/Master';
import Addmember from './Component/Addmember';
import { Store } from './Redux/Store';

function App() {
  
  return (
    <React.StrictMode>
      <Provider store={Store}>
          <BrowserRouter basename='bhartilodge/treasurer'>
            <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/subscription' element={<Subscription/>} />
              <Route path='/manage' element={<Manage/>} />
              <Route path='/master' element={<Master/>} />
              <Route path='/add' element={<Addmember/>} />
            </Routes>
          </BrowserRouter>
        </Provider>
    </React.StrictMode>
         

  );
}

export default App;
