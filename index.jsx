/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-18T23:58:38+01:00
* @Email:  me@andreeray.se
* @Filename: Entry.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-30T15:56:48+02:00
*/

console.log(`
%cMETA########################################
 * @Author              : Andreee Ray <DevelDoe>
 * @Date                : 2017-02-18T23:58:38+01:00
 * @Email               : me@andreeray.se
 * @Site                : andreeray.se
 * @Patch               : 2.7.62
 * @Last modified by    : develdoe
 * @Last modified time  : 2017-03-28T23:48:43+02:00
##############################################

%cABOUT#######################################

Welcome! I am the Devel, a HTML CSS and
JavaScript ninja @ Devel Devils.

The application is built with REACT, a JavaScript
library that encapsulat components that
manage their own state. The application also uses
Redux to manage it's complexity.
It is used as a playaround for new technology and
a formal introduction.
If you like to get in touch, please contact me at
the email above. Many best wishes / DevelDoe.
##############################################

%cBACKLOG#####################################
 * 2.8 output to redux
 * 2.9 add firebase and remove fake api
 * 3.1 change model to hold records
##############################################

%cDEBUGG######################################
`,
'color: orange','color: #fc8daa','color: #93dcff','color: #ccc')

var React    = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    store = require('store').config(),
    actions = require('actions')

import Terminal from 'terminal'

// Injecting boot information since react at this time does not have have control of rendering.
// ###################################################
var ul = document.getElementById('application-status');
ul.innerHTML = '<li>Loading </li>'
var li = document.createElement("li");
li.appendChild(document.createTextNode(''));
li.innerHTML = 'Scripting <span class="blink">.</span>'
ul.appendChild(li);
document.title = "andreeray.se - Scripting"
// ###################################################

// Redux
// ###################################################
var unsubscribe = store.subscribe(() =>{
    var state = store.getState()
    document.title = state.appName
})
store.dispatch(actions.changeAppName('andreeray.se'))
// update splash
store.dispatch(actions.addStatus('Rendering'))
// ###################################################


require('style!css!sass!styles')


ReactDOM.render(<Provider store={store}><Terminal/></Provider>,document.getElementById('app'))
