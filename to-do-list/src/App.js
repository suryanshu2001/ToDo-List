import './App.css';
import Headers from './components/partial/header';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/partial/home';
import Login from './components/partial/login';
import Register from './components/partial/register';
import React from 'react';
import { json } from 'react-router-dom';
import { useState } from 'react';
import { MyContext } from './util/contextApi';

function App() {
  const info=localStorage.getItem('user');
  console.log(info);
  const [User, setUser] = useState(JSON.parse(info))
  const [list, setlist] = useState('')
  return (
    <MyContext.Provider value={{list, setlist}}>
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login user={User} setUser={setUser}/>}/>  
      <Route path='/' element={<Home/>}/>
      <Route path='/Register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
     </MyContext.Provider>

  );
}

export default App;
