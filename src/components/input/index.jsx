/**
 * @Author: andreeray
 * @Date:   2017-09-19T17:10:55+02:00
 * @Email:  andreeray@live.com
 * @Filename: firebase.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-21T09:49:15+02:00
 */


import React     from 'react'
import {connect} from 'react-redux'
import {pushItem} from 'actions'

let Input = ({dispatch}) => {
    let title, genre

    return (
        <div>

        <form
            onSubmit={e => {
                e.preventDefault()
                if (!title.value.trim() || !genre.value.trim()) { return }
                dispatch(pushItem(title.value,genre.value))
                title.value = ''
                genre.value = ''
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
            <label>Genre:</label>
                <input
                    ref={input => {
                        genre = input
                    }}
                />

        </div>

        <button type="submit">SUBMIT</button>

            </form>
        </div>
    )
}
Input = connect()(Input)

export default Input
