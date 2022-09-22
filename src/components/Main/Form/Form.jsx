import React, { Component } from "react";
import {userContext} from '../../../context/userContext';

class Form extends Component {
  //ponemos static en el Form porque es el método que invoca la función
  // que trae los datos del provider (padre) y luego los manda a su sibling
  static contextType= userContext; 

  constructor(props) {
    super(props)
  
    //con esto le mandamos la info del form a takeData que está en App.js
    this.userName = React.createRef();
    this.userEmail = React.createRef();
    this.userUrl = React.createRef();
    this.userAge = React.createRef();

    this.state = {
       userName: '',
       userEmail: '',
       userUrl: '',
       userAge:''
    }
  }

  sendData = (e) => {
    e.preventDefault();

    //este es CONSUMER
    const {takeData} = this.context
    //this.context, para decirle que 'takeData' es una función que viene del padre(provider)

    //con esto le mandamos la info arriba, en el constructor
    const name = this.state.userName;
    const email = this.state.userEmail;
    const age = this.state.userAge;
    const url_img = this.state.userUrl;

    takeData(name, email, age, url_img)

    this.userEmail.current.value = "";
    this.setState({userEmail:""})
    //todo vaacío para enviarle nosotros la info
  }

  handleChange = () => this.setState({
    //tomamos los valores de los inputs
    userName: this.userName.current.value,
    userEmail: this.userEmail.current.value,
    userUrl: this.userUrl.current.value,
    userAge: this.userAge.current.value
  })


  render() {//FORMULARIO
    return <section>
      <form onSubmit={this.sendData}></form>
        <label htmlFor="name"> Nombre:</label>
        <input type="text" ref={this.userName} onChange={this.hadleChange}/>
        <label htmlFor="email"> Email:</label>
        <input type="text" ref={this.userEmail} onChange={this.hadleChange}/>
        <label htmlFor="age"> Edad:</label>
        <input type="text" ref={this.userAge} onChange={this.hadleChange}/>
        <label htmlFor="url"> Imagen URL:</label>
        <input type="text" ref={this.userUrl} onChange={this.hadleChange}/>
        <button type="submit">Enviar</button>
    </section>;
  }
}

export default Form;
