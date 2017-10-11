/**
 * @Author: andreeray
 * @Date:   2017-10-07T13:36:28+02:00
 * @Email:  andreeray@live.com
 * @Filename: index.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-11T20:25:34+02:00
 */

//  const items = this.props.items.map((item) => (
//   <ul key={item.id}>
//     <li>
//       <button onClick={() => this.displayAlert(item.email)}>
//         {item.lastName + ', ' + item.firstName}
//       </button>
//     </li>
//   </ul>
// ));



 import React     from 'react'
 import {connect} from 'react-redux'
 import {updatePost} from 'actions'

 let getPost = (id) => {
     console.log(id)
 }

export var Update = React.createClass({
     onSubmit(e) {
         e.preventDefault()
         if (!title.value.trim() || !summary.value.trim() || !body.value.trim()) { return }
         dispatch(updatePost(props.id,title.value,summary.value,body.value))
     },
     render() {
         var {posts, params} = this.props,

         getPost = () => {
             var
                 filtered = Api.filterTodos(todos, showCompleted, searchString)

             if (filtered.length === 0) return <p className="contain__message">Nothing to do</p>

             return filtered.map((item) => { return <Item key={item.id} {...item} /> })
         }

         return (
             <div>
                 <form onSubmit={this.getPost(params.id,posts)}>
                 <div></div>
                 <div>
                     <label>Title:</label>
                         <input ref={input => { title = input }} />
                 </div>
                 <div>
                     <label>Summary</label>
                     <textarea ref={input => { summary = input }}>{}</textarea>
                 </div>
                 <div>
                     <label>Body</label>
                     <textarea ref={input => { body = input }}>{}</textarea>
                 </div>

                 <button type="submit">SUBMIT</button>

                 </form>
             </div>
         )
 }
 })

 export default connect(
     (state) => {
         return state // all states
     }
 )(Update)
