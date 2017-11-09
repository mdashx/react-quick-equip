import React from 'react';
import { connect } from 'react-redux';

import { addUser, updateUsername } from 'actions';

const listUser = (username) => (
  <li key={`listuser-${username}`}>{username}</li>
)

class CreateList extends React.Component {
  render() {
    console.log('>>>+', this.props);
    const usersList = this.props.usernames.map((username) => listUser(username));
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
}

const mapStateToProps = (state) => {
  return {
    usernames: state.usernames,
    currentUsername: state.currentUsername,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUsername: (e) => dispatch(updateUsername(e.target.value)),
    addUser: (e) => {e.preventDefault(); dispatch(addUser())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
