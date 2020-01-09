import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Ricon from "../../media/icon.png"
import {connect} from 'react-redux'

import Notifications from './Notifications'
import ProjectList from '../projects-app/ProjectList'


class Home extends Component {
    render() {
        console.log(this.props);
        
        const { projects } = this.props;
        return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications/>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Home);



















// class Home extends Component {

//     render() {
//         const { posts } = this.props;
//         const postList = posts.length ? (
//             posts.map(post => {
//                 return (
//                     <div className="post card" key={post.id}>
//                         <Link to={'/' + post.id}>
//                             <div className="card-content">
//                                 <img className="iimg" src={Ricon} alt="React Icon" />
//                                 <span className="card-title red-text">{post.title}</span>
//                                 <p className="black-text"> {post.body} </p>
//                             </div>
//                         </Link>
//                     </div>
//                 )
//             })
//         ) : (
//                 <div className="center">No Post</div>
//             )
//         return (
//             <div className="container home">
//                 <h4 className="center">Home Page</h4>
//                 {postList}
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         posts: state.posts
//     }
// }

// export default connect(mapStateToProps)(Home);