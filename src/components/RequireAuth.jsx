import React, { useContext } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';

export const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useContext(AuthContext);
    const location = useLocation();

    console.log("allowed roles = ", allowedRoles);
    const isRoleAllowed = auth && allowedRoles?.includes(auth.role);
    console.log("role inside auth context..", auth.role);
    
    console.log("check allowedRoles gives true or false :", isRoleAllowed)

    return (
        auth && allowedRoles?.includes(auth.role) ? (
            <Outlet />
        )  : (
            <Navigate to="/login" state={{ from: location }} replace />
        )
    )
}