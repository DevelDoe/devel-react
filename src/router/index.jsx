/**
 * @Author: develdoe
 * @Date:   2017-08-13T17:28:34+02:00
 * @Email:  andreeray@live.com
 * @Filename: index.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-11T20:33:16+02:00
 */

import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import AppLayout     from 'default'
import Home          from 'home'
import createNewPost from 'createNewPost'
import updatePost    from 'updatePost'
import Posts         from 'posts'
import Api       from 'api'

const Test = () => <div>Users Page</div>

export default (
  <Router history={hashHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Home} />
      <Route path="/createNewPost" component={createNewPost} />
      <Route path="/updatePost/:id" component={updatePost} />
      <Route  path="/Posts" component={Posts} />
      <Route path="/api" component={Api} />
    </Route>
  </Router>
)
