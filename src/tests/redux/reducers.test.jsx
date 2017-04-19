/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-07T03:27:20+01:00
* @Email:  me@andreeray.se
* @Filename: reducers.test.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-19T19:53:17+02:00
*/

var expect = require('expect'), reducers = require('reducers'), DeepFreeze = require('deep-freeze-strict')

describe('========== Reducers ==========', () => {
    it('Exist',() => {
        expect(reducers).toExist()
    })

    it('Should: change app name', () => {
        var action = {
            type: 'CHANGE_APP_NAME',
            appName: 'test'
        }
        var res = reducers.appNameReducer(DeepFreeze('Anonymous'),DeepFreeze(action))
        expect(res).toEqual(action.appName)
    })


    it('Should: change applicatin status', () => {
        var action = {
            type: 'CHANGE_STATUS',
            status: 'test'
        }
        var res = reducers.appStatusReducer(DeepFreeze([]),DeepFreeze(action))
        expect(res).toEqual(action.status)
    })


    it('Should: add item', () => {
        var action = {
            type: 'ADD_ITEM',
            id: 0,
            title: 'test',
            genre: 'test'
        }
        var res = reducers.itemsReducer(DeepFreeze([]),DeepFreeze(action))
        expect(res.length).toEqual(1)
        expect(res[0].id).toEqual(action.id)
        expect(res[0].title).toEqual(action.title)
        expect(res[0].genre).toEqual(action.genre)
    })

    it('Should: remove item', () => {
        var action = {
            type: 'ADD_ITEM',
            id: 0,
            title: 'test',
            genre: 'test'
        }
        var res = reducers.itemsReducer(DeepFreeze([]),DeepFreeze(action))
        expect(res.length).toEqual(1)
        var action = {
            type: 'REMOVE_ITEM',
            id: 0
        }
        var res = reducers.itemsReducer(DeepFreeze([]),DeepFreeze(action))
        expect(res.length).toEqual(0)
        expect(res[0]).toNotExist()
    })

    it('Should: start a location fetch', () => {
        var action = {
            type: 'START_LOCATION_FETCH',
        }
        var res = reducers.mapReducer(DeepFreeze(false,undefined),DeepFreeze(action))
        expect(res.isFetching).toEqual(true)
        expect(res.url).toEqual(undefined)
    })

    it('Should: complete a location fetch', () => {
        var action = {
            type: 'COMPLETE_LOCATION_FETCH',
            url: 'test'
        }
        var res = reducers.mapReducer(DeepFreeze(false,undefined),DeepFreeze(action))
        expect(res.isFetching).toEqual(false)
        expect(res.url).toEqual(action.url)
    })
})
