import React, { Component } from 'react';
import $ from 'jquery';
import '../index.css';

class StepFive extends Component{

  constructor(props) {
  		super(props)
  		this.state = {
  			ingredients: false,
        oilGrabbedOne: "",
        oilGrabbedTwo: "",
        oilGrabbedThree: "",
        oilGrabbedFour: "",
        oilGrabbedFive: "",
        oilGrabbedSix: "",
        oilGrabbedSeven: "",
        oilGrabbedEight: "",
        oilGrabbedNine: "",
        oilGrabbedTen: "",
        counter: 0,
        hardnessAll: "",
        cleansingAll: "",
        conditionAll: "",
        bubblyAll: "",
        creamyAll: "",
        iodineAll: "",
        insAll: "",
        lauricAll: "",
        myristicAll: "",
        palmiticAll: "",
        stearicAll: "",
        ricinoleicAll: "",
        oleicAll: "",
        linoleicAll: "",
        linolenicAll: "",
        sapAll: ""
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
    addOil = (e, prevState) => {
      const hardnessVal = ""
      const cleansingVal = ""
      const conditionVal = ""
      const bubblyVal = ""
      const creamyVal = ""
      const iodineVal = ""
      const insVal = ""
      const lauricVal = ""
      const myristicVal = ""
      const palmiticVal = ""
      const stearicVal = ""
      const ricinoleicVal = ""
      const oleicVal = ""
      const linoleicVal = ""
      const linolenicVal = ""
      const sapVal = ""
      if(this.state.oilGrabbedOne === ""){
        const hardnessVal = this.state.ingredients[e].hardness
        const cleansingVal = this.state.ingredients[e].cleansing
        const conditionVal = this.state.ingredients[e].condition1
        const bubblyVal = this.state.ingredients[e].bubbly
        const creamyVal = this.state.ingredients[e].creamy
        const iodineVal = this.state.ingredients[e].iodine
        const insVal = this.state.ingredients[e].ins
        const lauricVal = this.state.ingredients[e].lauric
        const myristicVal = this.state.ingredients[e].myristic
        const palmiticVal = this.state.ingredients[e].palmitic
        const stearicVal = this.state.ingredients[e].stearic
        const ricinoleicVal = this.state.ingredients[e].ricinoleic
        const oleicVal = this.state.ingredients[e].oleic
        const linoleicVal = this.state.ingredients[e].linoleic
        const linolenicVal = this.state.ingredients[e].linolenic
        const sapVal = this.state.ingredients[e].sap
        this.setState({
        oilGrabbedOne: this.state.ingredients[e],
        hardnessAll: hardnessVal,
        cleansingAll: cleansingVal,
        conditionAll:  conditionVal,
        bubblyAll: bubblyVal,
        creamyAll: creamyVal,
        iodineAll: iodineVal,
        insAll: insVal,
        lauricAll: lauricVal,
        myristicAll: myristicVal,
        palmiticAll: palmiticVal,
        stearicAll: stearicVal,
        ricinoleicAll: ricinoleicVal,
        oleicAll: oleicVal,
        linoleicAll: linoleicVal,
        linolenicAll: linolenicVal,
        sapAll: sapVal
        })
      } else if(this.state.oilGrabbedTwo === ""){
        const hardnessVal = (this.state.hardnessAll + this.state.ingredients[e].hardness)/2
        const cleansingVal = (this.state.cleansingAll + this.state.ingredients[e].cleansing)/2
        const conditionVal = (this.state.conditionAll + this.state.ingredients[e].condition1)/2
        const bubblyVal = (this.state.bubblyAll + this.state.ingredients[e].bubbly)/2
        const creamyVal = (this.state.creamyAll + this.state.ingredients[e].creamy)/2
        const iodineVal = (this.state.iodineAll + this.state.ingredients[e].iodine)/2
        const insVal = (this.state.insAll + this.state.ingredients[e].ins)/2
        const lauricVal = (this.state.lauricAll + this.state.ingredients[e].lauric)/2
        const myristicVal = (this.state.myristicAll + this.state.ingredients[e].myristic)/2
        const palmiticVal = (this.state.palmiticAll + this.state.ingredients[e].palmitic)/2
        const stearicVal = (this.state.stearicAll + this.state.ingredients[e].stearic)/2
        const ricinoleicVal = (this.state.ricinoleicAll + this.state.ingredients[e].ricinoleic)/2
        const oleicVal = (this.state.oleicAll + this.state.ingredients[e].oleic)/2
        const linoleicVal = (this.state.linoleicAll + this.state.ingredients[e].linoleic)/2
        const linolenicVal = (this.state.linolenicAll + this.state.ingredients[e].linolenic)/2
        const sapVal = (this.state.sapAll + this.state.ingredients[e].sap)/2
        this.setState({
        oilGrabbedTwo: this.state.ingredients[e],
        hardnessAll: hardnessVal,
        cleansingAll: cleansingVal,
        conditionAll:  conditionVal,
        bubblyAll: bubblyVal,
        creamyAll: creamyVal,
        iodineAll: iodineVal,
        insAll: insVal,
        lauricAll: lauricVal,
        myristicAll: myristicVal,
        palmiticAll: palmiticVal,
        stearicAll: stearicVal,
        ricinoleicAll: ricinoleicVal,
        oleicAll: oleicVal,
        linoleicAll: linoleicVal,
        linolenicAll: linolenicVal,
        sapAll: sapVal
      })
      } else if(this.state.oilGrabbedThree === ""){
      this.setState({oilGrabbedThree: this.state.ingredients[e]})
      } else if(this.state.oilGrabbedFour === ""){
      this.setState({oilGrabbedFour: this.state.ingredients[e]})
      } else if(this.state.oilGrabbedFive === ""){
      this.setState({oilGrabbedFive: this.state.ingredients[e]})
      } else if(this.state.oilGrabbedSix === ""){
      this.setState({oilGrabbedSix: this.state.ingredients[e]})
      } else if(this.state.oilGrabbedSeven === ""){
      this.setState({oilGrabbedSeven: this.state.ingredients[e]})
      } else if(this.state.oilGrabbedEight === ""){
      this.setState({oilGrabbedEight: this.state.ingredients[e]})
      } else if(this.state.oilGrabbedNine === ""){
      this.setState({oilGrabbedNine: this.state.ingredients[e]})
      } else if(this.state.oilGrabbedTen === ""){
      this.setState({oilGrabbedTen: this.state.ingredients[e]})
      }
    }

    showOilNameOne(){
      if(this.state.oilGrabbedOne != ""){
        return this.state.oilGrabbedOne.name
      } else{
        return ""
      }
    }

    showOilNameTwo(){
      if(this.state.oilGrabbedTwo != ""){
        return this.state.oilGrabbedTwo.name
      } else{
        return ""
      }
    }

    showOilNameThree(){
      if(this.state.oilGrabbedThree != ""){
        return this.state.oilGrabbedThree.name
      } else{
        return ""
      }
    }

    showOilNameFour(){
      if(this.state.oilGrabbedFour != ""){
        return this.state.oilGrabbedFour.name
      } else{
        return ""
      }
    }

    showOilNameFive(){
      if(this.state.oilGrabbedFive != ""){
        return this.state.oilGrabbedFive.name
      } else{
        return ""
      }
    }

    showOilNameSix(){
      if(this.state.oilGrabbedSix != ""){
        return this.state.oilGrabbedSix.name
      } else{
        return ""
      }
    }

    showOilNameSeven(){
      if(this.state.oilGrabbedSeven != ""){
        return this.state.oilGrabbedSeven.name
      } else{
        return ""
      }
    }

    showOilNameEight(){
      if(this.state.oilGrabbedEight != ""){
        return this.state.oilGrabbedEight.name
      } else{
        return ""
      }
    }

    showOilNameNine(){
      if(this.state.oilGrabbedNine != ""){
        return this.state.oilGrabbedNine.name
      } else{
        return ""
      }
    }

    showOilNameTen(){
      if(this.state.oilGrabbedTen != ""){
        return this.state.oilGrabbedTen.name
      } else{
        return ""
      }
    }

    removeOilOne(){
      this.setState({oilGrabbedOne: ""})
    }

    removeOilTwo(){
      this.setState({oilGrabbedTwo: ""})
    }

    removeOilThree(){
      this.setState({oilGrabbedThree: ""})
    }

    removeOilFour(){
      this.setState({oilGrabbedFour: ""})
    }

    removeOilFive(){
      this.setState({oilGrabbedFive: ""})
    }

    removeOilSix(){
      this.setState({oilGrabbedSix: ""})
    }

    removeOilSeven(){
      this.setState({oilGrabbedSeven: ""})
    }

    removeOilEight(){
      this.setState({oilGrabbedEight: ""})
    }

    removeOilNine(){
      this.setState({oilGrabbedNine: ""})
    }

    removeOilTen(){
      this.setState({oilGrabbedTen: ""})
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
              <label>Ricinoleic=<input className="indentStyleRincinoleic" value={this.state.ingredients[this.state.counter].ricinoleic}/></label><br/>
              <label>Oleic=<input className="indentStyleOleic" value={this.state.ingredients[this.state.counter].oleic}/></label><br/>
              <label>Linoleic=<input className="indentStyleLinoleic" value={this.state.ingredients[this.state.counter].linoleic}/></label><br/>
              <label>Linolenic=<input className="indentStyleLinolenic" value={this.state.ingredients[this.state.counter].linolenic}/></label><br/>
              <label>NaOH SAP=<input className="indentStyleSap" value={this.state.ingredients[this.state.counter].sap}/></label><br/>
            </form>
            <form className='stepFiveAvg'>
              <label>Hardness=<input classname='indentStyleHardness' value={this.state.hardnessAll}/></label><br/>
              <label>Cleansing=<input classname='indentStyleCleansing' value={this.state.cleansingAll}/></label><br/>
              <label>Condition=<input classname='indentStyleCondition' value={this.state.conditionAll}/></label><br/>
              <label>Bubbly=<input classname='indentStyleHardness' value={this.state.bubblyAll}/></label><br/>
              <label>Creamy=<input classname='indentStyleHardness' value={this.state.creamyAll}/></label><br/>
              <label>Iodine=<input classname='indentStyleHardness' value={this.state.iodineAll}/></label><br/>
              <label>INS=<input classname='indentStyleHardness' value={this.state.insAll}/></label><br/>
              <label>Lauric=<input classname='indentStyleHardness' value={this.state.lauricAll}/></label><br/>
              <label>Myristic=<input classname='indentStyleHardness' value={this.state.myristicAll}/></label><br/>
              <label>Palmitic=<input classname='indentStyleHardness' value={this.state.palmiticAll}/></label><br/>
              <label>Stearic=<input classname='indentStyleHardness' value={this.state.stearicAll}/></label><br/>
              <label>Ricinoleic=<input classname='indentStyleHardness' value={this.state.ricinoleicAll}/></label><br/>
              <label>Oleic=<input classname='indentStyleHardness' value={this.state.oleicAll}/></label><br/>
              <label>Linoleic=<input classname='indentStyleHardness' value={this.state.linoleicAll}/></label><br/>
              <label>Linolenic=<input classname='indentStyleHardness' value={this.state.linolenicAll}/></label><br/>
              <label>NaOH SAP=<input classname='indentStyleHardness' value={this.state.sapAll}/></label><br/>
            </form>
          </div>
          <div className='stepSixBox'>
            <h1 className="stepSixHeading"> Recipe Oil List </h1>
              <form className="stepSixForm">
                <label> 1 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilOne()}>-</a>
                  <input className="inputOne" type="text" value={this.showOilNameOne()}/>
                </label>
                <br/>
                <label> 2 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilTwo()}>-</a>
                  <input className="inputTwo" type="text" value={this.showOilNameTwo()}/>
                </label>
                <br/>
                <label> 3 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilThree()}>-</a>
                  <input className="inputThree" type="text" value={this.showOilNameThree()}/>
                </label>
                <br/>
                <label> 4 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilFour()}>-</a>
                  <input className="inputFour" type="text" value={this.showOilNameFour()}/>
                </label>
                <br/>
                <label> 5 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilFive()}>-</a>
                  <input className="inputFive" type="text" value={this.showOilNameFive()}/>
                </label>
                <br/>
                <label> 6 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilSix()}>-</a>
                  <input className="inputSix" type="text" value={this.showOilNameSix()}/>
                </label>
                <br/>
                <label> 7 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilSeven()}>-</a>
                  <input className="inputSeven" type="text" value={this.showOilNameSeven()}/>
                </label>
                <br/>
                <label> 8 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilEight()}>-</a>
                  <input className="inputEight" type="text" value={this.showOilNameEight()}/>
                </label>
                <br/>
                <label> 9 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilNine()}>-</a>
                  <input className="inputNine" type="text" value={this.showOilNameNine()}/>
                </label>
                <br/>
                <label> 10 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilTen()}>-</a>
                  <input className="inputTen" type="text" value={this.showOilNameTen()}/>
                </label>
              </form>
          </div>
        </div>
      )
    }
  }
}

export default StepFive
