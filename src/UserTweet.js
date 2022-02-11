import React from "react";
import CreatedAt from "./CreatedAt";

class UserTweet extends React.Component {
  render() {
    let tweet = this.props.tweet;

    return (
      <div className='tweet-container'>
        <p>{tweet.message}</p>
        <div className='tweet-info'>
          <h3 className='username'>
            @{tweet.username}
          </h3>
          <CreatedAt
            timestamp={tweet.created_at}
          />
        </div>
      </div>
    )
  }
}

export default UserTweet;

