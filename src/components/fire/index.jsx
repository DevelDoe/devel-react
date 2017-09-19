/**
 * @Author: andreeray
 * @Date:   2017-09-19T17:10:55+02:00
 * @Email:  andreeray@live.com
 * @Filename: firebase.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-19T17:34:45+02:00
 */


import React, {Component} from 'react'

class Fire extends Component {
    render() {
        return (
            <div>
                <div> <h1>Firebase</h1> </div>
                <div>
                    <form>
                        <input type="text" name="username" placeholder="Your name" />
                        <input type="text" name="item" placeholder="Your item" />
                        <button>Submit</button>
                    </form>
                </div>
                <div>
                    <ul><li>test</li></ul>
                </div>
            </div>
        )
    }
}

export default Fire
