/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T03:39:38+01:00
* @Email:  me@andreeray.se
* @Filename: App.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-03T21:31:26+02:00
*/



import React                        from 'react'
import * as Redux                   from 'react-redux'
import {fetchItems, changeStatus}   from 'actions'
import {firebasePostsRef}           from 'src/firebase'
import List                         from 'posts/list'



export var App = React.createClass({

    componentWillMount() {
        var {dispatch} = this.props
        document.title = this.props.appName + ": output"
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
