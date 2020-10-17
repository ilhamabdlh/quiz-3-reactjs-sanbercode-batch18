import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";
import { LoginProvider } from "./Context/LoginContext";
import "./assets/css/style.css";

function App() {
  return (
    <Router>
      <LoginProvider>
        <Routes />
      </LoginProvider>
    </Router>
  );
}

export default App;
