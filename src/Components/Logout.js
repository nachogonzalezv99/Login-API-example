import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux/es/exports";
const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <div className="logout-container">
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Logout;
