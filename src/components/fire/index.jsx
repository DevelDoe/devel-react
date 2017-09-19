/**
 * @Author: andreeray
 * @Date:   2017-09-19T17:10:55+02:00
 * @Email:  andreeray@live.com
 * @Filename: firebase.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-19T18:10:22+02:00
 */


import React, {Component} from 'react'

class Fire extends Component {
    render() {
        return (
            <div>
                <div>
                    <form>
                        <div>
                            <label for="name">name</label>
                            <input type="text" name="name" id="name" placeholder="insert your name" /><br/>
                        </div>
                        <div>
                        <label for="item">item</label>
                            <input type="text" name="item" id="item" placeholder="insert an item" /><br/>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
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
