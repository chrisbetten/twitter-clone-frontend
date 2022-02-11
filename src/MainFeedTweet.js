import React from "react";
import CreatedAt from "./CreatedAt";

import {
  // HashRouter,
  // Route,
  Link,
  // Switch
} from "react-router-dom";

class MainFeedTweet extends React.Component {
  render() {
    let tweet = this.props.tweet;

    return (
      <div className='tweet-container'>
        <p>{tweet.message}</p>
        <div className='tweet-info'>
          <h3 className='username'>
            <Link to={`/tweets/${tweet.username}`}>
              @{tweet.username}
            </Link>
          </h3>
          <CreatedAt
            timestamp={tweet.created_at}
          />
        </div>
      </div>
    )
  }
}

export default MainFeedTweet;

