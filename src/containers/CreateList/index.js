import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectUsernames, makeSelectCurrentUsername } from 'selectors/toLookup';

import { addUser, updateUsername } from './actions';
import UserList from 'components/UserList';

class CreateList extends React.Component {
  render() {
    return (
      <div>
        <h1>What Github user's do you want to lookup?</h1>
        <form>
          <input value={this.props.currentUsername} onChange={this.props.updateUsername} />
          <span>&nbsp;</span>
          <input type="submit" value="Add User" onClick={this.props.addUser} />
        </form>
        <p>Click a username to delete it from the list.</p>
        <ul>
          <UserList usernames={this.props.usernames} clickHandler={this.props.removeUser} />
        </ul>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  usernames: makeSelectUsernames(),
  currentUsername: makeSelectCurrentUsername(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateUsername: (e) => dispatch(updateUsername(e.target.value)),
    addUser: (e) => {e.preventDefault(); dispatch(addUser())},
    removeUser:(e) => { console.log(`Remove user: ${e.target.getAttribute('data-username')}`)}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
