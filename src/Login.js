import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }

  handleInputChange(field, event) {
    this.setState({
      [field]: event.target.value,
    });
  }

  async handleLoginAttempt() {
    const { history } = this.props;

    try {
      const rawResponse = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: this.state.username, password: this.state.password})
      }).then(data => data.json());

      const token = await rawResponse.token;
      console.log('TOKEN', token);

      if (!token) {
        throw new Error('Unsuccessful login');
      }
  
      localStorage.setItem('twitter_clone_token', token);
  
      history.replace('/tweets');
    } catch (error) {
      console.log(error);
    }

  }

  render() {
    return (
      <div className="login-view-container">
        <div className="login-container">
          <h1>Login</h1>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.handleInputChange.bind(this, 'username')} />
          </label>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handleInputChange.bind(this, 'password')} />
          </label>
          <button onClick={this.handleLoginAttempt.bind(this, 'password')}>Login</button>
        </div>
      </div>
    )
  }
}

export default Login;