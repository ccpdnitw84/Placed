import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import HeadTNP from "./dashboards/HeadTNP";
import TNPCoordinator from "./dashboards/TNPCoordinator";
import Student from "./dashboards/Student";
import CompanyHR from "./dashboards/CompanyHR";
import { UserContext } from "../UserContext";

export default function Dashboard() {
    const {user} = useContext(UserContext);

    if(!user) {
        return <Navigate to='/login' />;
    }

    switch (user.role) {
        case 'head_tnp':
          return <HeadTNP />;
        case 'tnp_coodinator':
          return <TNPCoordinator />;
        case 'student':
          return <Student />;
        case 'hr':
          return <CompanyHR />;
        default:
          return <div>Invalid role</div>;
    }
}