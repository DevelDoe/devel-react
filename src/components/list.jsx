/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-19T23:55:45+02:00
 * @Email:  me@andreeray.se
 * @Filename: list.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T01:21:54+02:00
 */



import React from 'react'
import {connect} from 'react-redux'

import Item from 'item'

export var List = React.createClass({
    render() {
        var
            {items} = this.props,

            renderItems = () => {
                if (items.length === 0) return <p className="contain__message">Nothing to do</p>
                return items.map((item, index) => { return <Item key={index} {...item} /> })
            }

        return <div>{renderItems()}</div>
    }
})

export default connect(
    (state) => {
        return {items: state.items}
    }
)(List)
