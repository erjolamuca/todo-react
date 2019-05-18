import React from "react";
import Modal from "react-responsive-modal";

export default class ToDoModal extends React.Component {
  render() {
    return (
      <div>
        <Modal
          className="modal"
          open={this.props.open}
          onClose={this.props.onCloseModal}
          center
        >
          <h2 className="modalDescription">{this.props.selectedOption}</h2>
        </Modal>
      </div>
    );
  }
}
