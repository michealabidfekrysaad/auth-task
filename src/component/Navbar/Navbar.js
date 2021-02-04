import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { isLogin, logout } from "../../utils/Auth";
import { useSelector } from "react-redux";

const Navbar = () => {
  const history = useHistory();

  let UserLoginSuccess = useSelector((state) => state.AuthReducer);
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    setUserLogged(isLogin());
  }, [UserLoginSuccess, userLogged]);

  const handleClickLogout = () => {
    setUserLogged(logout());
    history.push("/register");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ">
          {!userLogged ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </>
          ) : (
            <li className="nav-item" onClick={() => handleClickLogout()}>
              <Link className="nav-link" to="">
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
