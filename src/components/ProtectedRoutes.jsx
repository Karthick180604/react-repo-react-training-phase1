import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const {useremail}=useParams()

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    const isAuthenticated = getUser===useremail;
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
