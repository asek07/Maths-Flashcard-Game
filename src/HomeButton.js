import React from 'react';

export default class HomeButton extends React.Component{
constructor(props){
  super(props);
}

  render(){
    return (
      <div>
        <button id="home-btn" onClick={this.props.func} value={this.props.value}>{this.props.name}</button>
      </div>
    )
  }


}
