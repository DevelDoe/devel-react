/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T03:39:38+01:00
* @Email:  me@andreeray.se
* @Filename: App.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-12T19:15:15+01:00
*/



var React = require('react'), {connect} = require('react-redux'), Movie = require('Movie')

var App = React.createClass({
    render: function () {
        var {appName,array,map} = this.props

        var renderArray = () => {

            if (array.length > 0) {
                return (
                    <div id="array">
                        <h2>The Array:</h2>
                        <ul>
                            {getArrayItems()}
                        </ul>
                    </div>
                )
            }
        }

        var getArrayItems = () => {
            return array.map((movie) => {
                return (
                    <Movie key={movie.id} {...movie} />
                )
            })
        }

        var renderApi = () => {
            if (map.url){
                return (
                    <div id="api">
                        <h2>The Api</h2>
                            <p>{map.url}</p>
                    </div>
                )
            }
        }

        return (
            <div>
                <div id="appname">
                    <h2>{appName}</h2>
                </div>
                {renderArray()}
                {renderApi()}
            </div>
        )
    }
})
module.exports = connect(
    (state) => {
        return {
            appName: state.appName,
            array: state.movies,
            map: state.map
        }
    }
)(App)
