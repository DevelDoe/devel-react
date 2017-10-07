/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T04:01:27+01:00
* @Email:  me@andreeray.se
* @Filename: Movie.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-07T15:02:07+02:00
*/



import React        from 'react'
import moment       from 'moment'
import {connect}    from 'react-redux'
import {hashHistory} from 'react-router'
import {deletePost,updatePost} from 'actions'

let renderDate = (published,createdAt,publishedAt) => {
    let timestamp = published ? publishedAt : createdAt
    return moment.unix(timestamp).format('MMMM Do YYYY HH:mm')
}

let renderPublished = (published) => {
    return published = published ? "published" : "private"
}

let publichedChecked = (published) => {
    return published = published ? "checked" : ""
}

let Posts = (props) => {
    return (
        <div>
            <div>ID: {props.id}</div>
            <div>timestamp: {renderDate(props.published,props.createdAt,props.publishedAt)}</div>
            <div>published:  {renderPublished(props.published)}</div>
            <div>title: {props.title}</div>
            <div>summary: {props.summary}</div>
            <div>body: {props.body}</div>
            <button
                onClick={e => {
                    e.preventDefault()
                    props.dispatch(deletePost(props.id))
                }}>
                DELETE
            </button>
            <button
                onClick={e => {
                    hashHistory.push(`/updatePost/${props.id}`)
                }}>
                UPDATE
            </button>
            Published <input
                type="checkbox"
                defaultChecked={publichedChecked(props.published)}
                onChange={e => {
                    props.dispatch(updatePost(props.id,!props.published))
                }}
            />

        </div>

        )
}

Posts = connect()(Posts)

export default Posts
