/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-03-31T22:40:11+02:00
 * @Email:  me@andreeray.se
 * @Filename: actions.test.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-19T19:53:13+02:00
 */



import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
var expect = require('expect')
var actions = require('actions')

var createMockStore = configureMockStore([thunk])

describe('========== Actions ==========', () => {
    it('EXIST', () => {
        expect(actions).toExist()
    })

    it('Should: generate changeAppName action', () => {
        var action = {
            type: 'CHANGE_APP_NAME',
            appName: 'test'
        }
        var res = actions.changeAppName(action.appName)
        expect(res).toEqual(action)
    })

    it('Should: generate changeStatus action', () => {
        var status = 'test'
        var action = {
            type: 'CHANGE_STATUS',
            status
        }
        var res = actions.changeStatus(action.status)
        expect(res).toEqual(action)
    })

    it('Should: generate addItem action', () => {
        var action = {
            type: 'ADD_ITEM',
            title: 'test',
            genre: 'test'
        }
        var res = actions.addItem(action.title, action.genre)
        expect(res).toEqual(action)
    })

    it('Should: generate removeItem action', () => {
        var action = {
            type: 'REMOVE_ITEM',
            id: 0
        }
        var res = actions.removeItem(action.id)
        expect(res).toEqual(action)
    })

    it('Should: generate startLocationFetch action', () => {
        var action = {
            type: 'START_LOCATION_FETCH'
        }
        var res = actions.startLocationFetch()
        expect(res).toEqual(action)
    })

    it('Should: return url & dispatch CHANGE_STATUS, START_LOCATION_FETCH, COMPLETE_LOCATION_FETCH action', (done) => {
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

    it('Should: generate completeLocationFetch action', () => {
        var action = {
            type: 'COMPLETE_LOCATION_FETCH',
            url: 'test'
        }
        var res = actions.completeLocationFetch(action.url)
        expect(res).toEqual(action)
    })

})
