/**
 * @Author: andreeray
 * @Date:   2017-09-19T17:10:55+02:00
 * @Email:  andreeray@live.com
 * @Filename: firebase.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-07T13:47:05+02:00
 */


import React     from 'react'
import {connect} from 'react-redux'
import {pushPost} from 'actions'

let Input = ({dispatch}) => {
    let title, summary, body
    return (
        <div>

        <form
            onSubmit={e => {
                e.preventDefault()
                if (!title.value.trim() || !summary.value.trim() || !body.value.trim()) { return }
                dispatch(pushPost(title.value,summary.value,body.value))
                title.value = ''
                summary.value = ''
                body.value = ''
            }}
        >
        <div>
            <label>Title:</label>
                <input
                    ref={input => {
                        title = input
                    }}
                />
        </div>
        <div>
            <label>Summary</label>
            <textarea ref={input => { summary = input }}></textarea>
        </div>
        <div>
            <label>Body</label>
            <textarea ref={input => { body = input }}></textarea>
        </div>

        <button type="submit">SUBMIT</button>

            </form>
        </div>
    )
}
Input = connect()(Input)

export default Input
