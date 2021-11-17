import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../redux/action/loginAction';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleOnClick() {
    const { history, changeStateLogin } = this.props;
    changeStateLogin(this.state);
    history.push('/clientes-cadastrados');
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
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
        <label htmlFor='senha'>
          Senha:
          <input
            type="password"
            id='senha'
            name='senha'
            value={senha}
            onChange={this.handleOnChange}
          />
        </label>
        <button
          type='button'
          onClick={ this.handleOnClick }
        >
          Enviar
        </button>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  changeStateLogin: (login) => dispatch(loginAction(login))
});

export default connect(null, mapDispatchToProps)(Login);