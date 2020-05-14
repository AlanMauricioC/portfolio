import React from "react";
import SideBar from "./SideBar";
import { Switch, Route } from "react-router-dom";
import Home from '../Home'

const Navigation = () => {
  return (
    <SideBar>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
      </Switch>
    </SideBar>
  );
};

export default Navigation;
