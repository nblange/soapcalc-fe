import React, { Component } from 'react';
import StepSix from './stepSix';
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

    handleChange = (e) => {
       this.setState({counter: e});
    }


    listAll(){
      var self = this;
      return (
        <div>
          <div className="vertical-menu">
          {self.state.ingredients.map(function(ingredients, i){
            return <div>
              <a key={i} href="#" onClick={() => self.handleChange(i)}>{ingredients.name}</a>
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
        <div className='stepFiveAndSixBox'>
          <div className='stepFive'>
            <span className='stepFiveList'>{this.listAll()}</span>
            <ul className='stepFiveValues'>
              <li>Hardness=<span className="indentStyleHardness">{this.state.ingredients[this.state.counter].hardness}</span></li>
              <li>Cleansing=<span className="indentStyleCleansing">{this.state.ingredients[this.state.counter].cleansing}</span></li>
              <li>Condidtion=<span className="indentStyleCondition">{this.state.ingredients[this.state.counter].condition1}</span></li>
              <li>Bubbly=<span className="indentStyleBubbly">{this.state.ingredients[this.state.counter].bubbly}</span></li>
              <li>Creamy=<span className="indentStyleCreamy">{this.state.ingredients[this.state.counter].creamy}</span></li>
              <li>Iodine=<span className="indentStyleIodine">{this.state.ingredients[this.state.counter].iodine}</span></li>
              <li>INS=<span className="indentStyleIns">{this.state.ingredients[this.state.counter].ins}</span></li>
              <li>Lauric=<span className="indentStyleLauric">{this.state.ingredients[this.state.counter].lauric}</span></li>
              <li>Myristic=<span className="indentStyleMyristic">{this.state.ingredients[this.state.counter].myristic}</span></li>
              <li>Palmitic=<span className="indentStylePalmitic">{this.state.ingredients[this.state.counter].palmitic}</span></li>
              <li>Stearic=<span className="indentStyleStearic">{this.state.ingredients[this.state.counter].stearic}</span></li>
              <li>Ricinoleic=<span className="indentStyleRincinoleic">{this.state.ingredients[this.state.counter].rincinoleic}</span></li>
              <li>Oleic=<span className="indentStyleOleic">{this.state.ingredients[this.state.counter].oleic}</span></li>
              <li>Linoleic=<span className="indentStyleLinoleic">{this.state.ingredients[this.state.counter].linoleic}</span></li>
              <li>Linolenic=<span className="indentStyleLinolenic">{this.state.ingredients[this.state.counter].linolenic}</span></li>
              <li>NaOH SAP=<span className="indentStyleSap">{this.state.ingredients[this.state.counter].sap}</span></li>
            </ul>
          </div>
          <StepSix/>
        </div>
      )
    }
  }
}

export default StepFive
