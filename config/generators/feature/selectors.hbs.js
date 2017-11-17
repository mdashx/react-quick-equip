/* 
 * 
 * Selectors for {{ titleCase name}}
 *
 * We use factory functions to create selectors. It's not really
 * necessary unless the selector accepts arguments, but it's nice to
 * always do it the same way.
 *
 * https://github.com/reactjs/reselect#sharing-selectors-with-props-across-multiple-component-instances
 *
 */

import { createSelector } from 'reselect';

export const select{{ properCase name}} = state => state.{{ camelCase name}};


// ===== You should probably remove evertything below this line before committing code...
// ======================================================================================

// Examples selectors:

/* export const makeSelectItem = () => createSelector(
 *   [selectFoundUser],
 *   foundUserState => foundUserState.get('item')
 * );
 * */

/* export const makeMostRecentUser = () => createSelector(
 *   [selectFoundUser],
 *   foundUserState => foundUserState.getIn(['history', 0])
 * );*/

/* export const makeMostRecentRepos = () => createSelector(
 *   [selectFoundUser],
 *   foundUserState => {
 *     const user = foundUserState.getIn(['history', 0])
 *     return foundUserState.getIn(['foundRepos', user])
 *   }
 * );*/
