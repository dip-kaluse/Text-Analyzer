import React, { Component } from 'react';

class Black extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        num1:0,
        num2:0, 
        sum:0
      }
    }
    
    startCard(){
        let num11= Math.floor((Math.random() * 10) + 1)
        let num12= Math.floor((Math.random() * 10) + 1)
        this.setState({
            num1:num11,
            num2:num12,
            sum:num11+num12
        });
    }
    
  
    newCard(){
        let num12= Math.floor((Math.random() * 10) + 1)
        this.setState({
         num1:num12,
         sum:this.state.sum+num12
        })
    }
   
    render() {
    return <div>
        <button onClick={()=>this.newCard()}>newCard</button>
        <button onClick={()=>this.startCard()}>startGame</button>
        <h1>{this.state.sum}</h1>
        </div>;  }
}
export  default Black;
