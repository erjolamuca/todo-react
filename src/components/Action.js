import React from "react";

export default class Action extends React.Component {
  render() {
    return (
      <div>
        <button className="deleteAllButton" onClick={this.props.onDeleteList}>
          Delete All
        </button>
      </div>
    );
  }
}
