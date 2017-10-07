/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:24+01:00
* @Email:  me@andreeray.se
* @Filename: index.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-07T15:11:36+02:00
*/

import Axios from 'Axios'
import moment from 'moment'
import Firebase, {firebasePostsRef} from 'src/firebase'

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
export var addPostState = (post) =>
{
    return {
        type: 'ADD_POST',
        post
    }
}
export var pushPost = (title,summary,body) => {
    return (dispatch, getState) => {

        var post = {
            title,
            summary,
            body,
            published: false,
            createdAt: moment().unix(),
            publishedAt: null
        }

        dispatch(changeStatus("Pushing"))
        var postsRef = firebasePostsRef.push(post)

        return postsRef.then(() => {
            dispatch(addPostState({
                ...post,
                id: postsRef.key
            }))
            dispatch(changeStatus("idle"))
        }, (error) => {
            console.log("error:" + error)
            dispatch(changeStatus("idle"))
        })
    }

}

export var addPostsState = (posts) => {
    return {
        type: 'ADD_POSTS',
        posts
    }
}

export var fetchPosts = () => {

    return (dispatch, getState) => {

        dispatch(changeStatus("Fetching posts"))

        return firebasePostsRef.once('value').then((ss) => {

            var posts = ss.val() || {},
                parse = []

            if (posts) {

                Object.keys(posts).forEach((id) => {
                    parse.push({
                        id,
                        ...posts[id]
                    })
                })
                dispatch(addPostsState(parse))
                dispatch(changeStatus("idle"))
            }
        }, (error) => {
            console.log("error:" + error)
            dispatch(changeStatus("idle"))
        })
    }
}

export var removePostState = (id) => {
    return {
        type: 'REMOVE_POST',
        id
    }
}

export var deletePost = (id) => {

    return (dispatch, getState) => {
        dispatch(changeStatus(`Removing post ${id}`))

        var postRef = firebasePostsRef.child(`${id}`).remove()

        return postRef.then(() => {
            dispatch(removePostState(id))
            dispatch(changeStatus("idle"))
        }, (error) => {
            console.log("error:" + error)
            dispatch(changeStatus("idle"))
        })
    }
}

export var updatePostState = (id, updates) => {
    return {
        type: 'UPDATE_POST',
        id,
        updates
    }
}

export var updatePost = (id, published) => {

    return (dispatch, getState) => {

        dispatch(changeStatus(`Updating post ${id}`))

        let postRef = firebasePostsRef.child(`${id}`)

        let updates = {
            published,
            publishedAt: published ? moment().unix() : null
        }

        return postRef.update(updates).then(()=>{
            dispatch(updatePostState(id,updates))
            dispatch(changeStatus("idle"))
        }, (e) => {
            console.log('error:',e)
            dispatch(changeStatus("idle"))
        })
    }
}
