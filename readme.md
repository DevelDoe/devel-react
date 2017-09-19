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

### 0.0 The basic React skeleton
*This major release adds the basic React skelleton
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
*This minor update adds Redux to the project for
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
*This minor update adds React Router for
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
*This minor update adds styling to make developing layouts eazy
with blueprint background and semitransparents divs.*

* 0.3.1 Update: ./public/index.html
* 0.3.2 Update: ./src/components/data/item
* 0.3.3 Update: ./src/layout/default.jsx

## 1.0 Release
*This concludes version 1.0 of the project. The project can now
be used to quickly deploy professional React web applications.
Please checkout branches of this repo for more functionality.*

---

### 1.1 Firebase CRUD Bransh
*This minor update adds Firebase as a backend CRUD solution.*

* 1.1.1 Create an account on Firebase
* 1.1.2 Create a new project
* 1.1.3 Install firebase modules:
  * firebase
* 1.1.4 Add: ./src/firebase/index.js
* 1.1.5 temporarily disable authentication requirements at firebase
* 1.1.6 Add: ./src/components/input/index.jsx
* 1.1.7 Update ./public/index.html
* 1.1.8 refactor ./src/components/input/index.jsx to use redux


## BACKLOG
* 1.1.9 Adding a new Item to your Database
* 1.1.10 Retrieving our Items from the database
* 1.1.11 Displaying Items on the Page
* 1.1.12 Removing Items from the Page
