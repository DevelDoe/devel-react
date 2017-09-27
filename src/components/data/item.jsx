/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T04:01:27+01:00
* @Email:  me@andreeray.se
* @Filename: Movie.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-27T13:50:12+02:00
*/



var React = require('react'), {connect} = require('react-redux')

export var Item = React.createClass({
    render: function () {
        var {id,prop1,prop2} = this.props
        return <div>id: {id} Prop1: {prop1} Prop2: {prop2}</div>
    }
})
export default connect()(Item)
