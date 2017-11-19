/* 
 * 
 * To find additional modules to include in the DLL build, run `npm run
 * stats-dev` and use one of these tools:
 *    
 *    https://webpack.github.io/analyse/
 *    https://chrisbateman.github.io/webpack-visualizer/
 * 
 * Look for vendor libraries that are being included in the application
 * build and import them here to inlude them in the DLL build.
 *
 */

require('react');
require('react-dom');
require('react-redux');
require('react-router-dom');
require('react-router-redux');
require('redux');
require('reselect');
require('axios');
require('core-js');
require('react-loadable');
require('react-test-renderer');
require('redux-saga');
require('immutable');
