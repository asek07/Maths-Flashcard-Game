import React, { Component } from 'react';
import './App.css';
import FlashCard from './FlashCard.js';
import MathTypeTile from './MathTypeTile.js';
import Button from './Button.js';
import HomeButton from './HomeButton.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = ({
      gameChosen: false,
      add: 'Addition',
      sub: 'Subtraction',
      mult: 'Multiplication',
      divide: 'Division',
      header: 'MathFlash Practice!'
    })
    this.changeState = this.changeState.bind(this);
    this.handleInitialState = this.handleInitialState.bind(this);

    var gameTypeChosen;
  }

  changeState(e){
    if(this.state.gameChosen == true){
      this.setState({
        gameChosen: false
      })
    }
    else {
      this.setState({
        gameChosen: true
      })
      this.gameTypeChosen = e.target.value;
    }
    this.gameTypeChosen = e.target.value;
    this.setState({
      header: e.target.value
    })
    console.log("Game chosen value is ", this.gameTypeChosen);
  }

  handleInitialState(){
  this.setState({
    gameChosen: false,
    header: "MathFlash Practice!"
  })
  }

  render() {
    let flashcard;
    let initialState;

    if(this.state.gameChosen == false){
      initialState =
      <div>
        <div id="math-type-tile">
          <MathTypeTile mathType="Addition" imgType="addition" />
          <Button func={this.changeState} name="Go!" value={this.state.add}/>
        </div>
        <div id="math-type-tile">
          <MathTypeTile mathType="Subtraction" imgType="subtraction" />
          <Button func={this.changeState} name="Go!" value={this.state.sub}/>
        </div>
        <div id="math-type-tile">
          <MathTypeTile mathType="Multiplication" imgType="multiplication" />
          <Button func={this.changeState} name="Go!" value={this.state.mult}/>
        </div>
        <div id="math-type-tile">
          <MathTypeTile mathType="Division" imgType="division" />
          <Button func={this.changeState} name="Go!" value={this.state.divide}/>
        </div>
      </div>
      }
      else {

        switch(this.gameTypeChosen){
          case 'Addition':
            flashcard =
            <div>
              <HomeButton func={this.handleInitialState} name="back" value={this.state.header}/>
              <FlashCard operator="addition"/>
            </div>
            break;
          case 'Subtraction':
            flashcard =
            <div>
              <HomeButton func={this.handleInitialState} name="back" value={this.state.header}/>
              <FlashCard operator="subtraction"/>
            </div>
            break;
          case 'Multiplication':
            flashcard =
            <div>
              <HomeButton func={this.handleInitialState} name="back" value={this.state.header}/>
              <FlashCard operator="multiplication"/>
            </div>
            break;
          case 'Division':
            flashcard =
            <div>
              <HomeButton func={this.handleInitialState} name="back" value={this.state.header}/>
              <FlashCard operator="division"/>
            </div>
            break;
        }

        initialState = null;

      }
          return (
          <div className="App">
            <div>
              <h1 id="math-Header">{this.state.header}</h1>
            </div>
            <div id="tileArea">
              {initialState}
              {flashcard}
            </div>
          </div>
    );
  }
}

export default App;
