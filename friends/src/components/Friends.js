import React from 'react';
import { Link } from 'react-router-dom';
import Friend from './Friend';

export default class Friends extends React.Component {
  state = {
    action: false
  }
  
  toggleHandler = () => {
    this.setState(prevState => ({
      action: !prevState.action
    }))
  }
  
  render() {
    return (
      <div>
        <h1>My Friendly Friends List</h1>
        {this.props.friends.map((friend, i) => (
          <div key={i}>
            <Friend friend={friend} />
          </div>
        ))}
        {!this.props.add &&
          <Link to='/add-friend'>
            <button onClick={this.props.addToggle}>Add New Friend?</button>
          </Link>
        }
      </div>
    );
  };
};