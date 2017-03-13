/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-13T13:54:41+01:00
* @Email:  me@andreeray.se
* @Filename: app.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-13T20:52:16+01:00
*/

var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    Component = require('component')

var store = require('store').store(),
    actions = require('actions')

// Redux
// ######################################
var unsubscribe = store.subscribe(() =>{})

// Examples
store.dispatch(actions.changeAppName('Firebase'))

// Database
// ########################################
import '../firebase/firebase'

// Bootstraping
// ########################################

// Inject splash information
var ul = document.getElementById('application-status');
ul.innerHTML = '<li>Loading </li>'
var li = document.createElement("li");
li.appendChild(document.createTextNode(''));
li.innerHTML = 'Scripting <span class="blink">.</span>'
ul.appendChild(li);

// This shows up when react renders
store.dispatch(actions.addStatus('Rendering'))






ReactDOM.render(<Provider store={store}><Component/></Provider>, document.getElementById('app'))
