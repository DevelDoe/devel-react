/**
 * @Author: develdoe
 * @Date:   2017-08-14T13:40:30+02:00
 * @Email:  andreeray@live.com
 * @Filename: index.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-08-14T14:21:11+02:00
 */

import React      from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'

export var API = React.createClass({

    componentWillMount() {
        this.props.dispatch(actions.fetchLocation())
    },

    render: function () {
        var {apiLocation, appStatus} = this.props,
        renderApplication = () => {
            if (appStatus === "idle") {
                return (
                    <div>
                        Your location: {apiLocation.url}
                    </div>
                )
            }
            else { return  <div className="blink">{appStatus}</div> }
        }
        return renderApplication()
    }

})

export default Redux.connect(
    (state) => {
        return {
            apiLocation: state.map,
            appStatus: state.appStatus
        }
    }
)(API)
