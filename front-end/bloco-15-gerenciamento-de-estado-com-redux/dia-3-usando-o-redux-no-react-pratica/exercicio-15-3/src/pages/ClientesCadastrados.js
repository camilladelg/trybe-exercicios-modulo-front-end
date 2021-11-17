import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ClientesCadastrados extends React.Component {
  render() {
    const { login, clientesCadastrados } = this.props;
    const { email, senha} = login;
    console.log(email);
    console.log(senha)
    if (email === '' && senha === '') {
      return <h1>Login não efetuado</h1>
    };
    return (
      <div>
        {clientesCadastrados.length === 0 ?
        (
          <div>
            'Nenhum cliente cadastrado'
            <div>
              <Link to='/cadastrar'>Cadastrar</Link> 
            </div>
          </div>
        ) : (
          <div>
            {clientesCadastrados.map(({nome, idade, email}, index) => (
              <div key={index}>
                <h4>{nome}</h4>
                <p>{idade}</p>
                <p>{email}</p>
              </div>
            ))}
            <Link to='/cadastrar'>Cadastrar</Link> 
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
  clientesCadastrados: state.cadastrarReducer,
});

export default connect(mapStateToProps)(ClientesCadastrados);
