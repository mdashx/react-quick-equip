/* 
 *
 * Home Screen container (Redux connected component)
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { $selectorName } from 'features/$featureName/selectors';
import { $actionName } from 'features/$featureName/actions';

export class HomeScreen extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}



const mapStateToProps = createStructuredSelector({
  $propName: $selectorName(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    $propName2: () => dispatch(--actionName()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
