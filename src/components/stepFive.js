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
        sapAll: "",
        percentageOne: "",
        percentageTwo: "",
        percentageThree: "",
        percentageFour: "",
        percentageFive: "",
        percentageSix: "",
        percentageSeven: "",
        percentageEight: "",
        percentageNine: "",
        percentageTen: ""
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
    percentageInputChangeOne= (e) =>{
      this.setState({percentageOne: e.target.value})
    }
    percentageInputChangeTwo= (e) =>{
      this.setState({percentageTwo: e.target.value})
    }
    percentageInputChangeThree= (e) =>{
      this.setState({percentageThree: e.target.value})
    }
    percentageInputChangeFour= (e) =>{
      this.setState({percentageFour: e.target.value})
    }
    percentageInputChangeFive= (e) =>{
      this.setState({percentageFive: e.target.value})
    }
    percentageInputChangeSix= (e) =>{
      this.setState({percentageSix: e.target.value})
    }
    percentageInputChangeSeven= (e) =>{
      this.setState({percentageSeven: e.target.value})
    }
    percentageInputChangeEight= (e) =>{
      this.setState({percentageEight: e.target.value})
    }
    percentageInputChangeNine= (e) =>{
      this.setState({percentageNine: e.target.value})
    }
    percentageInputChangeTen= (e) =>{
      this.setState({percentageTen: e.target.value})
    }
    addOil = (e) => {
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
        const hardnessVal = (this.state.oilGrabbedOne.hardness + this.state.ingredients[e].cleansing)/2
        const cleansingVal = (this.state.oilGrabbedOne.cleansing + this.state.ingredients[e].cleansing)/2
        const conditionVal = (this.state.oilGrabbedOne.condition1 + this.state.ingredients[e].condition1)/2
        const bubblyVal = (this.state.oilGrabbedOne.bubbly + this.state.ingredients[e].bubbly)/2
        const creamyVal = (this.state.oilGrabbedOne.creamy + this.state.ingredients[e].creamy)/2
        const iodineVal = (this.state.oilGrabbedOne.iodine + this.state.ingredients[e].iodine)/2
        const insVal = (this.state.oilGrabbedOne.ins + this.state.ingredients[e].ins)/2
        const lauricVal = (this.state.oilGrabbedOne.lauric + this.state.ingredients[e].lauric)/2
        const myristicVal = (this.state.oilGrabbedOne.myristic + this.state.ingredients[e].myristic)/2
        const palmiticVal = (this.state.oilGrabbedOne.palmitic + this.state.ingredients[e].palmitic)/2
        const stearicVal = (this.state.oilGrabbedOne.stearic + this.state.ingredients[e].stearic)/2
        const ricinoleicVal = (this.state.oilGrabbedOne.ricinoleic + this.state.ingredients[e].ricinoleic)/2
        const oleicVal = (this.state.oilGrabbedOne.oleic + this.state.ingredients[e].oleic)/2
        const linoleicVal = (this.state.oilGrabbedOne.linoleic + this.state.ingredients[e].linoleic)/2
        const linolenicVal = (this.state.oilGrabbedOne.linolenic + this.state.ingredients[e].linolenic)/2
        const sapVal = (this.state.oilGrabbedOne.sap + this.state.ingredients[e].sap)/2
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
        const hardnessVal = (this.state.oilGrabbedTwo.hardness + this.state.oilGrabbedOne.hardness + this.state.ingredients[e].hardness)/3
        const cleansingVal = (this.state.oilGrabbedTwo.cleansing + this.state.oilGrabbedOne.cleansing + this.state.ingredients[e].cleansing)/3
        const conditionVal = (this.state.oilGrabbedTwo.condition1 + this.state.oilGrabbedOne.condition1 + this.state.ingredients[e].condition1)/3
        const bubblyVal = (this.state.oilGrabbedTwo.bubbly + this.state.oilGrabbedOne.bubbly + this.state.ingredients[e].bubbly)/3
        const creamyVal = (this.state.oilGrabbedTwo.creamy + this.state.oilGrabbedOne.creamy + this.state.ingredients[e].creamy)/3
        const iodineVal = (this.state.oilGrabbedTwo.iodine + this.state.oilGrabbedOne.iodine + this.state.ingredients[e].iodine)/3
        const insVal = (this.state.oilGrabbedTwo.ins + this.state.oilGrabbedOne.ins + this.state.ingredients[e].ins)/3
        const lauricVal = (this.state.oilGrabbedTwo.lauric + this.state.oilGrabbedOne.lauric + this.state.ingredients[e].lauric)/3
        const myristicVal = (this.state.oilGrabbedTwo.myristic + this.state.oilGrabbedOne.myristic + this.state.ingredients[e].myristic)/3
        const palmiticVal = (this.state.oilGrabbedTwo.palmitic + this.state.oilGrabbedOne.palmitic + this.state.ingredients[e].palmitic)/3
        const stearicVal = (this.state.oilGrabbedTwo.stearic + this.state.oilGrabbedOne.stearic + this.state.ingredients[e].stearic)/3
        const ricinoleicVal = (this.state.oilGrabbedTwo.ricinoleic + this.state.oilGrabbedOne.ricinoleic + this.state.ingredients[e].ricinoleic)/3
        const oleicVal = (this.state.oilGrabbedTwo.oleic + this.state.oilGrabbedOne.oleic + this.state.ingredients[e].oleic)/3
        const linoleicVal = (this.state.oilGrabbedTwo.linoleic + this.state.oilGrabbedOne.linoleic + this.state.ingredients[e].linoleic)/3
        const linolenicVal = (this.state.oilGrabbedTwo.linolenic + this.state.oilGrabbedOne.linolenic + this.state.ingredients[e].linolenic)/3
        const sapVal = (this.state.oilGrabbedTwo.sap + this.state.oilGrabbedOne.sap + this.state.ingredients[e].sap)/3
      this.setState({
        oilGrabbedThree: this.state.ingredients[e],
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
      } else if(this.state.oilGrabbedFour === ""){
        const hardnessVal = (this.state.oilGrabbedThree.hardness + this.state.oilGrabbedTwo.hardness + this.state.oilGrabbedOne.hardness + this.state.ingredients[e].hardness)/4
        const cleansingVal = (this.state.oilGrabbedThree.cleansing + this.state.oilGrabbedTwo.cleansing + this.state.oilGrabbedOne.cleansing + this.state.ingredients[e].cleansing)/4
        const conditionVal = (this.state.oilGrabbedThree.condition1 + this.state.oilGrabbedTwo.condition1 + this.state.oilGrabbedOne.condition1 + this.state.ingredients[e].condition1)/4
        const bubblyVal = (this.state.oilGrabbedThree.bubbly + this.state.oilGrabbedTwo.bubbly + this.state.oilGrabbedOne.bubbly + this.state.ingredients[e].bubbly)/4
        const creamyVal = (this.state.oilGrabbedThree.creamy + this.state.oilGrabbedTwo.creamy + this.state.oilGrabbedOne.creamy + this.state.ingredients[e].creamy)/4
        const iodineVal = (this.state.oilGrabbedThree.iodine + this.state.oilGrabbedTwo.iodine + this.state.oilGrabbedOne.iodine + this.state.ingredients[e].iodine)/4
        const insVal = (this.state.oilGrabbedThree.ins + this.state.oilGrabbedTwo.ins + this.state.oilGrabbedOne.ins + this.state.ingredients[e].ins)/4
        const lauricVal = (this.state.oilGrabbedThree.lauric + this.state.oilGrabbedTwo.lauric + this.state.oilGrabbedOne.lauric + this.state.ingredients[e].lauric)/4
        const myristicVal = (this.state.oilGrabbedThree.myristic + this.state.oilGrabbedTwo.myristic + this.state.oilGrabbedOne.myristic + this.state.ingredients[e].myristic)/4
        const palmiticVal = (this.state.oilGrabbedThree.palmitic + this.state.oilGrabbedTwo.palmitic + this.state.oilGrabbedOne.palmitic + this.state.ingredients[e].palmitic)/4
        const stearicVal = (this.state.oilGrabbedThree.stearic + this.state.oilGrabbedTwo.stearic + this.state.oilGrabbedOne.stearic + this.state.ingredients[e].stearic)/4
        const ricinoleicVal = (this.state.oilGrabbedThree.ricinoleic + this.state.oilGrabbedTwo.ricinoleic + this.state.oilGrabbedOne.ricinoleic + this.state.ingredients[e].ricinoleic)/4
        const oleicVal = (this.state.oilGrabbedThree.oleic + this.state.oilGrabbedTwo.oleic + this.state.oilGrabbedOne.oleic + this.state.ingredients[e].oleic)/4
        const linoleicVal = (this.state.oilGrabbedThree.linoleic + this.state.oilGrabbedTwo.linoleic + this.state.oilGrabbedOne.linoleic + this.state.ingredients[e].linoleic)/4
        const linolenicVal = (this.state.oilGrabbedThree.linolenic + this.state.oilGrabbedTwo.linolenic + this.state.oilGrabbedOne.linolenic + this.state.ingredients[e].linolenic)/4
        const sapVal = (this.state.oilGrabbedThree.sap + this.state.oilGrabbedTwo.sap + this.state.oilGrabbedOne.sap + this.state.ingredients[e].sap)/4
      this.setState({
        oilGrabbedFour: this.state.ingredients[e],
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
      } else if(this.state.oilGrabbedFive === ""){
        const hardnessVal = (this.state.oilGrabbedFour.hardness + this.state.oilGrabbedThree.hardness + this.state.oilGrabbedTwo.hardness + this.state.oilGrabbedOne.hardness + this.state.ingredients[e].hardness)/5
        const cleansingVal = (this.state.oilGrabbedFour.cleansing + this.state.oilGrabbedThree.cleansing + this.state.oilGrabbedTwo.cleansing + this.state.oilGrabbedOne.cleansing + this.state.ingredients[e].cleansing)/5
        const conditionVal = (this.state.oilGrabbedFour.condition1 + this.state.oilGrabbedThree.condition1 + this.state.oilGrabbedTwo.condition1 + this.state.oilGrabbedOne.condition1 + this.state.ingredients[e].condition1)/5
        const bubblyVal = (this.state.oilGrabbedFour.bubbly + this.state.oilGrabbedThree.bubbly + this.state.oilGrabbedTwo.bubbly + this.state.oilGrabbedOne.bubbly + this.state.ingredients[e].bubbly)/5
        const creamyVal = (this.state.oilGrabbedFour.creamy + this.state.oilGrabbedThree.creamy + this.state.oilGrabbedTwo.creamy + this.state.oilGrabbedOne.creamy + this.state.ingredients[e].creamy)/5
        const iodineVal = (this.state.oilGrabbedFour.iodine + this.state.oilGrabbedThree.iodine + this.state.oilGrabbedTwo.iodine + this.state.oilGrabbedOne.iodine + this.state.ingredients[e].iodine)/5
        const insVal = (this.state.oilGrabbedFour.ins + this.state.oilGrabbedThree.ins + this.state.oilGrabbedTwo.ins + this.state.oilGrabbedOne.ins + this.state.ingredients[e].ins)/5
        const lauricVal = (this.state.oilGrabbedFour.lauric + this.state.oilGrabbedThree.lauric + this.state.oilGrabbedTwo.lauric + this.state.oilGrabbedOne.lauric + this.state.ingredients[e].lauric)/5
        const myristicVal = (this.state.oilGrabbedFour.myristic + this.state.oilGrabbedThree.myristic + this.state.oilGrabbedTwo.myristic + this.state.oilGrabbedOne.myristic + this.state.ingredients[e].myristic)/5
        const palmiticVal = (this.state.oilGrabbedFour.palmitic + this.state.oilGrabbedThree.palmitic + this.state.oilGrabbedTwo.palmitic + this.state.oilGrabbedOne.palmitic + this.state.ingredients[e].palmitic)/5
        const stearicVal = (this.state.oilGrabbedFour.stearic + this.state.oilGrabbedThree.stearic + this.state.oilGrabbedTwo.stearic + this.state.oilGrabbedOne.stearic + this.state.ingredients[e].stearic)/5
        const ricinoleicVal = (this.state.oilGrabbedFour.rincinoleic + this.state.oilGrabbedThree.ricinoleic + this.state.oilGrabbedTwo.ricinoleic + this.state.oilGrabbedOne.ricinoleic + this.state.ingredients[e].ricinoleic)/5
        const oleicVal = (this.state.oilGrabbedFour.oleic + this.state.oilGrabbedThree.oleic + this.state.oilGrabbedTwo.oleic + this.state.oilGrabbedOne.oleic + this.state.ingredients[e].oleic)/5
        const linoleicVal = (this.state.oilGrabbedFour.linoleic + this.state.oilGrabbedThree.linoleic + this.state.oilGrabbedTwo.linoleic + this.state.oilGrabbedOne.linoleic + this.state.ingredients[e].linoleic)/5
        const linolenicVal = (this.state.oilGrabbedFour.linolenic + this.state.oilGrabbedThree.linolenic + this.state.oilGrabbedTwo.linolenic + this.state.oilGrabbedOne.linolenic + this.state.ingredients[e].linolenic)/5
        const sapVal = (this.state.oilGrabbedFour.sap + this.state.oilGrabbedThree.sap + this.state.oilGrabbedTwo.sap + this.state.oilGrabbedOne.sap + this.state.ingredients[e].sap)/5
      this.setState({
        oilGrabbedFive: this.state.ingredients[e],
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
      } else if(this.state.oilGrabbedSix === ""){
        const hardnessVal = (this.state.oilGrabbedFive.hardness + this.state.oilGrabbedFour.hardness + this.state.oilGrabbedThree.hardness + this.state.oilGrabbedTwo.hardness + this.state.oilGrabbedOne.hardness + this.state.ingredients[e].hardness)/5
        const cleansingVal = (this.state.oilGrabbedFive.cleansing + this.state.oilGrabbedFour.cleansing + this.state.oilGrabbedThree.cleansing + this.state.oilGrabbedTwo.cleansing + this.state.oilGrabbedOne.cleansing + this.state.ingredients[e].cleansing)/5
        const conditionVal = (this.state.oilGrabbedFive.condition1 + this.state.oilGrabbedFour.condition1 + this.state.oilGrabbedThree.condition1 + this.state.oilGrabbedTwo.condition1 + this.state.oilGrabbedOne.condition1 + this.state.ingredients[e].condition1)/5
        const bubblyVal = (this.state.oilGrabbedFive.bubbly + this.state.oilGrabbedFour.bubbly + this.state.oilGrabbedThree.bubbly + this.state.oilGrabbedTwo.bubbly + this.state.oilGrabbedOne.bubbly + this.state.ingredients[e].bubbly)/5
        const creamyVal = (this.state.oilGrabbedFive.creamy + this.state.oilGrabbedFour.creamy + this.state.oilGrabbedThree.creamy + this.state.oilGrabbedTwo.creamy + this.state.oilGrabbedOne.creamy + this.state.ingredients[e].creamy)/5
        const iodineVal = (this.state.oilGrabbedFive.iodine + this.state.oilGrabbedFour.iodine + this.state.oilGrabbedThree.iodine + this.state.oilGrabbedTwo.iodine + this.state.oilGrabbedOne.iodine + this.state.ingredients[e].iodine)/5
        const insVal = (this.state.oilGrabbedFive.ins + this.state.oilGrabbedFour.ins + this.state.oilGrabbedThree.ins + this.state.oilGrabbedTwo.ins + this.state.oilGrabbedOne.ins + this.state.ingredients[e].ins)/5
        const lauricVal = (this.state.oilGrabbedFive.lauric + this.state.oilGrabbedFour.lauric + this.state.oilGrabbedThree.lauric + this.state.oilGrabbedTwo.lauric + this.state.oilGrabbedOne.lauric + this.state.ingredients[e].lauric)/5
        const myristicVal = (this.state.oilGrabbedFive.myristic + this.state.oilGrabbedFour.myristic + this.state.oilGrabbedThree.myristic + this.state.oilGrabbedTwo.myristic + this.state.oilGrabbedOne.myristic + this.state.ingredients[e].myristic)/5
        const palmiticVal = (this.state.oilGrabbedFive.palmitic + this.state.oilGrabbedFour.palmitic + this.state.oilGrabbedThree.palmitic + this.state.oilGrabbedTwo.palmitic + this.state.oilGrabbedOne.palmitic + this.state.ingredients[e].palmitic)/5
        const stearicVal = (this.state.oilGrabbedFive.stearic + this.state.oilGrabbedFour.stearic + this.state.oilGrabbedThree.stearic + this.state.oilGrabbedTwo.stearic + this.state.oilGrabbedOne.stearic + this.state.ingredients[e].stearic)/5
        const ricinoleicVal = (this.state.oilGrabbedFive.rincinoleic + this.state.oilGrabbedFour.rincinoleic + this.state.oilGrabbedThree.ricinoleic + this.state.oilGrabbedTwo.ricinoleic + this.state.oilGrabbedOne.ricinoleic + this.state.ingredients[e].ricinoleic)/5
        const oleicVal = (this.state.oilGrabbedFive.oleic + this.state.oilGrabbedFour.oleic + this.state.oilGrabbedThree.oleic + this.state.oilGrabbedTwo.oleic + this.state.oilGrabbedOne.oleic + this.state.ingredients[e].oleic)/5
        const linoleicVal = (this.state.oilGrabbedFive.linoleic + this.state.oilGrabbedFour.linoleic + this.state.oilGrabbedThree.linoleic + this.state.oilGrabbedTwo.linoleic + this.state.oilGrabbedOne.linoleic + this.state.ingredients[e].linoleic)/5
        const linolenicVal = (this.state.oilGrabbedFive.linolenic + this.state.oilGrabbedFour.linolenic + this.state.oilGrabbedThree.linolenic + this.state.oilGrabbedTwo.linolenic + this.state.oilGrabbedOne.linolenic + this.state.ingredients[e].linolenic)/5
        const sapVal = (this.state.oilGrabbedFive.sap + this.state.oilGrabbedFour.sap + this.state.oilGrabbedThree.sap + this.state.oilGrabbedTwo.sap + this.state.oilGrabbedOne.sap + this.state.ingredients[e].sap)/5
      this.setState({
        oilGrabbedSix: this.state.ingredients[e],
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
      } else if(this.state.oilGrabbedSeven === ""){
        const hardnessVal = (this.state.oilGrabbedSix.hardness + this.state.oilGrabbedFive.hardness + this.state.oilGrabbedFour.hardness + this.state.oilGrabbedThree.hardness + this.state.oilGrabbedTwo.hardness + this.state.oilGrabbedOne.hardness + this.state.ingredients[e].hardness)/5
        const cleansingVal = (this.state.oilGrabbedSix.cleansing + this.state.oilGrabbedFive.cleansing + this.state.oilGrabbedFour.cleansing + this.state.oilGrabbedThree.cleansing + this.state.oilGrabbedTwo.cleansing + this.state.oilGrabbedOne.cleansing + this.state.ingredients[e].cleansing)/5
        const conditionVal = (this.state.oilGrabbedSix.condition1 + this.state.oilGrabbedFive.condition1 + this.state.oilGrabbedFour.condition1 + this.state.oilGrabbedThree.condition1 + this.state.oilGrabbedTwo.condition1 + this.state.oilGrabbedOne.condition1 + this.state.ingredients[e].condition1)/5
        const bubblyVal = (this.state.oilGrabbedSix.bubbly + this.state.oilGrabbedFive.bubbly + this.state.oilGrabbedFour.bubbly + this.state.oilGrabbedThree.bubbly + this.state.oilGrabbedTwo.bubbly + this.state.oilGrabbedOne.bubbly + this.state.ingredients[e].bubbly)/5
        const creamyVal = (this.state.oilGrabbedSix.creamy + this.state.oilGrabbedFive.creamy + this.state.oilGrabbedFour.creamy + this.state.oilGrabbedThree.creamy + this.state.oilGrabbedTwo.creamy + this.state.oilGrabbedOne.creamy + this.state.ingredients[e].creamy)/5
        const iodineVal = (this.state.oilGrabbedSix.iodine + this.state.oilGrabbedFive.iodine + this.state.oilGrabbedFour.iodine + this.state.oilGrabbedThree.iodine + this.state.oilGrabbedTwo.iodine + this.state.oilGrabbedOne.iodine + this.state.ingredients[e].iodine)/5
        const insVal = (this.state.oilGrabbedSix.ins + this.state.oilGrabbedFive.ins + this.state.oilGrabbedFour.ins + this.state.oilGrabbedThree.ins + this.state.oilGrabbedTwo.ins + this.state.oilGrabbedOne.ins + this.state.ingredients[e].ins)/3
        const lauricVal = (this.state.oilGrabbedSix.lauric + this.state.oilGrabbedFive.lauric + this.state.oilGrabbedFour.lauric + this.state.oilGrabbedThree.lauric + this.state.oilGrabbedTwo.lauric + this.state.oilGrabbedOne.lauric + this.state.ingredients[e].lauric)/3
        const myristicVal = (this.state.oilGrabbedSix.myristic + this.state.oilGrabbedFive.myristic + this.state.oilGrabbedFour.myristic + this.state.oilGrabbedThree.myristic + this.state.oilGrabbedTwo.myristic + this.state.oilGrabbedOne.myristic + this.state.ingredients[e].myristic)/5
        const palmiticVal = (this.state.oilGrabbedSix.palmitic + this.state.oilGrabbedFive.palmitic + this.state.oilGrabbedFour.palmitic + this.state.oilGrabbedThree.palmitic + this.state.oilGrabbedTwo.palmitic + this.state.oilGrabbedOne.palmitic + this.state.ingredients[e].palmitic)/5
        const stearicVal = (this.state.oilGrabbedSix.stearic + this.state.oilGrabbedFive.stearic + this.state.oilGrabbedFour.stearic + this.state.oilGrabbedThree.stearic + this.state.oilGrabbedTwo.stearic + this.state.oilGrabbedOne.stearic + this.state.ingredients[e].stearic)/5
        const ricinoleicVal = (this.state.oilGrabbedSix.rincinoleic + this.state.oilGrabbedFive.rincinoleic + this.state.oilGrabbedFour.rincinoleic + this.state.oilGrabbedThree.ricinoleic + this.state.oilGrabbedTwo.ricinoleic + this.state.oilGrabbedOne.ricinoleic + this.state.ingredients[e].ricinoleic)/5
        const oleicVal = (this.state.oilGrabbedSix.oleic + this.state.oilGrabbedFive.oleic + this.state.oilGrabbedFour.oleic + this.state.oilGrabbedThree.oleic + this.state.oilGrabbedTwo.oleic + this.state.oilGrabbedOne.oleic + this.state.ingredients[e].oleic)/5
        const linoleicVal = (this.state.oilGrabbedSix.linoleic + this.state.oilGrabbedFive.linoleic + this.state.oilGrabbedFour.linoleic + this.state.oilGrabbedThree.linoleic + this.state.oilGrabbedTwo.linoleic + this.state.oilGrabbedOne.linoleic + this.state.ingredients[e].linoleic)/5
        const linolenicVal = (this.state.oilGrabbedSix.linolenic + this.state.oilGrabbedFive.linolenic + this.state.oilGrabbedFour.linolenic + this.state.oilGrabbedThree.linolenic + this.state.oilGrabbedTwo.linolenic + this.state.oilGrabbedOne.linolenic + this.state.ingredients[e].linolenic)/5
        const sapVal = (this.state.oilGrabbedSix.sap + this.state.oilGrabbedFive.sap + this.state.oilGrabbedFour.sap + this.state.oilGrabbedThree.sap + this.state.oilGrabbedTwo.sap + this.state.oilGrabbedOne.sap + this.state.ingredients[e].sap)/5
      this.setState({
        oilGrabbedSeven: this.state.ingredients[e],
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
      } else if(this.state.oilGrabbedEight === ""){
        const hardnessVal = (this.state.oilGrabbedSeven.hardness + this.state.oilGrabbedSix.hardness + this.state.oilGrabbedFive.hardness + this.state.oilGrabbedFour.hardness + this.state.oilGrabbedThree.hardness + this.state.oilGrabbedTwo.hardness + this.state.oilGrabbedOne.hardness + this.state.ingredients[e].hardness)/5
        const cleansingVal = (this.state.oilGrabbedSeven.cleansing + this.state.oilGrabbedSix.cleansing + this.state.oilGrabbedFive.cleansing + this.state.oilGrabbedFour.cleansing + this.state.oilGrabbedThree.cleansing + this.state.oilGrabbedTwo.cleansing + this.state.oilGrabbedOne.cleansing + this.state.ingredients[e].cleansing)/5
        const conditionVal = (this.state.oilGrabbedSeven.condition1 + this.state.oilGrabbedSix.condition1 + this.state.oilGrabbedFive.condition1 + this.state.oilGrabbedFour.condition1 + this.state.oilGrabbedThree.condition1 + this.state.oilGrabbedTwo.condition1 + this.state.oilGrabbedOne.condition1 + this.state.ingredients[e].condition1)/5
        const bubblyVal = (this.state.oilGrabbedSeven.bubbly + this.state.oilGrabbedSix.bubbly + this.state.oilGrabbedFive.bubbly + this.state.oilGrabbedFour.bubbly + this.state.oilGrabbedThree.bubbly + this.state.oilGrabbedTwo.bubbly + this.state.oilGrabbedOne.bubbly + this.state.ingredients[e].bubbly)/5
        const creamyVal = (this.state.oilGrabbedSeven.creamy + this.state.oilGrabbedSix.creamy + this.state.oilGrabbedFive.creamy + this.state.oilGrabbedFour.creamy + this.state.oilGrabbedThree.creamy + this.state.oilGrabbedTwo.creamy + this.state.oilGrabbedOne.creamy + this.state.ingredients[e].creamy)/5
        const iodineVal = (this.state.oilGrabbedSeven.iodine + this.state.oilGrabbedSix.iodine + this.state.oilGrabbedFive.iodine + this.state.oilGrabbedFour.iodine + this.state.oilGrabbedThree.iodine + this.state.oilGrabbedTwo.iodine + this.state.oilGrabbedOne.iodine + this.state.ingredients[e].iodine)/5
        const insVal = (this.state.oilGrabbedSeven.ins + this.state.oilGrabbedSix.ins + this.state.oilGrabbedFive.ins + this.state.oilGrabbedFour.ins + this.state.oilGrabbedThree.ins + this.state.oilGrabbedTwo.ins + this.state.oilGrabbedOne.ins + this.state.ingredients[e].ins)/3
        const lauricVal = (this.state.oilGrabbedSeven.lauric + this.state.oilGrabbedSix.lauric + this.state.oilGrabbedFive.lauric + this.state.oilGrabbedFour.lauric + this.state.oilGrabbedThree.lauric + this.state.oilGrabbedTwo.lauric + this.state.oilGrabbedOne.lauric + this.state.ingredients[e].lauric)/3
        const myristicVal = (this.state.oilGrabbedSeven.myristic + this.state.oilGrabbedSix.myristic + this.state.oilGrabbedFive.myristic + this.state.oilGrabbedFour.myristic + this.state.oilGrabbedThree.myristic + this.state.oilGrabbedTwo.myristic + this.state.oilGrabbedOne.myristic + this.state.ingredients[e].myristic)/5
        const palmiticVal = (this.state.oilGrabbedSeven.palmitic + this.state.oilGrabbedSix.palmitic + this.state.oilGrabbedFive.palmitic + this.state.oilGrabbedFour.palmitic + this.state.oilGrabbedThree.palmitic + this.state.oilGrabbedTwo.palmitic + this.state.oilGrabbedOne.palmitic + this.state.ingredients[e].palmitic)/5
        const stearicVal = (this.state.oilGrabbedSeven.stearic + this.state.oilGrabbedSix.stearic + this.state.oilGrabbedFive.stearic + this.state.oilGrabbedFour.stearic + this.state.oilGrabbedThree.stearic + this.state.oilGrabbedTwo.stearic + this.state.oilGrabbedOne.stearic + this.state.ingredients[e].stearic)/5
        const ricinoleicVal = (this.state.oilGrabbedSeven.rincinoleic + this.state.oilGrabbedSix.rincinoleic + this.state.oilGrabbedFive.rincinoleic + this.state.oilGrabbedFour.rincinoleic + this.state.oilGrabbedThree.ricinoleic + this.state.oilGrabbedTwo.ricinoleic + this.state.oilGrabbedOne.ricinoleic + this.state.ingredients[e].ricinoleic)/5
        const oleicVal = (this.state.oilGrabbedSeven.oleic + this.state.oilGrabbedSix.oleic + this.state.oilGrabbedFive.oleic + this.state.oilGrabbedFour.oleic + this.state.oilGrabbedThree.oleic + this.state.oilGrabbedTwo.oleic + this.state.oilGrabbedOne.oleic + this.state.ingredients[e].oleic)/5
        const linoleicVal = (this.state.oilGrabbedSeven.linoleic + this.state.oilGrabbedSix.linoleic + this.state.oilGrabbedFive.linoleic + this.state.oilGrabbedFour.linoleic + this.state.oilGrabbedThree.linoleic + this.state.oilGrabbedTwo.linoleic + this.state.oilGrabbedOne.linoleic + this.state.ingredients[e].linoleic)/5
        const linolenicVal = (this.state.oilGrabbedSeven.linolenic + this.state.oilGrabbedSix.linolenic + this.state.oilGrabbedFive.linolenic + this.state.oilGrabbedFour.linolenic + this.state.oilGrabbedThree.linolenic + this.state.oilGrabbedTwo.linolenic + this.state.oilGrabbedOne.linolenic + this.state.ingredients[e].linolenic)/5
        const sapVal = (this.state.oilGrabbedSeven.sap + this.state.oilGrabbedSix.sap + this.state.oilGrabbedFive.sap + this.state.oilGrabbedFour.sap + this.state.oilGrabbedThree.sap + this.state.oilGrabbedTwo.sap + this.state.oilGrabbedOne.sap + this.state.ingredients[e].sap)/5
      this.setState({
        oilGrabbedEight: this.state.ingredients[e],
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
      } else if(this.state.oilGrabbedNine === ""){
        const hardnessVal = (this.state.oilGrabbedEight.hardness + this.state.oilGrabbedSeven.hardness + this.state.oilGrabbedSix.hardness + this.state.oilGrabbedFive.hardness + this.state.oilGrabbedFour.hardness + this.state.oilGrabbedThree.hardness + this.state.oilGrabbedTwo.hardness + this.state.oilGrabbedOne.hardness + this.state.ingredients[e].hardness)/5
        const cleansingVal = (this.state.oilGrabbedEight.cleansing + this.state.oilGrabbedSeven.cleansing + this.state.oilGrabbedSix.cleansing + this.state.oilGrabbedFive.cleansing + this.state.oilGrabbedFour.cleansing + this.state.oilGrabbedThree.cleansing + this.state.oilGrabbedTwo.cleansing + this.state.oilGrabbedOne.cleansing + this.state.ingredients[e].cleansing)/5
        const conditionVal = (this.state.oilGrabbedEight.condition1 + this.state.oilGrabbedSeven.condition1 + this.state.oilGrabbedSix.condition1 + this.state.oilGrabbedFive.condition1 + this.state.oilGrabbedFour.condition1 + this.state.oilGrabbedThree.condition1 + this.state.oilGrabbedTwo.condition1 + this.state.oilGrabbedOne.condition1 + this.state.ingredients[e].condition1)/5
        const bubblyVal = (this.state.oilGrabbedEight.bubbly + this.state.oilGrabbedSeven.bubbly + this.state.oilGrabbedSix.bubbly + this.state.oilGrabbedFive.bubbly + this.state.oilGrabbedFour.bubbly + this.state.oilGrabbedThree.bubbly + this.state.oilGrabbedTwo.bubbly + this.state.oilGrabbedOne.bubbly + this.state.ingredients[e].bubbly)/5
        const creamyVal = (this.state.oilGrabbedEight.creamy + this.state.oilGrabbedSeven.creamy + this.state.oilGrabbedSix.creamy + this.state.oilGrabbedFive.creamy + this.state.oilGrabbedFour.creamy + this.state.oilGrabbedThree.creamy + this.state.oilGrabbedTwo.creamy + this.state.oilGrabbedOne.creamy + this.state.ingredients[e].creamy)/5
        const iodineVal = (this.state.oilGrabbedEight.iodine + this.state.oilGrabbedSeven.iodine + this.state.oilGrabbedSix.iodine + this.state.oilGrabbedFive.iodine + this.state.oilGrabbedFour.iodine + this.state.oilGrabbedThree.iodine + this.state.oilGrabbedTwo.iodine + this.state.oilGrabbedOne.iodine + this.state.ingredients[e].iodine)/5
        const insVal = (this.state.oilGrabbedEight.ins + this.state.oilGrabbedSeven.ins + this.state.oilGrabbedSix.ins + this.state.oilGrabbedFive.ins + this.state.oilGrabbedFour.ins + this.state.oilGrabbedThree.ins + this.state.oilGrabbedTwo.ins + this.state.oilGrabbedOne.ins + this.state.ingredients[e].ins)/3
        const lauricVal = (this.state.oilGrabbedEight.lauric + this.state.oilGrabbedSeven.lauric + this.state.oilGrabbedSix.lauric + this.state.oilGrabbedFive.lauric + this.state.oilGrabbedFour.lauric + this.state.oilGrabbedThree.lauric + this.state.oilGrabbedTwo.lauric + this.state.oilGrabbedOne.lauric + this.state.ingredients[e].lauric)/3
        const myristicVal = (this.state.oilGrabbedEight.myristic + this.state.oilGrabbedSeven.myristic + this.state.oilGrabbedSix.myristic + this.state.oilGrabbedFive.myristic + this.state.oilGrabbedFour.myristic + this.state.oilGrabbedThree.myristic + this.state.oilGrabbedTwo.myristic + this.state.oilGrabbedOne.myristic + this.state.ingredients[e].myristic)/5
        const palmiticVal = (this.state.oilGrabbedEight.palmitic + this.state.oilGrabbedSeven.palmitic + this.state.oilGrabbedSix.palmitic + this.state.oilGrabbedFive.palmitic + this.state.oilGrabbedFour.palmitic + this.state.oilGrabbedThree.palmitic + this.state.oilGrabbedTwo.palmitic + this.state.oilGrabbedOne.palmitic + this.state.ingredients[e].palmitic)/5
        const stearicVal = (this.state.oilGrabbedEight.stearic + this.state.oilGrabbedSeven.stearic + this.state.oilGrabbedSix.stearic + this.state.oilGrabbedFive.stearic + this.state.oilGrabbedFour.stearic + this.state.oilGrabbedThree.stearic + this.state.oilGrabbedTwo.stearic + this.state.oilGrabbedOne.stearic + this.state.ingredients[e].stearic)/5
        const ricinoleicVal = (this.state.oilGrabbedEight.rincinoleic + this.state.oilGrabbedSeven.rincinoleic + this.state.oilGrabbedSix.rincinoleic + this.state.oilGrabbedFive.rincinoleic + this.state.oilGrabbedFour.rincinoleic + this.state.oilGrabbedThree.ricinoleic + this.state.oilGrabbedTwo.ricinoleic + this.state.oilGrabbedOne.ricinoleic + this.state.ingredients[e].ricinoleic)/5
        const oleicVal = (this.state.oilGrabbedEight.oleic + this.state.oilGrabbedSeven.oleic + this.state.oilGrabbedSix.oleic + this.state.oilGrabbedFive.oleic + this.state.oilGrabbedFour.oleic + this.state.oilGrabbedThree.oleic + this.state.oilGrabbedTwo.oleic + this.state.oilGrabbedOne.oleic + this.state.ingredients[e].oleic)/5
        const linoleicVal = (this.state.oilGrabbedEight.linoleic + this.state.oilGrabbedSeven.linoleic + this.state.oilGrabbedSix.linoleic + this.state.oilGrabbedFive.linoleic + this.state.oilGrabbedFour.linoleic + this.state.oilGrabbedThree.linoleic + this.state.oilGrabbedTwo.linoleic + this.state.oilGrabbedOne.linoleic + this.state.ingredients[e].linoleic)/5
        const linolenicVal = (this.state.oilGrabbedEight.linolenic + this.state.oilGrabbedSeven.linolenic + this.state.oilGrabbedSix.linolenic + this.state.oilGrabbedFive.linolenic + this.state.oilGrabbedFour.linolenic + this.state.oilGrabbedThree.linolenic + this.state.oilGrabbedTwo.linolenic + this.state.oilGrabbedOne.linolenic + this.state.ingredients[e].linolenic)/5
        const sapVal = (this.state.oilGrabbedEight.sap + this.state.oilGrabbedSeven.sap + this.state.oilGrabbedSix.sap + this.state.oilGrabbedFive.sap + this.state.oilGrabbedFour.sap + this.state.oilGrabbedThree.sap + this.state.oilGrabbedTwo.sap + this.state.oilGrabbedOne.sap + this.state.ingredients[e].sap)/5
      this.setState({
        oilGrabbedNine: this.state.ingredients[e],
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
      } else if(this.state.oilGrabbedTen === ""){
        const hardnessVal = (this.state.oilGrabbedNine.hardness + this.state.oilGrabbedEight.hardness + this.state.oilGrabbedSeven.hardness + this.state.oilGrabbedSix.hardness + this.state.oilGrabbedFive.hardness + this.state.oilGrabbedFour.hardness + this.state.oilGrabbedThree.hardness + this.state.oilGrabbedTwo.hardness + this.state.oilGrabbedOne.hardness + this.state.ingredients[e].hardness)/5
        const cleansingVal = (this.state.oilGrabbedNine.cleansing + this.state.oilGrabbedEight.cleansing + this.state.oilGrabbedSeven.cleansing + this.state.oilGrabbedSix.cleansing + this.state.oilGrabbedFive.cleansing + this.state.oilGrabbedFour.cleansing + this.state.oilGrabbedThree.cleansing + this.state.oilGrabbedTwo.cleansing + this.state.oilGrabbedOne.cleansing + this.state.ingredients[e].cleansing)/5
        const conditionVal = (this.state.oilGrabbedNine.condition1 + this.state.oilGrabbedEight.condition1 + this.state.oilGrabbedSeven.condition1 + this.state.oilGrabbedSix.condition1 + this.state.oilGrabbedFive.condition1 + this.state.oilGrabbedFour.condition1 + this.state.oilGrabbedThree.condition1 + this.state.oilGrabbedTwo.condition1 + this.state.oilGrabbedOne.condition1 + this.state.ingredients[e].condition1)/5
        const bubblyVal = (this.state.oilGrabbedNine.bubbly + this.state.oilGrabbedEight.bubbly + this.state.oilGrabbedSeven.bubbly + this.state.oilGrabbedSix.bubbly + this.state.oilGrabbedFive.bubbly + this.state.oilGrabbedFour.bubbly + this.state.oilGrabbedThree.bubbly + this.state.oilGrabbedTwo.bubbly + this.state.oilGrabbedOne.bubbly + this.state.ingredients[e].bubbly)/5
        const creamyVal = (this.state.oilGrabbedNine.creamy + this.state.oilGrabbedEight.creamy + this.state.oilGrabbedSeven.creamy + this.state.oilGrabbedSix.creamy + this.state.oilGrabbedFive.creamy + this.state.oilGrabbedFour.creamy + this.state.oilGrabbedThree.creamy + this.state.oilGrabbedTwo.creamy + this.state.oilGrabbedOne.creamy + this.state.ingredients[e].creamy)/5
        const iodineVal = (this.state.oilGrabbedNine.iodine + this.state.oilGrabbedEight.iodine + this.state.oilGrabbedSeven.iodine + this.state.oilGrabbedSix.iodine + this.state.oilGrabbedFive.iodine + this.state.oilGrabbedFour.iodine + this.state.oilGrabbedThree.iodine + this.state.oilGrabbedTwo.iodine + this.state.oilGrabbedOne.iodine + this.state.ingredients[e].iodine)/5
        const insVal = (this.state.oilGrabbedNine.ins + this.state.oilGrabbedEight.ins + this.state.oilGrabbedSeven.ins + this.state.oilGrabbedSix.ins + this.state.oilGrabbedFive.ins + this.state.oilGrabbedFour.ins + this.state.oilGrabbedThree.ins + this.state.oilGrabbedTwo.ins + this.state.oilGrabbedOne.ins + this.state.ingredients[e].ins)/3
        const lauricVal = (this.state.oilGrabbedNine.lauric + this.state.oilGrabbedEight.lauric + this.state.oilGrabbedSeven.lauric + this.state.oilGrabbedSix.lauric + this.state.oilGrabbedFive.lauric + this.state.oilGrabbedFour.lauric + this.state.oilGrabbedThree.lauric + this.state.oilGrabbedTwo.lauric + this.state.oilGrabbedOne.lauric + this.state.ingredients[e].lauric)/3
        const myristicVal = (this.state.oilGrabbedNine.myristic + this.state.oilGrabbedEight.myristic + this.state.oilGrabbedSeven.myristic + this.state.oilGrabbedSix.myristic + this.state.oilGrabbedFive.myristic + this.state.oilGrabbedFour.myristic + this.state.oilGrabbedThree.myristic + this.state.oilGrabbedTwo.myristic + this.state.oilGrabbedOne.myristic + this.state.ingredients[e].myristic)/5
        const palmiticVal = (this.state.oilGrabbedNine.palmitic + this.state.oilGrabbedEight.palmitic + this.state.oilGrabbedSeven.palmitic + this.state.oilGrabbedSix.palmitic + this.state.oilGrabbedFive.palmitic + this.state.oilGrabbedFour.palmitic + this.state.oilGrabbedThree.palmitic + this.state.oilGrabbedTwo.palmitic + this.state.oilGrabbedOne.palmitic + this.state.ingredients[e].palmitic)/5
        const stearicVal = (this.state.oilGrabbedNine.stearic + this.state.oilGrabbedEight.stearic + this.state.oilGrabbedSeven.stearic + this.state.oilGrabbedSix.stearic + this.state.oilGrabbedFive.stearic + this.state.oilGrabbedFour.stearic + this.state.oilGrabbedThree.stearic + this.state.oilGrabbedTwo.stearic + this.state.oilGrabbedOne.stearic + this.state.ingredients[e].stearic)/5
        const ricinoleicVal = (this.state.oilGrabbedNine.rincinoleic + this.state.oilGrabbedEight.rincinoleic + this.state.oilGrabbedSeven.rincinoleic + this.state.oilGrabbedSix.rincinoleic + this.state.oilGrabbedFive.rincinoleic + this.state.oilGrabbedFour.rincinoleic + this.state.oilGrabbedThree.ricinoleic + this.state.oilGrabbedTwo.ricinoleic + this.state.oilGrabbedOne.ricinoleic + this.state.ingredients[e].ricinoleic)/5
        const oleicVal = (this.state.oilGrabbedNine.oleic + this.state.oilGrabbedEight.oleic + this.state.oilGrabbedSeven.oleic + this.state.oilGrabbedSix.oleic + this.state.oilGrabbedFive.oleic + this.state.oilGrabbedFour.oleic + this.state.oilGrabbedThree.oleic + this.state.oilGrabbedTwo.oleic + this.state.oilGrabbedOne.oleic + this.state.ingredients[e].oleic)/5
        const linoleicVal = (this.state.oilGrabbedNine.linoleic + this.state.oilGrabbedEight.linoleic + this.state.oilGrabbedSeven.linoleic + this.state.oilGrabbedSix.linoleic + this.state.oilGrabbedFive.linoleic + this.state.oilGrabbedFour.linoleic + this.state.oilGrabbedThree.linoleic + this.state.oilGrabbedTwo.linoleic + this.state.oilGrabbedOne.linoleic + this.state.ingredients[e].linoleic)/5
        const linolenicVal = (this.state.oilGrabbedNine.linolenic + this.state.oilGrabbedEight.linolenic + this.state.oilGrabbedSeven.linolenic + this.state.oilGrabbedSix.linolenic + this.state.oilGrabbedFive.linolenic + this.state.oilGrabbedFour.linolenic + this.state.oilGrabbedThree.linolenic + this.state.oilGrabbedTwo.linolenic + this.state.oilGrabbedOne.linolenic + this.state.ingredients[e].linolenic)/5
        const sapVal = (this.state.oilGrabbedNine.sap + this.state.oilGrabbedEight.sap + this.state.oilGrabbedSeven.sap + this.state.oilGrabbedSix.sap + this.state.oilGrabbedFive.sap + this.state.oilGrabbedFour.sap + this.state.oilGrabbedThree.sap + this.state.oilGrabbedTwo.sap + this.state.oilGrabbedOne.sap + this.state.ingredients[e].sap)/5
      this.setState({
        oilGrabbedTen: this.state.ingredients[e],
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
      }
    }

    showOilNameOne(){
      if(this.state.oilGrabbedOne !== ""){
        return this.state.oilGrabbedOne.name
      } else{
        return ""
      }
    }

    showOilNameTwo(){
      if(this.state.oilGrabbedTwo !== ""){
        return this.state.oilGrabbedTwo.name
      } else{
        return ""
      }
    }

    showOilNameThree(){
      if(this.state.oilGrabbedThree !== ""){
        return this.state.oilGrabbedThree.name
      } else{
        return ""
      }
    }

    showOilNameFour(){
      if(this.state.oilGrabbedFour !== ""){
        return this.state.oilGrabbedFour.name
      } else{
        return ""
      }
    }

    showOilNameFive(){
      if(this.state.oilGrabbedFive !== ""){
        return this.state.oilGrabbedFive.name
      } else{
        return ""
      }
    }

    showOilNameSix(){
      if(this.state.oilGrabbedSix !== ""){
        return this.state.oilGrabbedSix.name
      } else{
        return ""
      }
    }

    showOilNameSeven(){
      if(this.state.oilGrabbedSeven !== ""){
        return this.state.oilGrabbedSeven.name
      } else{
        return ""
      }
    }

    showOilNameEight(){
      if(this.state.oilGrabbedEight !== ""){
        return this.state.oilGrabbedEight.name
      } else{
        return ""
      }
    }

    showOilNameNine(){
      if(this.state.oilGrabbedNine !== ""){
        return this.state.oilGrabbedNine.name
      } else{
        return ""
      }
    }

    showOilNameTen(){
      if(this.state.oilGrabbedTen !== ""){
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

    showHardnessVal(){
      if(this.state.hardnessVal != ""){
        console.log("hi")
        return this.state.hardnessAll
        console.log("bye")
      }else{
        return ""
        console.log("bubu")
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
              <label>Hardness=<input classname='indentStyleHardness' value={this.state.harndess}/></label><br/>
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
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeOne.bind(this)}/>
                </label>
                <br/>
                <label> 2 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilTwo()}>-</a>
                  <input className="inputTwo" type="text" value={this.showOilNameTwo()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeTwo}/>
                </label>
                <br/>
                <label> 3 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilThree()}>-</a>
                  <input className="inputThree" type="text" value={this.showOilNameThree()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeThree}/>
                </label>
                <br/>
                <label> 4 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilFour()}>-</a>
                  <input className="inputFour" type="text" value={this.showOilNameFour()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeFour}/>
                </label>
                <br/>
                <label> 5 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilFive()}>-</a>
                  <input className="inputFive" type="text" value={this.showOilNameFive()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeFive}/>
                </label>
                <br/>
                <label> 6 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilSix()}>-</a>
                  <input className="inputSix" type="text" value={this.showOilNameSix()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeSix}/>
                </label>
                <br/>
                <label> 7 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilSeven()}>-</a>
                  <input className="inputSeven" type="text" value={this.showOilNameSeven()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeSeven}/>
                </label>
                <br/>
                <label> 8 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilEight()}>-</a>
                  <input className="inputEight" type="text" value={this.showOilNameEight()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeEight}/>
                </label>
                <br/>
                <label> 9 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilNine()}>-</a>
                  <input className="inputNine" type="text" value={this.showOilNameNine()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeNine}/>
                </label>
                <br/>
                <label> 10 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilTen()}>-</a>
                  <input className="inputTen" type="text" value={this.showOilNameTen()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeTen}/>
                </label>
              </form>
          </div>
        </div>
      )
    }
  }
}

export default StepFive
