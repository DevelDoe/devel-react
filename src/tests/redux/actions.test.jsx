/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-03-31T22:40:11+02:00
 * @Email:  me@andreeray.se
 * @Filename: actions.test.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-05T22:03:46+02:00
 */



import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
var expect = require('expect')
var actions = require('actions')

var createMockStore = configureMockStore([thunk])

describe('actions', () => {
    it('changeAppName', () => {
        var action = {
            type: 'CHANGE_APP_NAME',
            appName: 'test'
        }
        var res = actions.changeAppName(action.appName)
        expect(res).toEqual(action)
    })
    it('changeStatus', () => {
        var status = 'test'
        var action = {
            type: 'CHANGE_STATUS',
            status
        }
        var res = actions.changeStatus(action.status)
        expect(res).toEqual(action)
    })
    it('addMovie', () => {
        var action = {
            type: 'ADD_MOVIE',
            title: 'test',
            genre: 'test'
        }
        var res = actions.addMovie(action.title, action.genre)
        expect(res).toEqual(action)
    })
    it('removeMovie', () => {
        var action = {
            type: 'REMOVE_MOVIE',
            id: 0
        }
        var res = actions.removeMovie(action.id)
        expect(res).toEqual(action)
    })
    it('startLocationFetch', () => {
        var action = {
            type: 'START_LOCATION_FETCH'
        }
        var res = actions.startLocationFetch()
        expect(res).toEqual(action)
    })
    it('fetchLocation should return a location and dispatch completeLocationFetch & changeStatus', (done) => {
        const store = createMockStore({})

        store.dispatch(actions.fetchLocation()).then(() => {
            const actions = store.getActions()
            expect(actions[0]).toInclude({
                type: 'CHANGE_STATUS'
            })
            expect(actions[1]).toInclude({
                type: 'START_LOCATION_FETCH'
            })
            expect(actions[2]).toInclude({
                type: 'COMPLETE_LOCATION_FETCH'
            })
            expect(actions[2]).toIncludeKey('url')
            expect(actions[3]).toInclude({
                type: 'CHANGE_STATUS'
            })
            done()
        }).catch(done)

    })
    it('completeLocationFetch', () => {
        var action = {
            type: 'COMPLETE_LOCATION_FETCH',
            url: 'test'
        }
        var res = actions.completeLocationFetch(action.url)
        expect(res).toEqual(action)
    })
})
