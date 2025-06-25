import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    const isAuthenticated = !!getUser;
    setLoading(false);
    setAuthenticated(isAuthenticated);
  }, []);
  if (loading) {
    return <h2>Authorization checking</h2>;
  }
  if (authenticated) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
