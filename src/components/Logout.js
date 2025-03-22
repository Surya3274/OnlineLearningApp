import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Logout = () => {
    
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
      };


      return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
          <div className="card shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
            <div className="card-body p-4 text-center">
              <button className="btn btn-danger w-100" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            </div>
          </div>
        </div>
      );
};
export default Logout;