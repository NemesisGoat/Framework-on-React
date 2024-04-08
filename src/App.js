import React from "react";
import Header from "./components/Header/Header";
import Graph3D from "./components/Graph3D/Graph3D"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Graph3D'
    };
  };

  setPageName(name) {
    this.setState({pageName: name});
  }

  render() {
    return (<div className="app">
      <Header setPageName = {name => this.setPageName(name)}/>
      {this.state.pageName === 'Graph3D'?<Graph3D/> : <></>}
      </div>);
  }
}

export default App;
