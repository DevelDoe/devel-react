/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T04:01:27+01:00
* @Email:  me@andreeray.se
* @Filename: Movie.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-19T21:34:50+02:00
*/



var React = require('react'), {connect} = require('react-redux')

export var Item = React.createClass({
    render: function () {
        var {title,genre} = this.props
        return <li>Title: {title} Genre: {genre}</li>
    }
})
export default connect()(Item)
