import React from 'react';
import addition from './images/addition.png'
import subtraction from './images/subtraction.png';
import multiplication from './images/multiplication.png';
import division from './images/division.png';
import Button from './Button.js';

export default class MathTypeTile extends React.Component{

  constructor(props){
    super(props);

    var image;
    var flashType;
    this.state = ({
      showComponent: true
    })

    switch(this.props.imgType){
      case "addition":
        this.image = addition;
        break;
      case "subtraction":
        this.image = subtraction;
        break;
      case "multiplication":
        this.image = multiplication;
        break;
      case "division":
        this.image = division;
        break;
    }
  }

  render(){
    return (
      <div>
        <h1 id="math-type-header">{this.props.mathType}</h1>
        <img id="math-image" src={this.image}/>
      </div>
    );
  }

}
