<!--
@Author: Andreee Ray <develdoe>
@Date:   2017-03-10T00:42:05+01:00
@Email:  me@andreeray.se
@Filename: readme.md
@Last modified by:   develdoe
@Last modified time: 2017-04-20T01:56:21+02:00
-->



# DevelStrap, React & redux

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

## Serving

You will need to have Supervisor installed globally in order to use `npm start`

```bash
npm install -g supervisor
```


## Building & Testing

`npm install` to initialy install your npm modules

`webpack` to bundle your files, use `webpack -w` to autogenerate the bundle on the fly.

`npm test` to run your test suit.

`npm start` to start your server.

## Release log

0.0 Major (Framework) branch

    * 0.1 Install framework modules:
        * webpack
        * react
        * react-dom
        * express
        * babel-core
        * babel-loader
        * babel-preset-es2015
        * babel-preset-react
        * babel-preset-stage-0
    * 0.2 Setup: Webpack
    * 0.2 Add: public HTML
    * 0.3 Add: Simple server
    * 0.4 Install Test suite modules:
        * karma
        * karma-webpack
        * karma-mocha
        * karma-mocha-reporter
        * karma-chrome-launcher
        * karma-sourcemap-loader
        * mocha
        * expect
        * react-addons-test-utils
    * 0.4 Add: Entry
    * 0.4 Test: Entry
    * 0.5 Add: Component
    * 0.5 Test: Component
    * 0.6 Add: List
    * 0.6 Test: List
    * 0.7 Add: Item
    * 0.7 Test: Item

1.0 Major (Redux) branch
    * 1.1 Install Redux modules:
        * redux
        * react-redux
        * redux-thunk
        * axios
        * redux-mock-store
    * 1.2 Add: Store
    * 1.2 Test: Store
    * 1.3 Add: Actions
    * 1.3 Test: Actions
    * 1.4 Add: Reducers
    * 1.4 Test: Reduers
    * 1.5 Update: component
