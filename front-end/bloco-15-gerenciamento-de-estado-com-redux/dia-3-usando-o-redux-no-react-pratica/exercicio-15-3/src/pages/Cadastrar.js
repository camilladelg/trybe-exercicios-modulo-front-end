import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cadastrarAction } from '../redux/action/cadastrarAction';

class Cadastrar extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      idade: '',
      email: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleOnClick() {
    // const { nome, idade, email } = this.state;
    const { cadastroUsuario } = this.props;
    cadastroUsuario(this.state);
    this.setState({
      nome: '',
      idade: '',
      email: '',
    })

  };

  render(){
    const { nome, idade, email } = this.state;
    return (
      <div>
        <label htmlFor='nome'>
          Nome:
          <input 
            type="text"
            id='nome'
            name='nome'
            value={nome}
            onChange={this.handleOnChange}
          />
        </label>
        <label htmlFor='idade'>
          Idade:
          <input 
            type="text"
            id='idade'
            name='idade'
            value={idade}
            onChange={this.handleOnChange}
          />
        </label>
        <label htmlFor='email'>
          Email:
          <input 
            type="email"
            id='email'
            name='email'
            value={email}
            onChange={this.handleOnChange}
          />
        </label>
        <button
          type='button'
          onClick={ this.handleOnClick }
        >Cadastrar</button>
        <div>
          <Link to='/clientes-cadastrados'>Clientes Cadastrados</Link>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  cadastroUsuario: (cadastro) => dispatch(cadastrarAction(cadastro)),
});

export default connect(null, mapDispatchToProps)(Cadastrar);