import React from "react";
import Option from "./Option";

export default class Options extends React.Component {
  render() {
    return (
      <div>
        <form className="search">
          <input
            type="text"
            name="searchForm"
            placeholder="Search"
            onChange={this.props.filterList}
          />
        </form>
        {this.props.options.map((option, index) => (
          <Option key={index} option={option} onDelete={this.props.onDelete} />
        ))}
      </div>
    );
  }
}
