/**
 * @Author: andreeray
 * @Date:   2017-09-19T17:10:55+02:00
 * @Email:  andreeray@live.com
 * @Filename: firebase.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-28T10:29:42+02:00
 */


import React     from 'react'
import {connect} from 'react-redux'
import {pushItem} from 'actions'

let Input = ({dispatch}) => {
    let prop1, prop2

    return (
        <div>

        <form
            onSubmit={e => {
                e.preventDefault()
                if (!prop1.value.trim() || !prop2.value.trim()) { return }
                dispatch(pushItem(prop1.value,prop2.value))
                prop1.value = ''
                prop2.value = ''
            }}
        >
        <div>
            <label>prop1:</label>
                <input
                    ref={input => {
                        prop1 = input
                    }}
                />
        </div>
        <div>
            <label>prop2:</label>
                <input
                    ref={input => {
                        prop2 = input
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
