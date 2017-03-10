/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-07T03:27:20+01:00
* @Email:  me@andreeray.se
* @Filename: reducers.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T01:05:51+01:00
*/

var Expect = require('expect'), Reducers = require('reducers'), DeepFreeze = require('deep-freeze-strict')

describe('Redux Reducers', () => {
    describe('appNameReducer', () => {
        it('CHANGE_APP_NAME', () => {
            var action = {
                type: 'CHANGE_NAME',
                appName: 'test'
            }
            var res = Reducers.appNameReducer(DeepFreeze(''),DeepFreeze(action))
            Expect(res).toEqual(action.appName)
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
            var res = Reducers.moviesReducer(DeepFreeze([]),DeepFreeze(action))
            Expect(res.length).toEqual(1)
            Expect(res[0].id).toEqual(action.id)
            Expect(res[0].title).toEqual(action.title)
            Expect(res[0].genre).toEqual(action.genre)
        })
        it('REMOVE_MOVIE', () => {
            var action = {
                type: 'ADD_MOVIE',
                id: 0,
                title: 'test',
                genre: 'test'
            }
            var res = Reducers.moviesReducer(DeepFreeze([]),DeepFreeze(action))
            Expect(res.length).toEqual(1)
            var action = {
                type: 'REMOVE_MOVIE',
                id: 0
            }
            var res = Reducers.moviesReducer(DeepFreeze([]),DeepFreeze(action))
            Expect(res.length).toEqual(0)
            Expect(res[0]).toNotExist()
        })
    })
    describe('mapReducer', () => {
        it('START_LOCATION_FETCH', () => {
            var action = {
                type: 'START_LOCATION_FETCH',
            }
            var res = Reducers.mapReducer(DeepFreeze(false,undefined),DeepFreeze(action))
            Expect(res.isFetching).toEqual(true)
            Expect(res.url).toEqual(undefined)
        })
        it('COMPLETE_LOCATION_FETCH', () => {
            var action = {
                type: 'COMPLETE_LOCATION_FETCH',
                url: 'test'
            }
            var res = Reducers.mapReducer(DeepFreeze(false,undefined),DeepFreeze(action))
            Expect(res.isFetching).toEqual(false)
            Expect(res.url).toEqual(action.url)
        })
    })
})
