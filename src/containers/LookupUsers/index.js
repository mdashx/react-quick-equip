import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShowUserList from 'components/ShowUserList';
import ShowRepos from 'components/ShowRepos';
import { makeSelectUsernames } from 'features/findUser/selectors';
import {
  makeMostRecentRepos,
  makeMostRecentUser,
} from 'features/foundUser/selectors';
import { lookupUsername } from 'features/foundUser/actions';

import style from './style.css';

class LookupUsers extends React.Component {
  render() {
    return (
      <div>
        <div className="flex-grid">
          <div className="col">
        <ShowUserList
            title="Lookup Users"
            usernames={this.props.usernames}
            clickHandler={this.props.lookupUsername}
            headerClass={style.myHeading}
        />
          </div>
          <div className="col">
            <ShowRepos repos={this.props.mostRecentRepos} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  usernames: makeSelectUsernames(),
  mostRecentRepos: makeMostRecentRepos(),
  mostRecentUser: makeMostRecentUser(),
});

const mapDispatchToProps = dispatch => {
  return {
    lookupUsername: e => {
      dispatch(lookupUsername(e.target.getAttribute('data-username')));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LookupUsers);
