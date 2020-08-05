import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import Result from './components/Result';
import Keys from './components/Keys';


class App extends Component {
  constructor(){
    super();
    this.state = {
      result:""
    }
  }

  onClick = button => {

    if(button === "="){
        this.calculation()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
           result: this.state.result + button
        })
    }
};

calculation = () => {
  let checkResult = ''
  if(this.state.result.includes('--')){
      checkResult = this.state.result.replace('--','+')
  }

  else {
      checkResult = this.state.result
  } 

  try{
    this.setState({
      result: (eval(checkResult) || "") + ""
    })
  }
  catch (e) {
    this.setState({
      result:"error"
    })
  }
};

reset = () => {
  this.setState({
    result:""
  })
};

backspace = () =>{
  this.setState({ result: this.state.result.slice(0.-1)
  })
};

render() {
    return (
      <div>
        <div className="calculator-body">
          <Title/>
          <Result result = {this.state.result}/>
          <Keys onClick = {this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;
