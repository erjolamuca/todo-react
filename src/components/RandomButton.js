import React from "react";

export default class RandomButton extends React.Component {
  render() {
    return (
      <div>
        <button className="toDoButton" onClick={this.props.onOpenModal}>
          Tell me what to do!
        </button>
      </div>
    );
  }
}
