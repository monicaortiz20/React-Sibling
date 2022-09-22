import React, {useState} from 'react';
import {userContext} from './context/userContext';
import {BrowserRouter} from 'react-router-dom';

import 'normalize.css'; //evita estilos por defecto del navegador

import Header from './components/Header/Header';
import Main from './components/Main/Main'



function App() {

  const [name, setName] = useState("Mónica");
  const [email, setEmail] = useState("Mónica");
  const [age, setAge] = useState("29"); 
  const [url, setUrl] = useState("Mónica");  //setUser, nodifica el estado de user


  const takeData = (name, email, age, url) => {
    setName(name);
    setEmail(email);
    setAge(age);
    setUrl(url)
  }

//pasamos las funciones creadas al provider, facilita un objeto a quien lo vaya a 'consumir':
  const data = {
    name,
    email,
    age, 
    url, 
    takeData
  }

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={data}>
        <Header/>
        <Main/>
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
