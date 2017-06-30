import React, { Component } from 'react';
import $ from 'jquery';
import DisplayIngredient from '../redux/reducer'
import {displayIngredientAction} from '../redux/action'

class StepFive extends Component{
  constructor(props) {
  		super(props)
  		this.state = {
  			ingredients: false

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
  // renderIngredientsList(){
  //   for(var i = 0; i < this.state.ingredients.length; i++){
  //     return(
  //       <IngredientsTile{...this.props} ingredient={ingredient} key= {i}/>
  //     )
  //   }
  // }

render() {
  console.log(this.state.ingredients, 'in render')
  if(this.state.ingredients === false){
    return(<div><span>loading</span></div>)
  } else {
      return(
      <div>

        <div className='stepFiveBox'>
          <h1>{this.state.ingredients[0].name}</h1>
          <ul>
            <li id ='hardness'>Hardness={this.state.ingredients[0].hardness}</li>
            <li>Cleansing={this.state.ingredients[0].cleansing}</li>
            <li>Condidtion={this.state.ingredients[0].condition1}</li>
            <li>Bubbly={this.state.ingredients[0].bubbly}</li>
            <li>Creamy={this.state.ingredients[0].creamy}</li>
            <li>Iodine={this.state.ingredients[0].iodine}</li>
            <li>INS={this.state.ingredients[0].ins}</li>
            <li>Lauric={this.state.ingredients[0].lauric}</li>
            <li>Myristic={this.state.ingredients[0].myristic}</li>
            <li>Palmitic={this.state.ingredients[0].palmitic}</li>
            <li>Stearic={this.state.ingredients[0].stearic}</li>
            <li>Ricinoleic={this.state.ingredients[0].rincinoleic}</li>
            <li>Oleic={this.state.ingredients[0].oleic}</li>
            <li>Linoleic={this.state.ingredients[0].linoleic}</li>
            <li>Linolenic={this.state.ingredients[0].linoleic}</li>
            <li>NaOH SAP={this.state.ingredients[0].sap}</li>
          </ul>
        </div>
      </div>
      )
    }
  }
}

export default DisplayIngredient(StepFive)
