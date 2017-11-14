import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import UserList from 'components/UserList';
import { makeFoundRepos, makeSelectHistory } from 'features/foundUser/selectors';

class SearchHistory extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Search History</h1>
        <ul>
          <UserList usernames={this.props.history} clickHandler={this.props.createComment} />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  history: makeSelectHistory(),
  repos: makeFoundRepos(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (e) => { console.log(`Comment on user: ${e.target.getAttribute('data-username')}`)}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);
