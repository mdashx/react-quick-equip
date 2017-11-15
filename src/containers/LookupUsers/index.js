import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShowUserList from 'components/ShowUserList';
import ShowRepos from 'components/ShowRepos';
import { makeSelectUsernames } from 'features/findUser/selectors';
import { makeMostRecentRepos, makeMostRecentUser } from 'features/foundUser/selectors';
import { lookupUsername } from 'features/foundUser/actions';


class LookupUsers extends React.Component {
  render() {
    return (
      <div>
        <ShowUserList
            title="Lookup Users"
            usernames={this.props.usernames}
            clickHandler={this.props.lookupUsername}
        />
        <hr />
        <ShowRepos repos={this.props.mostRecentRepos} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  usernames: makeSelectUsernames(),
  mostRecentRepos: makeMostRecentRepos(),
  mostRecentUser: makeMostRecentUser(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    lookupUsername: (e) => { dispatch(lookupUsername(e.target.getAttribute('data-username'))) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LookupUsers);
