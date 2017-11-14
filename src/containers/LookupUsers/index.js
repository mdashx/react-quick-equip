import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectUsernames } from 'features/findUser/selectors';
import { makeMostRecentUser } from 'features/foundUser/selectors';
import { lookupUsername } from 'features/foundUser/actions';
import UserList from 'components/UserList';

class LookupUsers extends React.Component {
  render() {
    return (
      <div>
        <h1>Lookup users</h1>
        <br />
        <ul>
          <UserList usernames={this.props.usernames} clickHandler={this.props.lookupUsername} />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  usernames: makeSelectUsernames(),
  mostRecent: makeMostRecentUser(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    lookupUsername: (e) => { dispatch(lookupUsername(e.target.getAttribute('data-username'))) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LookupUsers);
