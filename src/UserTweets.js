import React from "react";
import UserProfile from "./UserProfile";
// import {
//   HashRouter,
//   Route,
//   Link,
//   Switch
// } from "react-router-dom";
import UserTweet from "./UserTweet";
import ViewHeader from "./ViewHeader";

class UserTweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      userTweets: [],
      currentUser: this.props.match.params.user,
    }
  }

  async componentDidMount() {
    let tweets = await fetch('http://localhost:3000/tweets')
      .then(data => data.json());
    
    let userTweets = tweets.filter(tweet => tweet.username === this.state.currentUser);

    this.setState({
      tweets,
      userTweets,
    })
  }

  render() {

    return (
      <div className='usertweets-view'>
        <ViewHeader
          currentUser={this.state.currentUser}
        />

        <div className='usertweets-main-content'>
          <UserProfile
            currentUser={this.state.currentUser}
          />
          {/* <div className='user-profile-container'>
            <img alt='User profile' className={['user-profile-img', 'rounded'].join(' ')} src='https://upload.wikimedia.org/wikipedia/commons/4/49/Jonathan_G_Meath_portrays_Santa_Claus.jpg' />
            <div className='user-info-container'>
              <h2>@santaclaus</h2>
              <p>I'm a jolly old fellow, ho ho ho!</p>
            </div>
          </div> */}
          <div className='all-tweets-by-user-container'>
            {this.state.userTweets && this.state.userTweets
            .map((tweet) => {
              return <UserTweet
                key={tweet.id}
                tweet={tweet}
              />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default UserTweets;