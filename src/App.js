import React from "react";
import Display from "./Components/Display.js";
import Buttons from "./Components/Buttons.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      str: '',
      equal: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if(this.state.equal === "Error"){
      this.setState({
        equal: 0
      })
    }
    this.setState({
      str: this.state.str.concat(e.target.value)
    })
    
  }

  handleEqual(){
    const regex = /^(-|)[0-9]+([+-/*][0-9]+)+$/g;
    if(regex.test(this.state.str)){
      this.setState({equal:eval(this.state.str) + this.state.equal, str:''});
    } else{
      this.setState({equal: "Error", str:''});
    }
  }

  handleClear(){
    this.setState({
      equal:0,
      str:'',
    })
  }
  
  render() {
    return (
      <div className="app">
        <div className="calculator">
          <Display equal={this.state.equal} str={this.state.str}/>
          <Buttons handleClear={this.handleClear} handleEqual={this.handleEqual} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;
