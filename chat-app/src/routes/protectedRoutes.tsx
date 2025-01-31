import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/home';
import ViewMessage from '../views/message';

const ProtectedRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/message" element={<ViewMessage />}/>
    </Routes>
);
export default ProtectedRoutes;
