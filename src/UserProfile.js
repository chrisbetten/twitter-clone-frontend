import React from "react";
import { API_URL } from "./config.js";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      userInfo: [],
    }
  }

  // https://i.ibb.co/YPW9FVb/800px-Clown-costume.jpg

  async componentDidMount() {
    try {
      let currentUser = this.state.currentUser;

      const userInfo = await fetch(API_URL + `/tweets/userinfo/${currentUser}`)
      .then(data => data.json());
      
      console.log('USER INFO', userInfo);
  
      this.setState({
        userInfo: userInfo,
      })
    } catch (error) {
      console.log('PROBLEM WITH FETCHING USER INFO');
    }
  }

  render() {
    return (
      <div className='user-profile-container'>
        <img 
          alt={this.state.currentUser}
          className={['user-profile-img', 'rounded'].join(' ')}
          src={this.state.userInfo.picture_url}
        />
        <div className='user-info-container'>
          <h2>@{this.state.currentUser}</h2>
          <p className="bio-text">{this.state.userInfo.bio}</p>
        </div>
      </div>
    )
  }
}

export default UserProfile;


