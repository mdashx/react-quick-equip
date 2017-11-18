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

// See example app for various selector examples
