import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomePage from './views/Homepage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import Contacts from './views/Contacts';
import routes from './routes';

const App = () => {
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.contacts} component={Contacts} />
        <Route path={routes.register} component={RegisterPage} />
        <Route path={routes.login} component={LoginPage} />
      </Switch>
    </>
  );
};

export default App;
