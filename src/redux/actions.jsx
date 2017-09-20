/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:24+01:00
* @Email:  me@andreeray.se
* @Filename: index.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-20T19:21:31+02:00
*/

import Axios from 'Axios'
import Firebase, {firebaseRef} from 'src/firebase'

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
export var addItem = (item) =>
{
    return {
        type: 'ADD_ITEM',
        item
    }
}
export var startAddItem = (title,genre) => {
    return (dispatch, getState) => {

        var item = {
            title,
            genre
        }

        dispatch(changeStatus("Pushing"))
        var itemRef = firebaseRef.child('items').push(item)

        return itemRef.then(() => {
            dispatch(addItem({
                ...item,
                id: itemRef.key
            }))
            dispatch(changeStatus("idle"))
        }, (error) => {
            console.log("error:" + error)
            dispatch(changeStatus("idle"))
        })
    }

}
export var removeItem = (id) =>
{
    return {
        type: 'REMOVE_ITEM',
        id
    }
}
export var fetchLocation = () =>
{
    return (dispatch, getState) =>
    {
        dispatch(changeStatus("Fetching"))
        return Axios.get('http://ipinfo.io').then(function (res) {
            var loc = res.data.loc
            var baseUrl = 'http://maps.google.com?q='
            dispatch(completeLocationFetch(baseUrl+loc))
            dispatch(changeStatus("idle"))
        }, (error) => {
            console.log("error:" + error)
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
