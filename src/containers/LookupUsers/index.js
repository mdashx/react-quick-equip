import React from 'react';
import { connect } from 'react-redux';

import { lookupUsername } from './actions';
import ListUser from 'components/ListUser';

class LookupUsers extends React.Component {
  getUserList() {
    return this.props.usernames.map((username) => {
      return (
        <ListUser
            username={username}
            key={`listuser-${username}`}
            clickHandler={this.props.lookupUsername}
        /> 
      )
    });
  }

  render() {
    const usersList = this.getUserList();
    return (
      <div>
        <h1>Lookup users</h1>
        <br />
        <ul>
          {usersList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usernames: state.get('usernames'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    lookupUsername: (e) => { dispatch(lookupUsername(e.target.getAttribute('data-username'))) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LookupUsers);
