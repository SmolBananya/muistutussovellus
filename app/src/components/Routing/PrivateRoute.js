import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, user, ...rest }) => {
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
