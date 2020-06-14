import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useContext(UserContext);
    const [cookies, setCookie] = useCookies(['token']);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                /* user.auth && user.JWTtoken*/ cookies.token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
