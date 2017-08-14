/**
 * @Author: develdoe
 * @Date:   2017-08-13T17:28:34+02:00
 * @Email:  andreeray@live.com
 * @Filename: index.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-08-14T14:35:33+02:00
 */

import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import AppLayout from 'default'
import Component from 'data'
import Api       from 'api'

const Test = () => <div>Users Page</div>

export default (
  <Router history={hashHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Component} />
      <Route path="/api" component={Api} />
    </Route>
  </Router>
)
