/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:24+01:00
* @Email:  me@andreeray.se
* @Filename: index.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-19T17:35:32+02:00
*/

var axios = require('axios')

export var changeAppName = (appName) =>
{
    return {
        type: 'CHANGE_APP_NAME',
        appName
    }
}
export var changeStatus = (status) => {
    return {
        type: 'CHANGE_STATUS',
        status
    }
}
export var addItem = (title,genre) =>
{
    return {
        type: 'ADD_ITEM',
        title,
        genre
    }
}
export var removeItem = (id) =>
{
    return {
        type: 'REMOVE_ITEM',
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
        dispatch(changeStatus("Fetching"))
        dispatch(startLocationFetch())
        return axios.get('http://ipinfo.io').then(function (res) {
            var loc = res.data.loc
            var baseUrl = 'http://maps.google.com?q='
            dispatch(completeLocationFetch(baseUrl+loc))
            dispatch(changeStatus("idle"))
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
