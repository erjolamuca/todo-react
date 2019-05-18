import React, { Component } from "react";
import AddOption from "./components/AddOption";
import Options from "./components/Options";
import Header from "./components/Header";
import RandomButton from "./components/RandomButton";
import Action from "./components/Action";
import ToDoModal from "./components/ToDoModal";
import { Grid, Row, Col } from "react-bootstrap";
import "./App.css";

class App extends Component {
  state = {
    options: [],
    filteredOptions: [],
    searchText: "",
    open: false,
    selectedOption: undefined
  };

  onDelete = item => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => item !== option)
    }));
  };

  onOpenModal = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      open: true,
      selectedOption: option
    }));
  };

  onCloseModal = () => {
    this.setState(() => ({
      open: false
    }));
  };

  onFormSubmit = e => {
    e.preventDefault();
    const option = e.target.elements.todo.value;
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option alredy exists";
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };

  onDeleteList = () => {
    this.setState(() => ({ options: [] }));
  };

  filterList = e => {
    const option = e.target.value;
    this.setState({ searchText: option });
    if (option != null) {
      this.setState(prevState => ({
        filteredOptions: prevState.options.filter(
          item => item.toLowerCase().search(option.toLowerCase()) !== -1
        )
      }));
    }
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={6} mdOffset={3}>
              <Row className="app-row">
                <Header />
                <RandomButton onOpenModal={this.onOpenModal} />
                <ToDoModal
                  open={this.state.open}
                  onOpenModal={this.onOpenModal}
                  onCloseModal={this.onCloseModal}
                  selectedOption={this.state.selectedOption}
                />
                <AddOption onFormSubmit={this.onFormSubmit} />
                <Options
                  options={
                    !this.state.searchText.length
                      ? this.state.options
                      : this.state.filteredOptions
                  }
                  onDelete={this.onDelete}
                  filterList={this.filterList}
                />
                <Action onDeleteList={this.onDeleteList} />
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
