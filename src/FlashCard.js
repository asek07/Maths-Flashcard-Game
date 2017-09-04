import React from 'react';


export default class FlashCard extends React.Component{

  constructor(props){
    super(props);

    switch(this.props.operator){
      case "addition":
        this.state = {
          min: 1,
          max: 30,
          num1: 0,
          num2: 0,
          total: 0,
          input: '',
          userResult: 0,
          answeredCount: 1,
          finished: false,
          operator: "+"
        }
        break;
      case "subtraction":
        this.state = {
          min: 1,
          max: 30,
          num1: 0,
          num2: 0,
          total: 0,
          input: '',
          userResult: 0,
          answeredCount: 1,
          finished: false,
          operator: "-"
        }
        break;
      case "multiplication":
        this.state = {
          min: 1,
          max: 12,
          num1: 0,
          num2: 0,
          total: 0,
          input: '',
          userResult: 0,
          answeredCount: 1,
          finished: false,
          operator: "×"
        }
        break;
      case "division":
        this.state = {
          min: 2,
          max: 50,
          num1: 0,
          num2: 0,
          total: 0,
          input: '',
          userResult: 0,
          answeredCount: 1,
          finished: false,
          operator: "÷"
        }
        break;

    }


    // this.handleClick = this.handleClick.bind(this);
    this.calculate = this.calculate.bind(this);
    var result, result2, totalRandoms, held;
  }

  componentDidMount() {
    this.reloadTile();
  }

  reloadTile(){

    switch(this.props.operator){
      case "addition":
        this.result = Math.floor(Math.random() * (this.state.max + this.state.min + 1) + this.state.min);
        this.result2 = Math.floor(Math.random() * (this.state.min + 15) + this.state.min);
        this.totalRandoms = this.result + this.result2;
        break;
      case "subtraction":
        this.result = Math.floor(Math.random() * (this.state.max - this.state.min + 1) + this.state.min);
        this.result2 = Math.floor(Math.random() * (this.state.max - this.state.min + 1) + this.state.min);

          if(this.result2 > this.result){
            this.held = this.result2
            this.result2 = this.result;
            this.result = this.held;
          }

        this.totalRandoms = this.result - this.result2;
        break;
      case "multiplication":

        this.result = Math.floor(Math.random() * (this.state.max * this.state.min) + this.state.min);
        this.result2 = Math.floor(Math.random() * (this.state.max * this.state.min) + this.state.min);
        this.totalRandoms = this.result * this.result2;
        break;
      case "division":

          this.result = Math.floor(Math.random() * (this.state.max / this.state.min) + this.state.min);
          this.result2 = Math.floor(Math.random() * (this.state.max / this.state.min) + this.state.min);
          this.totalRandoms = this.result / this.result2;

        while(this.result % this.result2 != 0 || this.result == this.result2){
          this.result = Math.floor(Math.random() * (this.state.max / this.state.min) + this.state.min);
          this.result2 = Math.floor(Math.random() * (this.state.max / this.state.min) + this.state.min);
          this.totalRandoms = this.result / this.result2;
        }
        break;

    }

    this.setState({
      num1: this.result,
      num2: this.result2,
      total: this.totalRandoms
    })
  }

  calculate(e){
    if(e.key === 'Enter'){
      if(this.state.answeredCount == 10){
        this.setState({
          finished: true
        })
      }
      else {
      if(parseInt(e.target.value) == this.totalRandoms){
        console.log("Success!!");
        this.setState({
          userResult: this.state.userResult += 1,
          answeredCount: this.state.answeredCount += 1
        })
        this.reloadTile();
      }else{
        this.reloadTile();
        this.setState({
          answeredCount: this.state.answeredCount += 1
        })
      }
      e.target.value = '';
    }
  }
}

  render(){

    let initialMathState;
    let gameComplete;

    if(this.state.finished === false){
      initialMathState =
      <div className="card">
        <h1 id="number1">{this.state.num1}</h1>
        <div id="flash-container">
          <div>
            <h1 id="operator">{this.state.operator}</h1>
          </div>
          <div id="number2-container">
            <h1 id="number2">{this.state.num2}</h1>
          </div>
        </div>
        <hr />
        <input type="text" onKeyPress={this.calculate} />
        <hr />
        <br />
      </div>

      gameComplete = null;

    } else {
      gameComplete =
      <div className="card cardComplete">
        <h2 id="complete-head">Well done!</h2>
        <hr />
        <h2 id="complete-head">You answered</h2>
        <h1 id="user-result">{this.state.userResult}/10</h1>
      </div>

      initialMathState = null;

    }

    return (
      <div>
        {initialMathState}
        {gameComplete}
      </div>
    );
  }

}
