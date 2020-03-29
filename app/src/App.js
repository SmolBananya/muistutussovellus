import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components import
import Login from './components/Login/Login';
import Game from './components/Game/Game';

const App = () => {
    const [btn, setBtn] = useState(false);

    return (
        <>
            <Router>
                <Switch>
                    <Route path='/game'>
                        <Game />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/'></Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;
