import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectHistory } from 'selectors/lookedUp';

import UserList from 'components/UserList';

class SearchHistory extends React.Component {
  render() {
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
});

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (e) => { console.log(`Comment on user: ${e.target.getAttribute('data-username')}`)}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);
