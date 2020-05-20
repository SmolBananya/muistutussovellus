import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.auth && user.JWTtoken ? (
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
