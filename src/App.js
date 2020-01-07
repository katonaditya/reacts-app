import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Todo from './components/todo-app/Todo';
import Post from './components/Post';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar/>

          <Switch>
          <Route exact path='/' component= {Home} />
          <Route path='/about' component= {About} />
          <Route path='/contact' component= {Contact} />
          <Route path='/todo' component= {Todo} />

          <Route path="/:post_id" component= {Post} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;