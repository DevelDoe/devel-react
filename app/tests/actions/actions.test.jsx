/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-07T01:49:56+01:00
* @Email:  me@andreeray.se
* @Filename: actions.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-13T20:51:16+01:00
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
        var status = ['test','test']
        var action = {
            type: 'ADD_STATUS',
            status
        }
        var res = actions.addStatus(status)
        Expect(res).toEqual(action)
    })
    it('clearStatus', () => {
        var action = {
            type: 'CLEAR_STATUS',
        }
        var res = actions.clearStatus(action)
        Expect(res).toEqual(action)
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
