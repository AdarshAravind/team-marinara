import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Home from "./Home/Home";
import Landing from "./Landing/Landing";
import theme from "../styles/Theme";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path={["/", "/login", "/register"]} component={Landing} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;