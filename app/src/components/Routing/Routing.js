import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../Login';

// User
import UserGame from '../User/Game';
//import UserPopup from '../user/Popup';
import UserRegister from '../User/Register';

// Company
import CompanyRegister from '../Company/Register';
import CompanyMenu from '../Company/Menu/';
import CompanyTaskControl from '../Company/TaskControl';
//import CompanyReports from '../Company/Reports';
//import CompanyLeaderboard from '../Company/Leaderboard';

const Routing = (props) => (
    <Router>
        <Switch>
            {/* User */}

            <PrivateRoute path='/game'>
                <UserGame />
            </PrivateRoute>

            <Route path='/userregister' render={() => <UserRegister />}></Route>

            {/* Company */}

            <PrivateRoute path='/companymenu'>
                <CompanyMenu />
            </PrivateRoute>

            <Route path='/companyregister' render={() => <CompanyRegister />}></Route>

            <PrivateRoute path='/companytaskcontrol'>
                <CompanyTaskControl />
            </PrivateRoute>

            <Route path='/login' render={() => <Login />}></Route>
        </Switch>
    </Router>
);
export default Routing;
