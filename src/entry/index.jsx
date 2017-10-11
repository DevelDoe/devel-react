/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-13T13:54:41+01:00
* @Email:  me@andreeray.se
* @Filename: app.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-11T17:56:10+02:00
*/

// IMPORTS ---------------------------------------------------

import React, {Component} from 'react'
import ReactDOM           from 'react-dom'
import {Provider}         from 'react-redux'
import {hashHistory}      from 'react-router'

var store                   = require('store').configureStore()
var actions                 = require('actions')

import router             from 'src/router'

store.dispatch(actions.changeStatus('Scripting'))
console.log(process.env.TEST)
// SETUP -----------------------------------------------------

var appName = "DevelStrap"
document.title = appName
store.dispatch(actions.changeAppName(appName))

store.dispatch(actions.fetchPosts())

// RENDER ----------------------------------------------------

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
)

console.log(`
%cMETA ##########################################
 * @Author              : Andreee Ray <DevelDoe>
 * @Date                : 2017-02-18T23:58:38+01:00
 * @Email               : me@andreeray.se
 * @Site                : andreeray.se
 * @Version             : 2.3
 * @Last modified by    : develdoe
 * @Last modified time: 2017-10-11T17:56:10+02:00
#################################################

%cABOUT #########################################

Welcome! I am DevelDoe (Andree Ray), a HTML CSS and
JavaScript ninja @ Wimse Web Development.
This application is a starting point for your React
web app development. It quickly straps all the basic
needs for a complete React solution.

#################################################

%cRELEASELOG#####################################
%c
0.0 The basic React skeleton
---------------------------------
This major release adds the basic React skelleton
and adds a test suit.
* 0.0.1 Install framework modules:
    * webpack
    * react
    * react-dom
    * express
    * babel-core
    * babel-loader
    * babel-preset-es2015
    * babel-preset-react
    * babel-preset-stage-0
* 0.0.2 Setup Webpack configuration
* 0.0.3 Add the html public shell document
* 0.0.4 Add a basic node server
* 0.0.5 Add the React entry file
* 0.0.6 Add a component to ouput data
* 0.0.7 Add a component to use a third party API

0.1 Test suit
---------------------------------
This minor update adds a Karma, Mocha, Expect and
react-addons-test-utils to the application.
* 0.1.1 Install Test suite modules:
    * karma
    * karma-webpack
    * karma-mocha
    * karma-mocha-reporter
    * karma-chrome-launcher
    * karma-sourcemap-loader
    * mocha
    * expect
    * react-addons-test-utils
* 0.1.2 Add file to test our components and Redux implementations

0.2 Redux
---------------------------------
This minor update adds Redux to the project for
eazy handling of application wide data.
* 0.2.1 Install Redux modules:
    * redux
    * react-redux
    * redux-thunk
    * axios
    * redux-mock-store
* 0.2.2 Add: Store
* 0.2.3 Add: Actions
* 0.2.4 Add: Reducers
* 0.2.5 Update: component

0.3.0 React Router
---------------------------------
This minor update adds React Router for
navigation the application.
* 0.3.1 Refactor to ES2016 syntax
* 0.3.2 Install Router modules:
  * react-router
* 0.3.3 Add: src/router/index
* 0.3.4 Add: src/router/routing
* 0.3.5 Update: src/entry
* 0.3.6 Refactoring:
  * Remove: src/router/routing
  * Add: src/layout
  * Update: src/router/index
  * Add: components/api
  * Update: components/component to components/data
  * Update: layout/default
* 0.3.7. Added environments
  * Update: webpack.config.js
  * Update: package.json
  * Add: environments/development.env

0.4 Front end styling for eazy layout creation
---------------------------------
This minor update adds styling to make developing layouts eazy
with blueprint background and semitransparents divs.
* 0.4.1 Update: ./public/index.html
* 0.4.2 Update: ./src/components/data/item
* 0.4.3 Update: ./src/layout/default.jsx

%c
1.0 Release
---------------------------------
This concludes version 1.0 of the project. The project can now
be used to quickly deploy professional React web applications.
Please checkout branches of this repo for more functionality.*
=================================

%c
1.1 Add A Third Party API
---------------------------------
This minor update adds a show case for consuming a third party api.
* 1.1.1 Install Axios node module
* 1.1.2 Add Component to display output from the API
* 1.1.3 Configure Redux to consume the Thrid Party APT

1.2 Firebase CRUD Branch
---------------------------------
This minor update adds Firebase as a backend CRUD solution.
* 1.2.1 Create an account on Firebase
* 1.2.2 Create a new project
* 1.2.3 Install firebase
* 1.2.4 Add firebase configuration file
* 1.2.5 temporarily disable authentication requirements at firebase
* 1.2.6 Add an input form
* 1.2.7 Set styles for inputs & forms
* 1.2.8 Refactor inputs to use redux
* 1.2.9 Pushing new items to Firebase
* 1.2.10 Fetching items from Firebase
* 1.2.11 Displaying items from store
* 1.2.12 Removing items
* 1.1.13 Updating items

%cBACKLOG#####################################

* 1.1.14 Add environments and update configuration file & refactor
%cDEBUGG######################################
`,
'color: #FFFFFF',
'color: #fc8daa',
'color: #3232ff',
'color: #e5e5ff',
'color: #3232ff',
'color: #b2b2ff',
'color: #FFFF00',
'color: #ccc')
