/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-13T13:54:41+01:00
* @Email:  me@andreeray.se
* @Filename: app.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-13T17:13:00+01:00
*/



var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    Component = require('component')

var store = require('store').store(),
    actions = require('actions')

console.log('bootstraping application')

// inject splash information
var ul = document.getElementById('application-status');
ul.innerHTML = '<li>Loading </li>'
var li = document.createElement("li");
li.appendChild(document.createTextNode(''));
li.innerHTML = 'Scripting <span class="blink">.</span>'
ul.appendChild(li);

var unsubscribe = store.subscribe(() =>{})

// This shows up when application has mounted
store.dispatch(actions.addStatus('Rendering'))

store.dispatch(actions.changeAppName('DevelPlate'))
store.dispatch(actions.addMovie('Star Wars','Sci-fi'))
store.dispatch(actions.addMovie('Mad Max','Action'))
store.dispatch(actions.addMovie('Logan','Action'))
store.dispatch(actions.removeMovie(1))
store.dispatch(actions.fetchLocation())



ReactDOM.render(<Provider store={store}><Component/></Provider>, document.getElementById('app'))
