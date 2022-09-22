import React, { Component } from "react";
import { userContext} from 'react';


class Card extends Component {
  render() {
    return <section>
      {/* este es un hijo, es consumer de la info del padre */}
      <userContext.Consumer>{({name, email, age, url}) => name ?
      <div>
        <h3>Nombre: {name}</h3>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
        <p>URL image: {url}</p>
      </div> : null
    
    }

    {/* si tenemos el nombre del user, nos completa el div, si no, no */}

      </userContext.Consumer>

    </section>;
  }
}

export default Card;
