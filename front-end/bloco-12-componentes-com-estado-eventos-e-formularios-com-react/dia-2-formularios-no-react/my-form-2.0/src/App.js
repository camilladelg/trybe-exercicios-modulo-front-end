import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange({ target }) {
    let {name, value} = target;
    this.setState({
      [name]: value.toUpperCase(),
    });
  }

  render() {
    const { name, email, cpf, endereco } = this.state;

    return (
      <div className="App">
        <form>
          <fieldset className="fieldset">
            <label htmlFor="name">
              Name
              <input 
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}
                maxLength="40"
                required
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                value={ email }
                onChange={this.handleChange}
                maxLength="50"
                required
              />
            </label>
            <label htmlFor="cpf">
              CPF
              <input
                type="number"
                name="cpf"
                id="cpf"
                value={ cpf }
                onChange={ this.handleChange }
                maxLength="11"
                required
              />
            </label>
            <label htmlFor="endereco">
              Endereço
              <input
                type="text"
                name="endereco"
                id="endereco"
                value={ endereco }
                onChange={ this.handleChange }
                maxLength="200"
                required
              />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
