/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-07T01:49:56+01:00
* @Email:  me@andreeray.se
* @Filename: actions.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-13T17:30:59+01:00
*/

var Expect = require('expect'), actions = require('actions')

describe('Redux actions', () => {
    it('changeAppName', () => {
        var action = {
            type: 'CHANGE_APP_NAME',
            appName: 'test'
        }
        var res = actions.changeAppName(action.appName)
        Expect(res).toEqual(action)
    })
    it('addStatus', () => {
        var action = {
            type: 'ADD_STATUS',
            status: 'test'
        }
        var res = actions.addStatus(action.status)
        Expect(res.status).toEqual(action.status)
    })
    it('removeStatus', () => {
        var action = {
            type: 'REMOVE_STATUS',
        }
        var res = actions.removeStatus(action)
        Expect(res.type).toEqual(action.type)
    })
    it('addMovie', () => {
        var action = {
            type: 'ADD_MOVIE',
            title: 'test',
            genre: 'test'
        }
        var res = actions.addMovie(action.title, action.genre)
        Expect(res).toEqual(action)
    })
    it('removeMovie', () => {
        var action = {
            type: 'REMOVE_MOVIE',
            id: 0
        }
        var res = actions.removeMovie(action.id)
        Expect(res).toEqual(action)
    })
    it('startLocationFetch', () => {
        var action = {
            type: 'START_LOCATION_FETCH'
        }
        var res = actions.startLocationFetch()
        Expect(res).toEqual(action)
    })
    it('completeLocationFetch', () => {
        var action = {
            type: 'COMPLETE_LOCATION_FETCH',
            url: 'test'
        }
        var res = actions.completeLocationFetch(action.url)
        Expect(res).toEqual(action)
    })
})
