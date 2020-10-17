import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "../Contents/Home";
import About from "../Contents/About";
import MovieListEditor from "../Contents/MovieListEditor";
import NotFound from "../Contents/NotFound";
import { LoginContext } from "../Context/LoginContext";

const Routes = () => {
  const { login } = useContext(LoginContext);

  return (
    <>
      <Nav />
      <section>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {login === "token-valid" && (
            <Route path="/movielisteditor">
              <MovieListEditor />
            </Route>
          )}
          <Route component={NotFound} />
        </Switch>
      </section>
      <footer>
        <h5>copyright &copy; 2020 by Sanbercode</h5>
      </footer>
    </>
  );
};

export default Routes;
