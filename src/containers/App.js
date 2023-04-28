import React, { Fragment, Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { kities: [], searchfield: "" };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users ")
      .then((response) => response.json())
      .then((user) => {
        this.setState({ kities: user });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { kities, searchfield } = this.state;
    const filteredKities = kities.filter((kiti) => {
      return kiti.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !kities.length ? (
      <h1 className="title">Loading Nyyaaa....</h1>
    ) : (
      <Fragment>
        <div className="tc">
          <h1 className=" title f1 animate__animated animate__jello">
            Cute Cat Buddies
          </h1>
          <Searchbox searchchange={this.onSearchChange} className="pb2" />
          <Scroll>
            <Cardlist Kities={filteredKities} />
          </Scroll>
        </div>
      </Fragment>
    );
  }
}

export default App;
