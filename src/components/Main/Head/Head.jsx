import React, { Component } from "react";
import {userContext} from '../../../context/userContext';


class Home extends Component {
  static contextType= userContext; 

  constructor(props){
    super(props)

    this.useremail = React.createRef(); 

    this.state = {
      useremail:""
    }
  }

  sendEmail = () => {
    const  data = this.context; 
    
    data.login(this.state.useremail)

    this.useremail.current.value = "";
    this.setState({ useremail: "" });
  }

  //para cambiar el mail
  handleChange = () => {
    const useremail = this.useremail.current.value;
    this.setState({ useremail });
  }


  addForm (event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const img = event.target.image.value;
    const age = event.target.age.value;

    const newUser = {name, email, age, img};

    this.state({useremail:[...this.state.useremail, newUser]})

  }

  render() {
    return <div className="home-view">

    <h1>Heeeeyyyy, babyyyyy</h1>
      <form>
        <label htmlFor="email">Introduce tu Email</label>
        <input type="text" ref={this.userEmail} onChange={this.handleChange} placeholder="mojitodemango@gmail.com" />
        <label htmlFor="name">Introduce tu Nombre</label>
        <input type="text" placeholder="Mojitorrr" />
        <label htmlFor="age">Edad:</label>
        <input type="number" name="age" />
        <label htmlFor="image">URL imágen:</label>
        <input type="url" id="image" name="image" ref={this.image} />
        {this.state.useremail ? <button variant="contained" onClick={this.sendEmail}>Login</button> : ""}

      </form>

    </div>;
  }
}

export default Home;
