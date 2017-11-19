import React from 'react';
import Loadable from 'react-loadable';
import { Link, Route, Switch } from 'react-router-dom';

import Loading from 'containers/Loading';

const Home = Loadable({
  loader: () => import('containers/Home'),
  loading: Loading,
});

const CreateList = Loadable({
  loader: () => import('containers/CreateList'),
  loading: Loading,
});

const LookupUsers = Loadable({
  loader: () => import('containers/LookupUsers'),
  loading: Loading,
});

const SearchHistory = Loadable({
  loader: () => import('containers/SearchHistory'),
  loading: Loading,
});

const App = props => {
  return (
    <div>
      <div>
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
      <div id="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateList} />
          <Route path="/lookup" component={LookupUsers} />
          <Route path="/history" component={SearchHistory} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
