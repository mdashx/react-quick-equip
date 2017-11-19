/* 
 *
 * Search History container (Redux connected component)
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShowUserList from 'components/ShowUserList';
import ShowRepos from 'components/ShowRepos';
import {
  makeSelectedRepos,
  makeSelectHistory,
} from 'features/foundUser/selectors';
import { selectUser } from 'features/foundUser/actions';

import style from './style.css';

export class SearchHistory extends React.Component {
  render() {
    return (
      <div>
        <ShowUserList
          title="Search History"
          usernames={this.props.history}
          clickHandler={this.props.showRepos}
          headerClass={style.myHeading}
        />
        <hr />
        <ShowRepos repos={this.props.repos} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  history: makeSelectHistory(),
  repos: makeSelectedRepos(),
});

const mapDispatchToProps = dispatch => {
  return {
    showRepos: e =>
      dispatch(selectUser(e.target.getAttribute('data-username'))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);
