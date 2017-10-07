/**
 * @Author: develdoe
 * @Date:   2017-08-14T13:40:30+02:00
 * @Email:  andreeray@live.com
 * @Filename: index.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-03T20:08:29+02:00
 */

import React      from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'

export var Home = React.createClass({

    render: function () {
        var {appStatus} = this.props,
        renderApplication = () => {
            if (appStatus === "idle") {
                return (
                    <div>
                        This is my journal
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
            appStatus: state.appStatus
        }
    }
)(Home)
