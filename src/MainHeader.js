import React from "react";
import {
  Link,
} from "react-router-dom";

class MainHeader extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="page-headline">
          <Link to={'/tweets'}>Twatter</Link>
        </h1>
      </header>
    )
  }
}

export default MainHeader;

