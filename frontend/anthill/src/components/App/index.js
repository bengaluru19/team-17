import React, { Component } from 'react';
import { BrowserRouter as Router,Route, } from 'react-router-dom';


import Navigation from '../Navigation';

import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import { withAuthentication } from '../Session';

const App = () => (

            <Router>
            <div>
              <Navigation />

              <hr />

              
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
              />
              <Route path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route path={ROUTES.ADMIN} component={AdminPage} />
            </div>
          </Router>
);

export default withAuthentication(App);
