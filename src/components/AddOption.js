import React from "react";

export default class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form className="addOption" onSubmit={this.props.onFormSubmit}>
          <input type="text" name="todo" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
