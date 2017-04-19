/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-13T13:54:41+01:00
* @Email:  me@andreeray.se
* @Filename: app.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-19T16:30:37+02:00
*/

console.log(`
%cMETA########################################
 * @Author              : Andreee Ray <DevelDoe>
 * @Date                : 2017-02-18T23:58:38+01:00
 * @Email               : me@andreeray.se
 * @Site                : andreeray.se
 * @Patch               : 0.
 * @Last modified by    : develdoe
 * @Last modified time: 2017-04-19T16:30:37+02:00
##############################################

%cABOUT#######################################

Welcome! I am the Devel, a HTML CSS and
JavaScript ninja @ Devel Devils.

##############################################

%cRELEASELOG#####################################

* 0.0 Inital branch
    * 0.1 Install modules:
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
    * 0.4 Add: React Entry point
    * 0.5 Add: Basic Components
    * 0.6 Install Test suite modules:
        * karma
        * karma-webpack
        * karma-mocha
        * karma-mocha-reporter
        * karma-chrome-launcher
        * karma-sourcemap-loader
        * mocha
        * expect
        * react-addons-test-utils
    * 0.7 Setup: tests
    * 0.8 Test: entry
    * 0.8 Test: component
    * 0.9 Test: item

* 1.0 Major branch
    * 1.1 Install Redux modules:
        * redux
        * react-redux
        * redux-thunk
        * axios
        * redux-mock-store
    * 1.2 Add: Store
    * 1.3 Add: Actions
    * 1.4 Add: Reducers
    * 1.5 Update: component
    * 1.6 Test: actions
    * 1.7 Test: reducers

##############################################

%cBACKLOG#####################################

##############################################

%cDEBUGG######################################
`,
'color: orange','color: #fc8daa','color: #93dcff','color: #93dcff','color: #ccc')

var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    Component = require('component')

var store = require('store').configureStore(),
    actions = require('actions')

var appName = "DevelStrap"
document.title = appName

// Redux
// ######################################
var unsubscribe = store.subscribe(() =>{
    var state = store.getState()
})

store.dispatch(actions.changeStatus('Scripting'))
store.dispatch(actions.changeAppName(appName))
store.dispatch(actions.addMovie('Star Wars','Sci-fi'))
store.dispatch(actions.addMovie('Mad Max','Action'))
store.dispatch(actions.addMovie('Logan','Action'))
store.dispatch(actions.removeMovie(1))
store.dispatch(actions.fetchLocation())


ReactDOM.render(<Provider store={store}><Component/></Provider>, document.getElementById('app'))
