/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T04:01:27+01:00
* @Email:  me@andreeray.se
* @Filename: Movie.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-28T10:08:23+02:00
*/



import React     from 'react'
import {connect} from 'react-redux'
import {deleteItem} from 'actions'


let Item = ({dispatch,id,prop1,prop2}) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>Prop1: {prop1}</div>
            <div>Prop2: {prop2} </div>
            <button
                onClick={e => {
                    e.preventDefault()
                    dispatch(deleteItem(id))
                }}>
                DELETE
            </button>
        </div>

        )
}

Item = connect()(Item)

export default Item
