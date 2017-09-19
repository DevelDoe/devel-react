/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-19T16:36:24+02:00
 * @Email:  me@andreeray.se
 * @Filename: component.test.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-19T19:25:40+02:00
 */


import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import TestUtils from 'react-addons-test-utils'
import Expect from 'expect'


import {configureStore} from 'store'
import ConnectedList, {List} from 'data/list'
import ConnectedItem, {Item} from 'data/item'

describe('========== List ==========', () => {

    it('EXIST', () => {
        Expect(ConnectedList).toExist()
    })

    it('Should: render a Item component for each item', () => {
        var items = [{
                id: 1,
                title: 'item1',
                genre: 'genre'
            },{
                id: 2,
                title: 'item2',
                genre: 'genre'
            }]

        var st = configureStore({items})

        var provider = TestUtils.renderIntoDocument(<Provider store={st}><ConnectedList/></Provider>)
        var list = TestUtils.scryRenderedComponentsWithType(provider, ConnectedList)[0]
        var listComponents = TestUtils.scryRenderedComponentsWithType(list, ConnectedItem)

        Expect(listComponents.length).toBe(items.length)

    })

    it('Should: render empty message if no items', () =>
    {
        var items = []
        var list = TestUtils.renderIntoDocument(<List items={items}/>)
        var listNode = ReactDOM.findDOMNode(list)
        var test = listNode.getElementsByClassName("contain__message")
        Expect(test.length).toBe(1)
    })
})
