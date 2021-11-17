import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ClientesCadastrados from './pages/ClientesCadastrados';
import Cadastrar from './pages/Cadastrar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/clientes-cadastrados' component={ClientesCadastrados}/>
          <Route path='/cadastrar' component={Cadastrar}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
