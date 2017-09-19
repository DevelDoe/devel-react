/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-20T01:34:41+02:00
 * @Email:  me@andreeray.se
 * @Filename: component.test.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-19T19:25:17+02:00
 */



import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import TestUtils from 'react-addons-test-utils'
import Expect from 'expect'
import {configureStore} from 'store'
import Component from 'data'
import List from 'data/list'

describe('========== Component ==========', () => {
    it('EXIST', () => {
        Expect(Component).toExist()
    })
    it('Should: render list', () => {

        var store = configureStore()
        var provider = TestUtils.renderIntoDocument(<Provider store={store}><Component/></Provider>)
        var component = TestUtils.scryRenderedComponentsWithType(provider, Component)[0]
        var list = TestUtils.scryRenderedComponentsWithType(component, List)

        Expect(list.length).toEqual(1)
    })
})
