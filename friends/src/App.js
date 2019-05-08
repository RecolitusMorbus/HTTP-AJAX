import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';

export default class App extends React.Component {
  state = {
    friends: [],
    add: false
  };

  componentDidCatch() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        console.log(res.data);
        this.setState({ friends: res.data });
      })
      .catch(err => console.error(err));
  };

  toggleHandler = () => {
    this.setState(prevState => ({
      add: !prevState.add
    }));
  };

  addFriend = e => {
    e.preventDefault();
    const friend = {
      id: this.state.friend.length + 2,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    axios({
      method: 'POST',
      url: `http://localhost:5000/friends`,
      data: friend
    })
      .then(res => console.log(res.data))
      .catch(err => console.error(err));

    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  render() {
    return (
      <div>
        <Friends
          friends={this.state.friends}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          toggleAdd={this.toggleHandler}
        />
        {this.state.add &&
          <Route
            path='/add-friend'
            render={props => (
              <AddFriend
                {...props}
                addFriend={this.addFriend}
              />
            )}
          />
        }
      </div>
    );
  };
};