/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T03:39:38+01:00
* @Email:  me@andreeray.se
* @Filename: App.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-12T19:02:26+01:00
*/



var React = require('react'), {connect} = require('react-redux'), Movie = require('Movie')

var App = React.createClass({
    render: function () {
        var {appName,movies,map} = this.props
        var renderMovies = () => {
            return movies.map((movie) => {
                return (
                    <Movie key={movie.id} {...movie} />
                )
            })
        }
        return (<div>
            <h1>{appName}</h1>
            <span>Application movie array entries: </span>
            <ul>
                {renderMovies()}
            </ul>
            <span>Application api demo: </span>
            <ul>
                <li>{map.url}</li>
            </ul>
        </div>)
    }
})
module.exports = connect(
    (state) => {
        return {
            appName: state.appName,
            movies: state.movies,
            map: state.map
        }
    }
)(App)
