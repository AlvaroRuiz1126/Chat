import React, { useContext, useEffect } from 'react';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";

export const AppRouter = () => {
    const {auth, verifyToken} = useContext(AuthContext);

    useEffect(() => {
        verifyToken();
    }, [verifyToken]);

    if(auth.checking){
        return <h1>Espere Por Favor</h1>;
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={auth.logged} />
                    <PrivateRoute exact path="/" component={ChatPage} isAuthenticated={auth.logged} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};