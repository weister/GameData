import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Users from './Users';
import CreateUser from './CreateUser';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          firstName: 'tom',
          lastName: 'riddle',
          userName: 'triddle',
          games: 4
        },
        {
          firstName: 'harry',
          lastName: 'potter',
          userName: 'hpotter',
          games: 1
        }        
      ]
    }
  }

  createNewUser = user => {
    if(this.userExists(user)) {
      alert("User Exists!");
    } else {
      this.setState(currentState => ({
        users: [...currentState.users, user]
      }))
    }
  }

  userExists = currUser => {
    const userList = this.state.users.filter(user => user.userName === currUser.userName);
    return (userList.length === 0) ? false : true;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <h2>Members of the Gaming Community</h2>
        <Users 
          users={this.state.users} 
        />

        <CreateUser createNewUser={this.createNewUser}/>
      </div>
    );
  }
}

export default App;
