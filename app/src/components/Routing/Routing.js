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

            <PrivateRoute user={props.user} path='/game'>
                <UserGame />
            </PrivateRoute>

            <Route
                path='/userregister'
                render={() => <UserRegister user={props.user} setUser={props.setUser} />}
            ></Route>

            {/* Company */}

            <PrivateRoute user={props.user} path='/companymenu'>
                <CompanyMenu user={props.user} setUser={props.setUser} />
            </PrivateRoute>

            <Route
                path='/companyregister'
                render={() => <CompanyRegister user={props.user} setUser={props.setUser} />}
            ></Route>

            <PrivateRoute user={props.user} path='/companytaskcontrol'>
                <CompanyTaskControl user={props.user} />
            </PrivateRoute>

            <Route path='/login' render={() => <Login user={props.user} setUser={props.setUser} />}></Route>
        </Switch>
    </Router>
);
export default Routing;
