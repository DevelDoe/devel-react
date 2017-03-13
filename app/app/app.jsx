/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-13T13:54:41+01:00
* @Email:  me@andreeray.se
* @Filename: app.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-13T14:03:50+01:00
*/



var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    Component = require('component')

var store = require('store').store(),
    actions = require('actions')

var unsubscribe = store.subscribe(() =>{})

store.dispatch(actions.changeAppName('DevelPlate'))
store.dispatch(actions.addMovie('Star Wars','Sci-fi'))
store.dispatch(actions.addMovie('Mad Max','Action'))
store.dispatch(actions.addMovie('Logan','Action'))
store.dispatch(actions.removeMovie(1))
store.dispatch(actions.fetchLocation())

ReactDOM.render(<Provider store={store}><Component/></Provider>, document.getElementById('app'))
