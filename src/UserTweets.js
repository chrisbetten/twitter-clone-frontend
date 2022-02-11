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
import { API_URL } from "./config.js";

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
    let tweets = await fetch(API_URL + '/tweets')
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