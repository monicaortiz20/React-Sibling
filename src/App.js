import React, {useState} from 'react';
import {userContext} from './context/userContext';
import {BrowserRouter} from 'react-router-dom';

import 'normalize.css'; //evita estilos por defecto del navegador

import Header from './components/Header/Header';
import Home from './components/Home/Home'



function App() {

  const [email, setEmail] = useState("Mónica"); //setUser, nodifica el estado de user

  //cambiar estado del componente con login
  const login = (email) => {
    setEmail(email); //aquí le decimos que user = name; user es la variable de arrina
  };//name = Mónica, entonces user = Mónica

  const logout= () => {
    setEmail(""); //aquí le decimos que el user está vacío
  }

//pasamos las funciones creadas al provider, facilita un objeto a quien lo vaya a 'consumir':

  const data = {
    email,
    login,
    logout
  }

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={data}>
        <Header/>
        <Home/>
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
