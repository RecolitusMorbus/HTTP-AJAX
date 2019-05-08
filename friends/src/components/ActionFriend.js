import React from 'react';

export default class ActionFriend extends React.Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    let name = this.state.name ? this.state.name : this.props.friend.name;
    let age = this.state.age ? this.state.age : this.props.friend.age;
    let email = this.state.email ? this.state.email : this.props.friend.email;
    let changedFriend = {
      id: this.props.friend.id,
      name: name,
      age: age,
      email: email
    };

    this.props.changeFriend(changedFriend);
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  render() {
    return (
      <div>
        <form onChange={this.submitHandler} id={this.props.friend.id}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.changeHandler}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.changeHandler}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.changeHandler}
            required
          />
          {" "}
          <button onClick={() => {
            window.alert('You\'ve manipulated them into the Perfect Friend!');
          }}>
            Change Your Friend!
          </button>
        </form>
        <br/>
        <button onClick={() => this.props.killFriend(this.props.friend.id)}>
          Make Them Go Away
        </button>
      </div>
    );
  }
};