import React from 'react';
import { connect } from 'react-redux';

import { addUser, updateUsername } from './actions';
import ListUser from 'components/ListUser';

class CreateList extends React.Component {
  getUserList() {
    return this.props.usernames.map((username) => {
      return <ListUser username={username} key={`listuser-${username}`} />
    });
  }
  
  render() {
    const usersList = this.getUserList();
    return (
      <div>
        <h1>What Github user's do you want to lookup?</h1>
        <form>
          <input value={this.props.currentUsername} onChange={this.props.updateUsername} />
          <span>&nbsp;</span>
          <input type="submit" value="Add User" onClick={this.props.addUser} />
        </form>
        <br />
        <ul>
          {usersList}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    usernames: state.get('usernames'),
    currentUsername: state.get('currentUsername'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUsername: (e) => dispatch(updateUsername(e.target.value)),
    addUser: (e) => {e.preventDefault(); dispatch(addUser())},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
