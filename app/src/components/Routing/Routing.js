import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../Routing/PrivateRoute';
import Login from '../Login';
import Game from '../User/Game';
import CompanyRegister from '../Company/CompanyRegister';
import CompanyTasks from '../Company/CompanyTasks';
import CompanyMain from '../Company/CompanyMain';
import UserRegister from '../User/UserRegister';
import UserRegisterChar from '../User/UserRegisterChar';

const Routing = (props) => (
    <Router>
        <Switch>
            <PrivateRoute user={props.user} path='/game'>
                <Game />
            </PrivateRoute>

            <Route
                path='/companyregister'
                render={() => <CompanyRegister user={props.user} setUser={props.setUser} />}
            ></Route>

            <PrivateRoute user={props.user} path='/companytasks'>
                <CompanyTasks />
            </PrivateRoute>

            <PrivateRoute user={props.user} path='/companymain'>
                <CompanyMain user={props.user} setUser={props.setUser} />
            </PrivateRoute>

            <Route
                path='/userregister'
                render={() => <UserRegister user={props.user} setUser={props.setUser} />}
            ></Route>

            <Route path='/userregisterchar'>
                <UserRegisterChar />
            </Route>
            <Route path='/login' render={() => <Login user={props.user} setUser={props.setUser} />}></Route>
            <Route path='/'></Route>
        </Switch>
    </Router>
);
export default Routing;
