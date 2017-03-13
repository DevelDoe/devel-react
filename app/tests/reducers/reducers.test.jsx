/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-07T03:27:20+01:00
* @Email:  me@andreeray.se
* @Filename: reducers.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-13T20:51:27+01:00
*/

var expect = require('expect'), reducers = require('reducers'), DeepFreeze = require('deep-freeze-strict')

describe('Redux reducers', () => {
    describe('appNameReducer', () => {
        it('CHANGE_APP_NAME', () => {
            var action = {
                type: 'CHANGE_APP_NAME',
                appName: 'test'
            }
            var res = reducers.appNameReducer(DeepFreeze('Anonymous'),DeepFreeze(action))
            expect(res).toEqual(action.appName)
        })
    })
    describe('appStatusReducer', () => {
        it('ADD_STATUS', () => {
            var action = {
                type: 'ADD_STATUS',
                status: 'test'
            }
            var res = reducers.appStatusReducer(DeepFreeze([]),DeepFreeze(action))
            expect(res.length).toEqual(1)
            expect(res[0]).toEqual(action.status)
        })
        it('CLEAR_STATUS', () => {
            var action = {
                type: 'CLEAR_STATUS'
            }
            var res = reducers.appStatusReducer(DeepFreeze([]),DeepFreeze(action))
            expect(res).toEqual([undefined])
        })
    })
    describe('moviesReducer', () => {
        it('ADD_MOVIE', () => {
            var action = {
                type: 'ADD_MOVIE',
                id: 0,
                title: 'test',
                genre: 'test'
            }
            var res = reducers.moviesReducer(DeepFreeze([]),DeepFreeze(action))
            expect(res.length).toEqual(1)
            expect(res[0].id).toEqual(action.id)
            expect(res[0].title).toEqual(action.title)
            expect(res[0].genre).toEqual(action.genre)
        })
        it('REMOVE_MOVIE', () => {
            var action = {
                type: 'ADD_MOVIE',
                id: 0,
                title: 'test',
                genre: 'test'
            }
            var res = reducers.moviesReducer(DeepFreeze([]),DeepFreeze(action))
            expect(res.length).toEqual(1)
            var action = {
                type: 'REMOVE_MOVIE',
                id: 0
            }
            var res = reducers.moviesReducer(DeepFreeze([]),DeepFreeze(action))
            expect(res.length).toEqual(0)
            expect(res[0]).toNotExist()
        })
    })
    describe('mapReducer', () => {
        it('START_LOCATION_FETCH', () => {
            var action = {
                type: 'START_LOCATION_FETCH',
            }
            var res = reducers.mapReducer(DeepFreeze(false,undefined),DeepFreeze(action))
            expect(res.isFetching).toEqual(true)
            expect(res.url).toEqual(undefined)
        })
        it('COMPLETE_LOCATION_FETCH', () => {
            var action = {
                type: 'COMPLETE_LOCATION_FETCH',
                url: 'test'
            }
            var res = reducers.mapReducer(DeepFreeze(false,undefined),DeepFreeze(action))
            expect(res.isFetching).toEqual(false)
            expect(res.url).toEqual(action.url)
        })
    })
})
