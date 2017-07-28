import React, { Component } from 'react';
import $ from 'jquery';
import '../index.css';

class StepFive extends Component{

  constructor(props) {
  		super(props)
  		this.state = {
  			ingredients: false,
        oilNameGrabbedOne: "",
        oilNameGrabbedTwo: "",
        oilNameGrabbedThree: "",
        oilNameGrabbedFour: "",
        oilNameGrabbedFive: "",
        oilNameGrabbedSix: "",
        oilNameGrabbedSeven: "",
        oilNameGrabbedEight: "",
        oilNameGrabbedNine: "",
        oilNameGrabbedTen: "",
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
    addOilOne = (e) => {
      if(this.state.oilNameGrabbedOne === ""){
      this.setState({oilNameGrabbedOne: this.state.ingredients[e].name})
    } else if(this.state.oilNameGrabbedTwo === ""){
      this.setState({oilNameGrabbedTwo: this.state.ingredients[e].name})
    } else if(this.state.oilNameGrabbedThree === ""){
      this.setState({oilNameGrabbedThree: this.state.ingredients[e].name})
    } else if(this.state.oilNameGrabbedFour === ""){
      this.setState({oilNameGrabbedFour: this.state.ingredients[e].name})
    } else if(this.state.oilNameGrabbedFive === ""){
      this.setState({oilNameGrabbedFive: this.state.ingredients[e].name})
    } else if(this.state.oilNameGrabbedSix === ""){
      this.setState({oilNameGrabbedSix: this.state.ingredients[e].name})
    } else if(this.state.oilNameGrabbedSeven === ""){
      this.setState({oilNameGrabbedSeven: this.state.ingredients[e].name})
    } else if(this.state.oilNameGrabbedEight === ""){
      this.setState({oilNameGrabbedEight: this.state.ingredients[e].name})
    } else if(this.state.oilNameGrabbedNine === ""){
      this.setState({oilNameGrabbedNine: this.state.ingredients[e].name})
    } else if(this.state.oilNameGrabbedTen === ""){
      this.setState({oilNameGrabbedTen: this.state.ingredients[e].name})
    }
    }


    listAll(){
      var self = this;
      return (
        <div>
          <div className="vertical-menu">
          {self.state.ingredients.map(function(ingredients, i){
            return <div>
              <a key={i} href="#" onClick={() => self.handleChange(i)}>{ingredients.name}</a>
              <a key={self.state.ingredients.id} href='#' onClick={() => self.addOilOne(i)}>+</a>
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
          <div className='stepSixBox'>
            <h1 className="stepSixHeading"> Recipe Oil List </h1>
              <form className="stepSixForm">
                <label> 1
                  <input className="inputOne" type="text" value={this.state.oilNameGrabbedOne}/>
                </label>
                <br/>
                <label> 2
                  <input className="inputTwo" type="text" value={this.state.oilNameGrabbedTwo}/>
                </label>
                <br/>
                <label> 3
                  <input className="inputThree" type="text" value={this.state.oilNameGrabbedThree}/>
                </label>
                <br/>
                <label> 4
                  <input className="inputFour" type="text" value={this.state.oilNameGrabbedFour}/>
                </label>
                <br/>
                <label> 5
                  <input className="inputFive" type="text" value={this.state.oilNameGrabbedFive}/>
                </label>
                <br/>
                <label> 6
                  <input className="inputSix" type="text" value={this.state.oilNameGrabbedSix}/>
                </label>
                <br/>
                <label> 7
                  <input className="inputSeven" type="text" value={this.state.oilNameGrabbedSeven}/>
                </label>
                <br/>
                <label> 8
                  <input className="inputEight" type="text" value={this.state.oilNameGrabbedEight}/>
                </label>
                <br/>
                <label> 9
                  <input className="inputNine" type="text" value={this.state.oilNameGrabbedNine}/>
                </label>
                <br/>
                <label> 10
                  <input className="inputTen" type="text" value={this.state.oilNameGrabbedTen}/>
                </label>
              </form>
          </div>
        </div>
      )
    }
  }
}

export default StepFive
