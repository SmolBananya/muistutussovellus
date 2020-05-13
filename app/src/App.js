import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Components import
import Login from './components/Login';
import Game from './components/Game';
import CompanyRegister from './components/CompanyRegister';
import CompanyTasks from './components/CompanyTasks';
import CompanyMain from './components/CompanyMain';
import UserRegister from './components/UserRegister';
import UserRegisterChar from './components/UserRegisterChar';
import { theme } from './components/Theme';
import PrivateRoute from './PrivateRoute';

const App = () => {
    const [user, setUser] = useState({
        auth: false,
        admin: false,
        company: '',
        JWTtoken: '',
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <PrivateRoute user={user} path='/game'>
                            <Game />
                        </PrivateRoute>

                        <Route
                            path='/companyregister'
                            render={() => <CompanyRegister user={user} setUser={setUser} />}
                        ></Route>

                        <PrivateRoute user={user} path='/companytasks'>
                            <CompanyTasks />
                        </PrivateRoute>

                        <PrivateRoute user={user} path='/companymain'>
                            <CompanyMain user={user} setUser={setUser} />
                        </PrivateRoute>

                        <Route
                            path='/userregister'
                            render={() => <UserRegister user={user} setUser={setUser} />}
                        ></Route>

                        <Route path='/userregisterchar'>
                            <UserRegisterChar />
                        </Route>
                        <Route path='/login' render={() => <Login user={user} setUser={setUser} />}></Route>
                        <Route path='/'></Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default App;
