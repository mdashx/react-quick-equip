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

import 'react';
import 'react-dom';
import 'react-redux';
import 'react-router-dom';
import 'react-router-redux';
import 'redux';
import 'reselect';
import 'axios';
import 'core-js';
import 'react-loadable';
import 'react-test-renderer';
import 'redux-saga';
import 'immutable';
