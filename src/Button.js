import React from 'react';

export default class Button extends React.Component{
constructor(props){
  super(props);
}

  render(){
    return (
      <div>
        <button id="math-type-btn" onClick={this.props.func} value={this.props.value}>{this.props.name}</button>
      </div>
    )
  }


}
