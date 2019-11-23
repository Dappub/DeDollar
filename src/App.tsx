import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import containerStyle from "./css/shared/container.module.css";
import Intro from "./views/Intro";
import DebankFooter from "./components/DebankFooter";
import Issue from "./views/Issue";


const App: React.FC = () => {
  return (
    <div className={containerStyle.mainContainer}>
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route exact path={"/issue"}>
          <Issue />
        </Route>
      </Switch>
      <DebankFooter />
    </div>
  );
};

export default App;
