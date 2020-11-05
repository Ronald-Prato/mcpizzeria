import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainScreen from './Pages/MainScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={MainScreen} path={'/'}/>
      </Switch>
    </Router>
  );
}

export default App;
