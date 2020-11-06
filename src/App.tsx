import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ConfigView from './Pages/ConfigView';
import MainScreen from './Pages/MainScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={MainScreen} path={'/home'}/>
        <Route component={ConfigView} path={'/account-settings'}/>
      </Switch>
    </Router>
  );
}

export default App;
