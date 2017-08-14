/**
 * @Author: develdoe
 * @Date:   2017-08-14T13:12:52+02:00
 * @Email:  andreeray@live.com
 * @Filename: default.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-08-14T14:34:36+02:00
 */

import React from 'react'
import * as Redux from 'react-redux'
import { Link } from 'react-router'

export var defaultLayout = ({ children, location, appName }) => {
    return (
      <div className="primary-layout">
        <header><h1>{appName}</h1></header>

        <aside className="primary-aside">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/api">api</Link></li>
          </ul>
        </aside>

        <main>
          {children}
        </main>
      </div>
    )
}

export default Redux.connect(
    (state) => {
        return {
            appName: state.appName
        }
    }
)(defaultLayout)
