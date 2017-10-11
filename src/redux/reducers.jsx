/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:36+01:00
* @Email:  me@andreeray.se
* @Filename: index.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-11T20:31:17+02:00
*/



export var appNameReducer = (state = 'appName', action) =>
{
    switch (action.type)
    {
        case 'CHANGE_APP_NAME':
            return action.appName
        default:
            return state
    }
}
export var appStatusReducer = (state = "idle", action) => {
    switch (action.type)
    {
        case 'CHANGE_STATUS':
            return action.status
        default:
            return state
    }
}
export var postsReducer = (state = [], action) =>
{
    switch (action.type)
    {
        case 'ADD_POST':
            return [
                ...state,
                action.post
            ]
        case 'ADD_POSTS':
            return [
                ...state,
                ...action.posts
            ]
        case 'REMOVE_POST':
            return state.filter((post) =>  post.id !== action.id)
        case 'UPDATE_POST':
            return state.map((post) => {
                if(post.id === action.id) {
                    return {
                        ...post,
                        ...action.updates
                    }
                }
                else {
                    return post
                }

            })
        default:
            return state
    }
}
/**
 * Reducer for changing the state of third party api location
 */
export var mapReducer = (state = {url: undefined}, action) =>
{
    switch (action.type)
    {
        case 'START_LOCATION_FETCH':
            return {
                url: undefined
            }
        case 'COMPLETE_LOCATION_FETCH':
            return {
                url: action.url
            }
        default:
            return state
    }
}
