import React from "react";

class CreatedAt extends React.Component {
  render() {
    return(
      <p>{this.props.timestamp.slice(0, 10).split('-').reverse().join('/')}</p> 
    )
  }
}

export default CreatedAt;