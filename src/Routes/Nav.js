import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import Logo from "../assets/img/logo.png";

const Nav = (props) => {
  const { login, setLogin } = useContext(LoginContext);

  const handleLogin = () => {
    localStorage.setItem("isLogin", "token-valid");
    setLogin("token-valid");
  };

  const handleLogout = () => {
    localStorage.setItem("isLogin", "token-invalid");
    setLogin("token-invalid");
    props.history.push("/");
  };

  return (
    <header>
      <img id="logo" src={Logo} alt="logo" width="200px" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          {login === "token-valid" ? (
            <>
              <li>
                <Link to="/movielisteditor">Movie List Editor</Link>
              </li>
              <li onClick={handleLogout} style={{ cursor: "pointer" }}>
                Logout
              </li>
            </>
          ) : (
            <li onClick={handleLogin} style={{ cursor: "pointer" }}>
              Login
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Nav);
