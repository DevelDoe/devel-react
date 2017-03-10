/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:36+01:00
* @Email:  me@andreeray.se
* @Filename: index.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T01:27:31+01:00
*/



export var appNameReducer = (state = 'Anonymous', action) =>
{
    switch (action.type)
    {
        case 'CHANGE_APP_NAME':
            return action.appName
        default:
            return state
    }
}
var nextMovieId = 0
export var moviesReducer = (state = [], action) =>
{
    switch (action.type)
    {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre
                }
            ]
        case 'REMOVE_MOVIE':
            return state.filter((movie) =>  movie.id !== action.id)
        default:
            return state
    }
}
export var mapReducer = (state = {isFetching: false, url: undefined}, action) =>
{
    switch (action.type)
    {
        case 'START_LOCATION_FETCH':
            return {
                isFetching: true,
                url: undefined
            }
        case 'COMPLETE_LOCATION_FETCH':
            return {
                isFetching: false,
                url: action.url
            }
        default:
            return state
    }
}
