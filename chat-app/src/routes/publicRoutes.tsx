import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const PublicRoutes = ({ isAuthenticated }: { isAuthenticated: boolean }) => (
    console.log("is authenticated", isAuthenticated),
    <Routes>
    </Routes>
);

export default PublicRoutes;    
