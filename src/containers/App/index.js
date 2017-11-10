import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'

import Home from 'containers/Home';
import CreateList from 'containers/CreateList';
import LookupUsers from 'containers/LookupUsers';
import SearchHistory from 'containers/SearchHistory';

const App = (props) => {
  return (
    <div>
      <div id="header">
        <div id="navbar">
          <Link to="/">Home</Link>
          <span> -- </span>
          <Link to="/create">Create List Of Users To Lookup</Link>
          <span> -- </span>
          <Link to="/lookup">Lookup Users</Link>
          <span> -- </span>
          <Link to="/history">View Search History</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={CreateList} />
        <Route path="/lookup" component={LookupUsers} />
        <Route path="/history" component={SearchHistory} />
      </Switch>
    </div>
  );
}

export default App;
