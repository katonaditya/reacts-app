import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Todo from './components/todo-app/Todo';
// import Post from './components/home/Post';
import ProjectDetails from './components/projects-app/ProjectDetails' 
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects-app/CreateProject';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar/>

          <Switch>
          <Route exact path='/' component= {Home} />
          <Route path='/project/:id' component= {ProjectDetails} />
          <Route path='/signin' component= {Signin} />
          <Route path='/signup' component= {Signup} />
          <Route path='/create' component= {CreateProject} />

          <Route path='/about' component= {About} />
          <Route path='/contact' component= {Contact} />
          <Route path='/todo' component= {Todo} />

          {/* <Route path="/:post_id" component= {Post} /> */}
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;