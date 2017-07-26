import React, { Component } from 'react';
import $ from 'jquery';
import '../index.css';

class StepFive extends Component{
  constructor(props) {
  		super(props)
  		this.state = {
  			ingredients: false,
        counter: 0
      }
  }

  componentDidMount() {
      var self = this;
      $.ajax({
        method: 'GET',
        url: 'http://localhost:3002/api/ingredients',
      })
      .done(function(ingredients){
            self.setState({ingredients: ingredients})
      })
    }

    handleChange(e){
      this.setState({counter: e.target.value})
    }


    listAll(){
      return (
        <div>
          <div className="vertical-menu">
          {this.state.ingredients.map(function(ingredients, i){
            console.log(i)
            return <div>
              <span><a key={i} href="#" onClick={() => this.handleChange(this, i)}>{ingredients.name}</a> <a href='#'>+</a></span>
            </div>
          })}
        </div>
      </div>)
    }

render() {
  console.log(this.state, 'in render')
  if(this.state.ingredients === false){
    return(<div><span>loading</span></div>)
  } else {
      return(
        <div className='stepFiveBox'>
          {this.listAll()}
          <ul>
            <li>Hardness={this.state.ingredients[this.state.counter].hardness}</li>
            <li>Cleansing={this.state.ingredients[this.state.counter].cleansing}</li>
            <li>Condidtion={this.state.ingredients[this.state.counter].condition1}</li>
            <li>Bubbly={this.state.ingredients[this.state.counter].bubbly}</li>
            <li>Creamy={this.state.ingredients[this.state.counter].creamy}</li>
            <li>Iodine={this.state.ingredients[this.state.counter].iodine}</li>
            <li>INS={this.state.ingredients[this.state.counter].ins}</li>
            <li>Lauric={this.state.ingredients[this.state.counter].lauric}</li>
            <li>Myristic={this.state.ingredients[this.state.counter].myristic}</li>
            <li>Palmitic={this.state.ingredients[this.state.counter].palmitic}</li>
            <li>Stearic={this.state.ingredients[this.state.counter].stearic}</li>
            <li>Ricinoleic={this.state.ingredients[this.state.counter].rincinoleic}</li>
            <li>Oleic={this.state.ingredients[this.state.counter].oleic}</li>
            <li>Linoleic={this.state.ingredients[this.state.counter].linoleic}</li>
            <li>Linolenic={this.state.ingredients[this.state.counter].linolenic}</li>
            <li>NaOH SAP={this.state.ingredients[this.state.counter].sap}</li>
          </ul>
        </div>
      )
    }
  console.log(this.listAll(),)}
}

export default StepFive
