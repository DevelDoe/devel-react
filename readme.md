<!--
@Author: Andreee Ray <develdoe>
@Date:   2017-03-10T00:42:05+01:00
@Email:  me@andreeray.se
@Filename: readme.md
@Last modified by:   develdoe
@Last modified time: 2017-04-26T11:43:59+02:00
-->



# DevelStrap, React/Redux/ReactRouter/Firebase

Bootstrapping React app development.

## Webpack & Babel

You will need to have Webpack installed globally in order to build the applicatinon.
The project uses Babel with react, es2015, stage-0 presets.

## Test Suit

There is also a comprehensive test suit, with karma, mocha and expect, included to get you up and running with testing.
In order to learn how to set up test, beside the included examples,  please visit [mjackson/expect](https://github.com/mjackson/expect).
I also have a repo with comprehensive test cases at [DevelTests](https://github.com/AndreeDeveldoeRay/DevelTests)

## Redux

The Redux implementation is ready to use with redux devtools extension in chrome, you need to install this,.
There is tree different types of state cases included to get you started.

* Simple text field
* An array
* api call

## Install

Clone this repository

`npm install` to initialy install your npm modules

### development

`webpack` to bundle your files, use `webpack -w` to autogenerate the bundle on the fly.

`node server.js` to run your server

### production

`npm start` to build, compress & start your server.

### Test suite

`npm test` to run your test suit.


## Release log

### 0.0 The basic React skelleton
*This bransh adds the basic React skelleton
and adds a test suit.*

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
* 0.0.2 Setup: Webpack
* 0.0.3 Add: public HTML
* 0.0.4 Add: Simple server
* 0.0.5 Install Test suite modules:
    * karma
    * karma-webpack
    * karma-mocha
    * karma-mocha-reporter
    * karma-chrome-launcher
    * karma-sourcemap-loader
    * mocha
    * expect
    * react-addons-test-utils
* 0.0.6 Add: Entry
* 0.0.7 Add: Component
* 0.0.8 Add: List
* 0.0.9 Add: Item

### 0.1 Implement Redux
*This bransh adds Redux to the project for
eazy handling of application wide data.*

* 0.1.1 Install Redux modules:
    * redux
    * react-redux
    * redux-thunk
    * axios
    * redux-mock-store
* 0.1.2 Add: Store
* 0.1.3 Add: Actions
* 0.1.4 Add: Reducers
* 0.1.5 Update: component

### 0.2 Implement React Router
*This bransh adds React Router for
navigation the application.*

* 0.2.1 Refactor to ES2016 syntax
* 0.2.2 Install Router modules:
  * react-router
* 0.2.3 Add: src/router/index
* 0.2.4 Add: src/router/routing
* 0.2.5 Update: src/entry
* 0.2.6 Refactoring:
  * Remove: src/router/routing
  * Add: src/layout
  * Update: src/router/index
  * Add: components/api
  * Update: components/component to components/data
  * Update: layout/default
* 0.2.7. Added environments
  * Update: webpack.config.js
  * Update: package.json
  * Add: environments/development.env

### 0.3.0 Front end styling for eazy layout creation
*This branch adds styling to make developing layouts eazy
with blueprint background and semitransparents divs.*

* 0.3.1 Update: ./public/index.html
* 0.3.2 Update: ./src/components/data/item
* 0.3.3 Update: ./src/layout/default.jsx

## v 1.0 Release
*This Concludes version 1 of the project, the project can now
be used to quickly deploy professional React web applications.*

---

## 2.0 Firebase Bransh
*Setting upp a firebase crud solution.*

### 2.1.0 Creating our Firebase Database
*We'll need to create an account and database on Firebase so that
we can link up our application to it.*

* 2.1.1 Create an account on Firebase
* 2.1.2 Create a new project

### 2.2.0 Hooking up our App to Firebase
*Next we install, import, configure, and initialize our app.*

* 2.2.1 Install firebase modules:
  * firebase
* 2.2.2 Add: ./src/firebase/index.js
* 2.2.3 temporarily disable authentication requirements at firebase

### 2.3.0 Building out our App's Rough Skeleton
*A simple form with two inputs.*

* 2.3.1 Add: ./src/components/input/index.jsx

### 2.4.0 Add styling
*Let's make it look cool.*

* 2.4.1 Update ./public/index.html

### 2.5.0 Connecting our Form to Redux
*Connect our inputs to Redux state.*

* 2.5.1 refactor ./src/components/input/index.jsx to use redux


## BACKLOG
### 2.6.0 Adding a new Item to your Database
### 2.7.0 Retrieving our Items from the database
### 2.8.0 Displaying Items on the Page
### 2.9.0 Removing Items from the Page
### 2.10.0 Refactor, change name of the component to input, etc
