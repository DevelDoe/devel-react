/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T03:39:38+01:00
* @Email:  me@andreeray.se
* @Filename: App.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-13T20:50:30+01:00
*/



var React = require('react'),
    {connect} = require('react-redux'),
    Item = require('item'),
    actions = require('actions')

var App = React.createClass({
    componentWillMount: function() {
        var {dispatch} = this.props
        dispatch(actions.clearStatus())
    },
    render: function () {
        var {appName, appStatus, array, map} = this.props



        var renderArray = () => {

            if (array.length > 0) {
                return (
                    <div id="array">
                        <h2>The Array:</h2>
                        <ul>
                            {getArrayItems()}
                        </ul>
                    </div>
                )
            }
        },
        getArrayItems = () => {
            return array.map((movie) => {
                return (
                    <Item key={movie.id} {...movie} />
                )
            })
        },
        renderApi = () => {
            if (map.url){
                return (
                    <div id="api">
                        <h2>The Api</h2>
                            <p>{map.url}</p>
                    </div>
                )
            }
        },
        renderApplication = () => {
            if (!appStatus[0]) { // [undefined] = idle
                return (
                    <div>
                        <div id="appname">
                            <h2>{appName}</h2>
                        </div>
                        {renderArray()}
                        {renderApi()}
                    </div>
                )
            } else {
                return (
                    <div id="status">
                        <ul id="application-status">
                            <li>Loading </li>
                            <li>Scripting <span className="blink">.</span></li>
                        </ul>
                    </div>
                )
            }
        }

        return renderApplication()
    }
})
module.exports = connect(
    (state) => {
        return {
            appName: state.appName,
            appStatus: state.appStatus,
            array: state.movies,
            map: state.map
        }
    }
)(App)
