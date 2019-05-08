import React from 'react';

export default class AddFriend extends React.Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    if(this.state.name && this.state.age && this.state.email) {
      this.props.addFriend(this.state.name, this.state.age, this.state.email);
    };
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
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
          <button type="submit">Friends Are <em>Forever</em>. Remember That.</button>
        </form>
      </div>
    );
  };
};