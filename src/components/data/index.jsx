/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T03:39:38+01:00
* @Email:  me@andreeray.se
* @Filename: App.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-27T13:55:58+02:00
*/



import React      from 'react'
import * as Redux from 'react-redux'

import {fetchItems, changeStatus} from 'actions'

import List       from 'data/list'



export var App = React.createClass({

    componentWillMount() {
        var {dispatch} = this.props
        document.title = this.props.appName + ": welcome"
    },

    render: function () {
        var {appStatus} = this.props,

        renderApplication = () => {
            if (appStatus === "idle") {
                return (
                    <div>
                        <List/>
                    </div>
                )
            } else { return <div className="blink">{appStatus}</div> }
        }

        return renderApplication()
    }
})
export default Redux.connect(
    (state) => {
        return {
            appName: state.appName,
            appStatus: state.appStatus,
        }
    }
)(App)
