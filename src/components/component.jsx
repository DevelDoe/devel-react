/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T03:39:38+01:00
* @Email:  me@andreeray.se
* @Filename: App.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T00:54:31+02:00
*/



var React = require('react'),
    {connect} = require('react-redux'),
    actions = require('actions')

import List from 'list'

export var App = React.createClass({

    componentWillMount() {
        document.title = this.props.appName + ": welcome"
    },

    render: function () {
        var {appName, appStatus, map} = this.props,

        renderApplication = () => {
            if (appStatus === "idle") {
                return (
                    <div>
                        <h2>Application name: {appName}</h2>
                        <List/>
                        <div>Your location: {map.url}</div>
                    </div>
                )
            } else { return <div className="blink">{appStatus}</div> }
        }

        return renderApplication()
    }
})
export default connect(
    (state) => {
        return {
            appName: state.appName,
            appStatus: state.appStatus,
            map: state.map
        }
    }
)(App)
