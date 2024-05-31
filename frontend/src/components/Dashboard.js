import React, { useContext, useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import HeadTNP from "./dashboards/HeadTNP";
import TNPCoordinator from "./dashboards/TNPCoordinator";
import Student from "./dashboards/Student";
import CompanyHR from "./dashboards/CompanyHR";
import { UserContext } from "../UserContext";
import axios from "axios";

export default function Dashboard() {
  const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:5000/current-user", { withCredentials: true })
            .then(response => {
                setUser(response.data.user);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setUser(null);
                setLoading(false);
            });
    }, [setUser]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to='/login' />;
    }

  switch (user.role) {
    case 'head_tnp':
      return <HeadTNP />;
    case 'tnp_coordinator':
      return <TNPCoordinator />;
    case 'student':
      return <Student />;
    case 'hr':
      return <CompanyHR />;
    default:
      return <div>Invalid role</div>;
  }
}