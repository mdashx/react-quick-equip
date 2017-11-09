import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'

import Home from 'containers/Home';
import CreateList from 'containers/CreateList';

const App = (props) => {
  return (
    <div>
      <div id="header">
        <div id="navbar">
          <Link to="/">Home</Link>
          <span> -- </span>
          <Link to="/create">Create List Of Users To Lookup</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={CreateList} />
      </Switch>
    </div>
  );
}

export default App;
