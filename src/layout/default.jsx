/**
 * @Author: develdoe
 * @Date:   2017-08-14T13:12:52+02:00
 * @Email:  andreeray@live.com
 * @Filename: default.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-03T21:32:57+02:00
 */

import React from 'react'
import * as Redux from 'react-redux'
import { Link } from 'react-router'

export var defaultLayout = ({ children, location, appName }) => {
    return (
      <div className="primary-layout">
          <div><header><h1 style={{textAlign:'center', width: '100%'}}>{appName}</h1></header></div>

        <div className="group">
            <aside className="primary-aside">
              <ul>
                <li><div><Link to="/">HOME</Link></div></li>
                <li><div><Link to="/createNewPost">Create new post</Link></div></li>
                <li><div><Link to="/posts">posts</Link></div></li>
              </ul>
            </aside>
        </div>

        <div>
          {children}
        </div>
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
