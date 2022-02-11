import React from "react";
import MainFeedTweet from "./MainFeedTweet";
import ViewHeader from "./ViewHeader";
import jwtDecode from "jwt-decode";

// import {
//   HashRouter,
//   Route,
//   Link,
//   Switch
// } from "react-router-dom";

class MainView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    }
  }

  async componentDidMount() {
    const token = localStorage.getItem('twitter_clone_token');
    const { history } = this.props;

    if (!token) {
      history.replace('/login');
    } else {
      console.log('You have a token');
    };

    const payload = jwtDecode(token);

    let tweets = await fetch('http://localhost:3000/tweets')
      .then(data => data.json());
    console.log(tweets);

    this.setState({
      tweets,
      payload,
    })
  }

  render() {
    return (
      <div className='main-view'>

        <ViewHeader/>

        <div className='all-tweets-container'>
          {this.state.tweets && this.state.tweets.map((tweet) => {
            return <MainFeedTweet
              key={tweet.id}
              tweet={tweet}
            />
          })}
        </div>
      </div>
    )
  }
}

export default MainView;