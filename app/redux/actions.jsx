/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:24+01:00
* @Email:  me@andreeray.se
* @Filename: index.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-31T23:06:27+02:00
*/

var axios = require('axios')

export var changeAppName = (appName) =>
{
    return {
        type: 'CHANGE_APP_NAME',
        appName
    }
}
export var addStatus = (status) => {
    return {
        type: 'ADD_STATUS',
        status
    }
}
export var clearStatus = () => {
    return {
        type: 'CLEAR_STATUS',
    }
}
export var addMovie = (title,genre) =>
{
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    }
}
export var removeMovie = (id) =>
{
    return {
        type: 'REMOVE_MOVIE',
        id
    }
}
export var startLocationFetch = () =>
{
    return {
        type: 'START_LOCATION_FETCH'
    }
}
export var fetchLocation = () =>
{
    return (dispatch, getState) =>
    {
        dispatch(startLocationFetch())
        // You have to install es-6 promise for this to work for <= IE 11
        axios.get('http://ipinfo.io').then(function (res) {
            var loc = res.data.loc
            var baseUrl = 'http://maps.google.com?q='
            dispatch(completeLocationFetch(baseUrl+loc))
            dispatch(clearStatus())
        })
    }
}
export var completeLocationFetch = (url) =>
{
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
}
