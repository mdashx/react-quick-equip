import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import UserList from 'components/UserList';
import { addUser, updateUsername } from 'features/findUser/actions';
import {
  makeSelectUsernames,
  makeSelectCurrentUsername,
} from 'features/findUser/selectors';

import style from './style.css';

export class CreateList extends React.Component {
  render() {
    return (
      <div>
        <h1 className={style.myHeading}>
          What Github user's do you want to lookup?
        </h1>
        <form>
          <input
              value={this.props.currentUsername}
              onChange={this.props.updateUsername}
          />
          <span>&nbsp;</span>
          <input
              type="submit"
              value="Add User"
              onClick={this.props.addUser}
              data-username={this.props.currentUsername}
          />
        </form>
        <p>Click a username to delete it from the list.</p>
        <ul>
          <UserList
              usernames={this.props.usernames}
              clickHandler={this.props.removeUser}
          />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  usernames: makeSelectUsernames(),
  currentUsername: makeSelectCurrentUsername(),
});

const mapDispatchToProps = dispatch => {
  return {
    updateUsername: e => dispatch(updateUsername(e.target.value)),
    addUser: e => {
      e.preventDefault();
      dispatch(addUser(e.target.getAttribute('data-username')));
    },
    removeUser: e => {
      console.log(`Remove user: ${e.target.getAttribute('data-username')}`);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
