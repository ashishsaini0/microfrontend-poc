import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PublicRoutes from './publicRoutes';
import ProtectedRoutes from './protectedRoutes';
import { IRootState } from '../redux/reducers';

const AppRoutes = () => {
    const authState = useSelector((state: IRootState) => state.auth);
    const isAuthenticated = authState.isAuthenticated;
    console.log('isAuthenticated', isAuthenticated);

    return (
        <Router>
            <div className="app-container">
                <div className="content-container">
                    {isAuthenticated ? (
                        <ProtectedRoutes />
                    ) : (
                        <PublicRoutes isAuthenticated={isAuthenticated} />
                    )}
                </div>
            </div>
        </Router>
    );
};

export default AppRoutes;
