import React from 'react';
import { connect } from 'react-redux';

class SearchHistory extends React.Component {
  render() {
    return (
      <div>
        <h1>Search History</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    usernames: state.usernames,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);
