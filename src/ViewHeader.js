import React from "react";

class ViewHeader extends React.Component {
  render() {
    let headline = 'All tweets';

    if (this.props.currentUser) {
      headline += ` by @${this.props.currentUser}`
    }

    return (
      <div className='view-header'>
        <h2 className='view-headline'>{headline}</h2>
      </div>
    )
  }
}

export default ViewHeader;





