import React from "react";
import SideBar from "./SideBar";
import { Switch, Route } from "react-router-dom";
import AboutMe from '../AboutMe'

const Navigation = () => {
  return (
    <SideBar>
      <Switch>
          <Route exact path='/' component={AboutMe} />
          <Route exact path='/aboutme' component={AboutMe} />
      </Switch>
    </SideBar>
  );
};

export default Navigation;
