import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShowUserList from 'components/ShowUserList';
import { makeFoundRepos, makeSelectHistory } from 'features/foundUser/selectors';

class SearchHistory extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ShowUserList
            title="Search History"
            usernames={this.props.usernames}
            clickHandler={this.props.lookupUsername}
        />
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
