import React from "react";

export default class Option extends React.Component {
  render() {
    return (
      <div className="optionList">
        <li>
          {this.props.option}
          <button onClick={e => this.props.onDelete(this.props.option)}>
            Delete
          </button>
        </li>
      </div>
    );
  }
}
