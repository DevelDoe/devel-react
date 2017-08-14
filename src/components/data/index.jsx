/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T03:39:38+01:00
* @Email:  me@andreeray.se
* @Filename: App.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-08-14T14:35:50+02:00
*/



import React      from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'

import List       from 'data/list'



export var App = React.createClass({

    componentWillMount() {
        var {dispatch} = this.props
        document.title = this.props.appName + ": welcome"
        dispatch(actions.addItem('item 1','test'))
        dispatch(actions.addItem('item 2','test'))
        dispatch(actions.addItem('item 3','test'))
        dispatch(actions.removeItem(2))
        dispatch(actions.changeStatus('idle'))
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
