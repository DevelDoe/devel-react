/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:53+01:00
* @Email:  me@andreeray.se
* @Filename: configStore.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T01:47:10+02:00
*/


import * as redux from 'redux'
import thunk from 'redux-thunk'
import {appNameReducer, appStatusReducer, itemsReducer, mapReducer} from 'reducers'

export var configureStore = (init = {}) => {
    var reducer = redux.combineReducers({ appName: appNameReducer, appStatus: appStatusReducer, items: itemsReducer, map : mapReducer })
    var store = redux.createStore(reducer, init, redux.compose(redux.applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))
    return store
}
