/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-19T23:55:45+02:00
 * @Email:  me@andreeray.se
 * @Filename: list.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-28T10:56:33+02:00
 */



import React from 'react'
import {connect} from 'react-redux'

import Item from 'output/item'

export var List = React.createClass({
    render() {
        var
            {items} = this.props,

            renderItems = () => {
                if (items.length === 0) return <p className="contain__message">No data</p>
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
