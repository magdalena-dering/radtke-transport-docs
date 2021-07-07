import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logOut } = useAuth();
  const history = useHistory();

  const handleLogOut = async () => {
    setError("");
    try {
      await logOut();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  };
  console.log("Dashboard");
  return (
    <>
      <p>Dashboard</p>
      <p>Admin</p>
      <p>{currentUser.email}</p>
      <p>{error && error}</p>
      <Link to="/" onClick={handleLogOut}>
        Log out
      </Link>
      <p>Do you want to add another person to share your data?</p>{" "}
      <Link to="/sendlink">Add an account</Link>
      <p>Do you want change your password?</p>{" "}
      <Link to="/changepassword">Change password</Link>
    </>
  );
};

export default Dashboard;
