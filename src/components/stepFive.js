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
    addOil = (e) => {
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

    removeOilOne(){
      this.setState({oilNameGrabbedOne: ""})
    }

    removeOilTwo(){
      this.setState({oilNameGrabbedTwo: ""})
    }

    removeOilThree(){
      this.setState({oilNameGrabbedThree: ""})
    }

    removeOilFour(){
      this.setState({oilNameGrabbedFour: ""})
    }

    removeOilFive(){
      this.setState({oilNameGrabbedFive: ""})
    }

    removeOilSix(){
      this.setState({oilNameGrabbedSix: ""})
    }

    removeOilSeven(){
      this.setState({oilNameGrabbedSeven: ""})
    }

    removeOilEight(){
      this.setState({oilNameGrabbedEight: ""})
    }

    removeOilNine(){
      this.setState({oilNameGrabbedNine: ""})
    }

    removeOilTen(){
      this.setState({oilNameGrabbedTen: ""})
    }


    listAll(){
      var self = this;
      return (
        <div>
          <div className="vertical-menu">
          {self.state.ingredients.map(function(ingredients, i){
            return <div>
              <a key={i} href="#" onClick={() => self.handleChange(i)}>{ingredients.name}</a>
              <a key={self.state.ingredients.id} href='#' onClick={() => self.addOil(i)}>+</a>
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
            <form className='stepFiveValues'>
              <label>Hardness=<input className="indentStyleHardness" value={this.state.ingredients[this.state.counter].hardness}/></label><br/>
              <label>Cleansing=<input className="indentStyleCleansing" value={this.state.ingredients[this.state.counter].cleansing}/></label><br/>
              <label>Condidtion=<input className="indentStyleCondition" value={this.state.ingredients[this.state.counter].condition1}/></label><br/>
              <label>Bubbly=<input className="indentStyleBubbly" value={this.state.ingredients[this.state.counter].bubbly}/></label><br/>
              <label>Creamy=<input className="indentStyleCreamy" value={this.state.ingredients[this.state.counter].creamy}/></label><br/>
              <label>Iodine=<input className="indentStyleIodine" value={this.state.ingredients[this.state.counter].iodine}/></label><br/>
              <label>INS=<input className="indentStyleIns" value={this.state.ingredients[this.state.counter].ins}/></label><br/>
              <label>Lauric=<input className="indentStyleLauric" value={this.state.ingredients[this.state.counter].lauric}/></label><br/>
              <label>Myristic=<input className="indentStyleMyristic" value={this.state.ingredients[this.state.counter].myristic}/></label><br/>
              <label>Palmitic=<input className="indentStylePalmitic" value={this.state.ingredients[this.state.counter].palmitic}/></label><br/>
              <label>Stearic=<input className="indentStyleStearic" value={this.state.ingredients[this.state.counter].stearic}/></label><br/>
              <label>Ricinoleic=<input className="indentStyleRincinoleic" value={this.state.ingredients[this.state.counter].rincinoleic}/></label><br/>
              <label>Oleic=<input className="indentStyleOleic" value={this.state.ingredients[this.state.counter].oleic}/></label><br/>
              <label>Linoleic=<input className="indentStyleLinoleic" value={this.state.ingredients[this.state.counter].linoleic}/></label><br/>
              <label>Linolenic=<input className="indentStyleLinolenic" value={this.state.ingredients[this.state.counter].linolenic}/></label><br/>
              <label>NaOH SAP=<input className="indentStyleSap" value={this.state.ingredients[this.state.counter].sap}/></label><br/>
            </form>
          </div>
          <div className='stepSixBox'>
            <h1 className="stepSixHeading"> Recipe Oil List </h1>
              <form className="stepSixForm">
                <label> 1 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilOne()}>-</a>
                  <input className="inputOne" type="text" value={this.state.oilNameGrabbedOne}/>
                </label>
                <br/>
                <label> 2 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilTwo()}>-</a>
                  <input className="inputTwo" type="text" value={this.state.oilNameGrabbedTwo}/>
                </label>
                <br/>
                <label> 3 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilThree()}>-</a>
                  <input className="inputThree" type="text" value={this.state.oilNameGrabbedThree}/>
                </label>
                <br/>
                <label> 4 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilFour()}>-</a>
                  <input className="inputFour" type="text" value={this.state.oilNameGrabbedFour}/>
                </label>
                <br/>
                <label> 5 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilFive()}>-</a>
                  <input className="inputFive" type="text" value={this.state.oilNameGrabbedFive}/>
                </label>
                <br/>
                <label> 6 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilSix()}>-</a>
                  <input className="inputSix" type="text" value={this.state.oilNameGrabbedSix}/>
                </label>
                <br/>
                <label> 7 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilSeven()}>-</a>
                  <input className="inputSeven" type="text" value={this.state.oilNameGrabbedSeven}/>
                </label>
                <br/>
                <label> 8 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilEight()}>-</a>
                  <input className="inputEight" type="text" value={this.state.oilNameGrabbedEight}/>
                </label>
                <br/>
                <label> 9 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilNine()}>-</a>
                  <input className="inputNine" type="text" value={this.state.oilNameGrabbedNine}/>
                </label>
                <br/>
                <label> 10 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilTen()}>-</a>
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
