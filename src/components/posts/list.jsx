/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-19T23:55:45+02:00
 * @Email:  me@andreeray.se
 * @Filename: list.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-03T21:31:33+02:00
 */



import React from 'react'
import {connect} from 'react-redux'

import Item from 'posts/item'

export var List = React.createClass({
    render() {
        var
            {posts} = this.props,

            renderItems = () => {
                if (posts.length === 0) return <p className="contain__message">No data</p>
                return posts.map((post, index) => { return <Item key={index} {...post} /> })
            }

        return <div>{renderItems()}</div>
    }
})

export default connect(
    (state) => {
        return {posts: state.posts}
    }
)(List)
