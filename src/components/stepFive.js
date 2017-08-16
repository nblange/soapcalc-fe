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
        percentageTen: "",
        totalWeight: "",
        weight: false,
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
    totalWeightChange = (e) => {
      this.setState({
        totalWeight: e.target.value,
        weight: true
      })
    }

    weightInputChangeOne= (e) => {
      this.setState({percentageOne: (e.target.value/this.state.totalWeight)})
    }
    percentageInputChangeOne= (e) =>{
      this.setState({percentageOne: (e.target.value/100)})
    }
    percentageInputChangeTwo= (e) =>{
      if(this.state.weight === true){
        console.log("hehe", (e.target.value/this.state.totalWeight))
        console.log("heheha", (this.state.oilGrabbedTwo.hardness * (e.target.value/this.state.totalWeight)) )
        const hardnessVal = ((this.state.oilGrabbedTwo.hardness * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne))
        const cleansingVal = ((this.state.oilGrabbedTwo.cleansing * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne))
        const conditionVal = ((this.state.oilGrabbedTwo.condition1 * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne))
        const bubblyVal = ((this.state.oilGrabbedTwo.bubbly * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne))
        const creamyVal = ((this.state.oilGrabbedTwo.creamy * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne))
        const iodineVal = ((this.state.oilGrabbedTwo.iodine * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne))
        const insVal = ((this.state.oilGrabbedTwo.ins * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne))
        const lauricVal = ((this.state.oilGrabbedTwo.lauric * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne))
        const myristicVal = ((this.state.oilGrabbedTwo.myristic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne))
        const palmiticVal = ((this.state.oilGrabbedTwo.palmitic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne))
        const stearicVal = ((this.state.oilGrabbedTwo.stearic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne))
        const ricinoleicVal = ((this.state.oilGrabbedTwo.ricinoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne))
        const oleicVal = ((this.state.oilGrabbedTwo.oleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne))
        const linoleicVal = ((this.state.oilGrabbedTwo.linoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne))
        const linolenicVal = ((this.state.oilGrabbedTwo.linolenic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne))
        const sapVal = ((this.state.oilGrabbedTwo.sap * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne))
      this.setState({
        percentageTwo: (e.target.value/this.state.totalWeight),
        hardnessAll: Math.round(hardnessVal),
        cleansingAll: Math.round(cleansingVal),
        conditionAll:  Math.round(conditionVal),
        bubblyAll: Math.round(bubblyVal),
        creamyAll: Math.round(creamyVal),
        iodineAll: Math.round(iodineVal),
        insAll: Math.round(insVal),
        lauricAll: Math.round(lauricVal),
        myristicAll: Math.round(myristicVal),
        palmiticAll: Math.round(palmiticVal),
        stearicAll: Math.round(stearicVal),
        ricinoleicAll: Math.round(ricinoleicVal),
        oleicAll: Math.round(oleicVal),
        linoleicAll: Math.round(linoleicVal),
        linolenicAll: Math.round(linolenicVal),
        sapAll: Math.round(sapVal)
      })
    } else{
      const hardnessVal = ((this.state.oilGrabbedTwo.hardness * (e.target.value/100)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne))
      const cleansingVal = ((this.state.oilGrabbedTwo.cleansing * (e.target.value/100)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne))
      const conditionVal = ((this.state.oilGrabbedTwo.condition1 * (e.target.value/100)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne))
      const bubblyVal = ((this.state.oilGrabbedTwo.bubbly * (e.target.value/100)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne))
      const creamyVal = ((this.state.oilGrabbedTwo.creamy * (e.target.value/100)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne))
      const iodineVal = ((this.state.oilGrabbedTwo.iodine * (e.target.value/100)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne))
      const insVal = ((this.state.oilGrabbedTwo.ins * (e.target.value/100)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne))
      const lauricVal = ((this.state.oilGrabbedTwo.lauric * (e.target.value/100)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne))
      const myristicVal = ((this.state.oilGrabbedTwo.myristic * (e.target.value/100)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne))
      const palmiticVal = ((this.state.oilGrabbedTwo.palmitic * (e.target.value/100)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne))
      const stearicVal = ((this.state.oilGrabbedTwo.stearic * (e.target.value/100)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne))
      const ricinoleicVal = ((this.state.oilGrabbedTwo.ricinoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne))
      const oleicVal = ((this.state.oilGrabbedTwo.oleic * (e.target.value/100)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne))
      const linoleicVal = ((this.state.oilGrabbedTwo.linoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne))
      const linolenicVal = ((this.state.oilGrabbedTwo.linolenic * (e.target.value/100)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne))
      const sapVal = ((this.state.oilGrabbedTwo.sap * (e.target.value/100)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne))
      this.setState({
        percentageTwo: (e.target.value/100),
        hardnessAll: Math.round(hardnessVal),
        cleansingAll: Math.round(cleansingVal),
        conditionAll:  Math.round(conditionVal),
        bubblyAll: Math.round(bubblyVal),
        creamyAll: Math.round(creamyVal),
        iodineAll: Math.round(iodineVal),
        insAll: Math.round(insVal),
        lauricAll: Math.round(lauricVal),
        myristicAll: Math.round(myristicVal),
        palmiticAll: Math.round(palmiticVal),
        stearicAll: Math.round(stearicVal),
        ricinoleicAll: Math.round(ricinoleicVal),
        oleicAll: Math.round(oleicVal),
        linoleicAll: Math.round(linoleicVal),
        linolenicAll: Math.round(linolenicVal),
        sapAll: Math.round(sapVal)
      })
    }
  }
    percentageInputChangeThree= (e) =>{
      if(this.state.weight === true){
        const hardnessVal = ((this.state.oilGrabbedThree.hardness * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo))
        const cleansingVal = ((this.state.oilGrabbedThree.cleansing * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo))
        const conditionVal = ((this.state.oilGrabbedThree.condition1 * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo))
        const bubblyVal = ((this.state.oilGrabbedThree.bubbly * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo))
        const creamyVal = ((this.state.oilGrabbedThree.creamy * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo))
        const iodineVal = ((this.state.oilGrabbedThree.iodine * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo))
        const insVal = ((this.state.oilGrabbedThree.ins * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo))
        const lauricVal = ((this.state.oilGrabbedThree.lauric * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo))
        const myristicVal = ((this.state.oilGrabbedThree.myristic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo))
        const palmiticVal = ((this.state.oilGrabbedThree.palmitic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo))
        const stearicVal = ((this.state.oilGrabbedThree.stearic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo))
        const ricinoleicVal = ((this.state.oilGrabbedThree.ricinoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo))
        const oleicVal = ((this.state.oilGrabbedThree.oleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo))
        const linoleicVal = ((this.state.oilGrabbedThree.linoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo))
        const linolenicVal = ((this.state.oilGrabbedThree.linolenic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo))
        const sapVal = ((this.state.oilGrabbedThree.sap * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo))
          this.setState({
            percentageThree: (e.target.value/this.state.totalWeight),
            hardnessAll: Math.round(hardnessVal),
            cleansingAll: Math.round(cleansingVal),
            conditionAll:  Math.round(conditionVal),
            bubblyAll: Math.round(bubblyVal),
            creamyAll: Math.round(creamyVal),
            iodineAll: Math.round(iodineVal),
            insAll: Math.round(insVal),
            lauricAll: Math.round(lauricVal),
            myristicAll: Math.round(myristicVal),
            palmiticAll: Math.round(palmiticVal),
            stearicAll: Math.round(stearicVal),
            ricinoleicAll: Math.round(ricinoleicVal),
            oleicAll: Math.round(oleicVal),
            linoleicAll: Math.round(linoleicVal),
            linolenicAll: Math.round(linolenicVal),
            sapAll: Math.round(sapVal)
        })
      } else {
      const hardnessVal = ((this.state.oilGrabbedThree.hardness * (e.target.value/100)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo))
      const cleansingVal = ((this.state.oilGrabbedThree.cleansing * (e.target.value/100)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo))
      const conditionVal = ((this.state.oilGrabbedThree.condition1 * (e.target.value/100)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo))
      const bubblyVal = ((this.state.oilGrabbedThree.bubbly * (e.target.value/100)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo))
      const creamyVal = ((this.state.oilGrabbedThree.creamy * (e.target.value/100)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo))
      const iodineVal = ((this.state.oilGrabbedThree.iodine * (e.target.value/100)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo))
      const insVal = ((this.state.oilGrabbedThree.ins * (e.target.value/100)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo))
      const lauricVal = ((this.state.oilGrabbedThree.lauric * (e.target.value/100)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo))
      const myristicVal = ((this.state.oilGrabbedThree.myristic * (e.target.value/100)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo))
      const palmiticVal = ((this.state.oilGrabbedThree.palmitic * (e.target.value/100)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo))
      const stearicVal = ((this.state.oilGrabbedThree.stearic * (e.target.value/100)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo))
      const ricinoleicVal = ((this.state.oilGrabbedThree.ricinoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo))
      const oleicVal = ((this.state.oilGrabbedThree.oleic * (e.target.value/100)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo))
      const linoleicVal = ((this.state.oilGrabbedThree.linoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo))
      const linolenicVal = ((this.state.oilGrabbedThree.linolenic * (e.target.value/100)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo))
      const sapVal = ((this.state.oilGrabbedThree.sap * (e.target.value/100)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo))
        this.setState({
          percentageThree: (e.target.value/100),
          hardnessAll: Math.round(hardnessVal),
          cleansingAll: Math.round(cleansingVal),
          conditionAll:  Math.round(conditionVal),
          bubblyAll: Math.round(bubblyVal),
          creamyAll: Math.round(creamyVal),
          iodineAll: Math.round(iodineVal),
          insAll: Math.round(insVal),
          lauricAll: Math.round(lauricVal),
          myristicAll: Math.round(myristicVal),
          palmiticAll: Math.round(palmiticVal),
          stearicAll: Math.round(stearicVal),
          ricinoleicAll: Math.round(ricinoleicVal),
          oleicAll: Math.round(oleicVal),
          linoleicAll: Math.round(linoleicVal),
          linolenicAll: Math.round(linolenicVal),
          sapAll: Math.round(sapVal)
        })
      }
    }
    percentageInputChangeFour= (e) =>{
        if(this.state.weight === true){
      const hardnessVal = ((this.state.oilGrabbedFour.hardness * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree))
      const cleansingVal = ((this.state.oilGrabbedFour.cleansing * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree))
      const conditionVal = ((this.state.oilGrabbedFour.condition1 * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree))
      const bubblyVal = ((this.state.oilGrabbedFour.bubbly * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree))
      const creamyVal = ((this.state.oilGrabbedFour.creamy * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree))
      const iodineVal = ((this.state.oilGrabbedFour.iodine * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree))
      const insVal = ((this.state.oilGrabbedFour.ins * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree))
      const lauricVal = ((this.state.oilGrabbedFour.lauric * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree))
      const myristicVal = ((this.state.oilGrabbedFour.myristic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree))
      const palmiticVal = ((this.state.oilGrabbedFour.palmitic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree))
      const stearicVal = ((this.state.oilGrabbedFour.stearic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree))
      const ricinoleicVal = ((this.state.oilGrabbedFour.ricinoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree))
      const oleicVal = ((this.state.oilGrabbedFour.oleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree))
      const linoleicVal = ((this.state.oilGrabbedFour.linoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree))
      const linolenicVal = ((this.state.oilGrabbedFour.linolenic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree))
      const sapVal = ((this.state.oilGrabbedFour.sap * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree))
        this.setState({
          percentageFour: (e.target.value/this.state.totalWeight),
          hardnessAll: Math.round(hardnessVal),
          cleansingAll: Math.round(cleansingVal),
          conditionAll:  Math.round(conditionVal),
          bubblyAll: Math.round(bubblyVal),
          creamyAll: Math.round(creamyVal),
          iodineAll: Math.round(iodineVal),
          insAll: Math.round(insVal),
          lauricAll: Math.round(lauricVal),
          myristicAll: Math.round(myristicVal),
          palmiticAll: Math.round(palmiticVal),
          stearicAll: Math.round(stearicVal),
          ricinoleicAll: Math.round(ricinoleicVal),
          oleicAll: Math.round(oleicVal),
          linoleicAll: Math.round(linoleicVal),
          linolenicAll: Math.round(linolenicVal),
          sapAll: Math.round(sapVal)

      })
    } else {
      const hardnessVal = ((this.state.oilGrabbedFour.hardness * (e.target.value/100)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree))
      const cleansingVal = ((this.state.oilGrabbedFour.cleansing * (e.target.value/100)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree))
      const conditionVal = ((this.state.oilGrabbedFour.condition1 * (e.target.value/100)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree))
      const bubblyVal = ((this.state.oilGrabbedFour.bubbly * (e.target.value/100)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree))
      const creamyVal = ((this.state.oilGrabbedFour.creamy * (e.target.value/100)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree))
      const iodineVal = ((this.state.oilGrabbedFour.iodine * (e.target.value/100)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree))
      const insVal = ((this.state.oilGrabbedFour.ins * (e.target.value/100)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree))
      const lauricVal = ((this.state.oilGrabbedFour.lauric * (e.target.value/100)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree))
      const myristicVal = ((this.state.oilGrabbedFour.myristic * (e.target.value/100)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree))
      const palmiticVal = ((this.state.oilGrabbedFour.palmitic * (e.target.value/100)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree))
      const stearicVal = ((this.state.oilGrabbedFour.stearic * (e.target.value/100)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree))
      const ricinoleicVal = ((this.state.oilGrabbedFour.ricinoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree))
      const oleicVal = ((this.state.oilGrabbedFour.oleic * (e.target.value/100)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree))
      const linoleicVal = ((this.state.oilGrabbedFour.linoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree))
      const linolenicVal = ((this.state.oilGrabbedFour.linolenic * (e.target.value/100)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree))
      const sapVal = ((this.state.oilGrabbedFour.sap * (e.target.value/100)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree))
        this.setState({
          percentageFour: (e.target.value/100),
          hardnessAll: Math.round(hardnessVal),
          cleansingAll: Math.round(cleansingVal),
          conditionAll:  Math.round(conditionVal),
          bubblyAll: Math.round(bubblyVal),
          creamyAll: Math.round(creamyVal),
          iodineAll: Math.round(iodineVal),
          insAll: Math.round(insVal),
          lauricAll: Math.round(lauricVal),
          myristicAll: Math.round(myristicVal),
          palmiticAll: Math.round(palmiticVal),
          stearicAll: Math.round(stearicVal),
          ricinoleicAll: Math.round(ricinoleicVal),
          oleicAll: Math.round(oleicVal),
          linoleicAll: Math.round(linoleicVal),
          linolenicAll: Math.round(linolenicVal),
          sapAll: Math.round(sapVal)
      })
    }
    }
    percentageInputChangeFive= (e) =>{
        if(this.state.weight === true){
      const hardnessVal = ((this.state.oilGrabbedFive.hardness * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree) + (this.state.oilGrabbedFour.hardness * this.state.percentageFour))
      const cleansingVal = ((this.state.oilGrabbedFive.cleansing * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree) + (this.state.oilGrabbedFour.cleansing * this.state.percentageFour))
      const conditionVal = ((this.state.oilGrabbedFive.condition1 * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree) + (this.state.oilGrabbedFour.condition1 * this.state.percentageFour))
      const bubblyVal = ((this.state.oilGrabbedFive.bubbly * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree) + (this.state.oilGrabbedFour.bubbly * this.state.percentageFour))
      const creamyVal = ((this.state.oilGrabbedFive.creamy * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree) + (this.state.oilGrabbedFour.creamy * this.state.percentageFour))
      const iodineVal = ((this.state.oilGrabbedFive.iodine * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree) + (this.state.oilGrabbedFour.iodine * this.state.percentageFour))
      const insVal = ((this.state.oilGrabbedFive.ins * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree) + (this.state.oilGrabbedFour.ins * this.state.percentageFour))
      const lauricVal = ((this.state.oilGrabbedFive.lauric * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree) + (this.state.oilGrabbedFour.lauric * this.state.percentageFour))
      const myristicVal = ((this.state.oilGrabbedFive.myristic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree) + (this.state.oilGrabbedFour.myristic * this.state.percentageFour))
      const palmiticVal = ((this.state.oilGrabbedFive.palmitic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree) + (this.state.oilGrabbedFour.palmitic * this.state.percentageFour))
      const stearicVal = ((this.state.oilGrabbedFive.stearic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree) + (this.state.oilGrabbedFour.stearic * this.state.percentageFour))
      const ricinoleicVal = ((this.state.oilGrabbedFive.ricinoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.ricinoleic * this.state.percentageFour))
      const oleicVal = ((this.state.oilGrabbedFive.oleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree) + (this.state.oilGrabbedFour.oleic * this.state.percentageFour))
      const linoleicVal = ((this.state.oilGrabbedFive.linoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.linoleic * this.state.percentageFour))
      const linolenicVal = ((this.state.oilGrabbedFive.linolenic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree) + (this.state.oilGrabbedFour.linolenic * this.state.percentageFour))
      const sapVal = ((this.state.oilGrabbedFive.sap * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree) + (this.state.oilGrabbedFour.sap * this.state.percentageFour))
        this.setState({
          percentageFive: (e.target.value/this.state.totalWeight),
          hardnessAll: Math.round(hardnessVal),
          cleansingAll: Math.round(cleansingVal),
          conditionAll:  Math.round(conditionVal),
          bubblyAll: Math.round(bubblyVal),
          creamyAll: Math.round(creamyVal),
          iodineAll: Math.round(iodineVal),
          insAll: Math.round(insVal),
          lauricAll: Math.round(lauricVal),
          myristicAll: Math.round(myristicVal),
          palmiticAll: Math.round(palmiticVal),
          stearicAll: Math.round(stearicVal),
          ricinoleicAll: Math.round(ricinoleicVal),
          oleicAll: Math.round(oleicVal),
          linoleicAll: Math.round(linoleicVal),
          linolenicAll: Math.round(linolenicVal),
          sapAll: Math.round(sapVal)

      })
    } else {
      const hardnessVal = ((this.state.oilGrabbedFive.hardness * (e.target.value/100)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree) + (this.state.oilGrabbedFour.hardness * this.state.percentageFour))
      const cleansingVal = ((this.state.oilGrabbedFive.cleansing * (e.target.value/100)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree) + (this.state.oilGrabbedFour.cleansing * this.state.percentageFour))
      const conditionVal = ((this.state.oilGrabbedFive.condition1 * (e.target.value/100)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree) + (this.state.oilGrabbedFour.condition1 * this.state.percentageFour))
      const bubblyVal = ((this.state.oilGrabbedFive.bubbly * (e.target.value/100)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree) + (this.state.oilGrabbedFour.bubbly * this.state.percentageFour))
      const creamyVal = ((this.state.oilGrabbedFive.creamy * (e.target.value/100)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree) + (this.state.oilGrabbedFour.creamy * this.state.percentageFour))
      const iodineVal = ((this.state.oilGrabbedFive.iodine * (e.target.value/100)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree) + (this.state.oilGrabbedFour.iodine * this.state.percentageFour))
      const insVal = ((this.state.oilGrabbedFive.ins * (e.target.value/100)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree) + (this.state.oilGrabbedFour.ins * this.state.percentageFour))
      const lauricVal = ((this.state.oilGrabbedFive.lauric * (e.target.value/100)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree) + (this.state.oilGrabbedFour.lauric * this.state.percentageFour))
      const myristicVal = ((this.state.oilGrabbedFive.myristic * (e.target.value/100)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree) + (this.state.oilGrabbedFour.myristic * this.state.percentageFour))
      const palmiticVal = ((this.state.oilGrabbedFive.palmitic * (e.target.value/100)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree) + (this.state.oilGrabbedFour.palmitic * this.state.percentageFour))
      const stearicVal = ((this.state.oilGrabbedFive.stearic * (e.target.value/100)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree) + (this.state.oilGrabbedFour.stearic * this.state.percentageFour))
      const ricinoleicVal = ((this.state.oilGrabbedFive.ricinoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.ricinoleic * this.state.percentageFour))
      const oleicVal = ((this.state.oilGrabbedFive.oleic * (e.target.value/100)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree) + (this.state.oilGrabbedFour.oleic * this.state.percentageFour))
      const linoleicVal = ((this.state.oilGrabbedFive.linoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.linoleic * this.state.percentageFour))
      const linolenicVal = ((this.state.oilGrabbedFive.linolenic * (e.target.value/100)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree) + (this.state.oilGrabbedFour.linolenic * this.state.percentageFour))
      const sapVal = ((this.state.oilGrabbedFive.sap * (e.target.value/100)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree) + (this.state.oilGrabbedFour.sap * this.state.percentageFour))
        this.setState({
          percentageFive: (e.target.value/100),
          hardnessAll: Math.round(hardnessVal),
          cleansingAll: Math.round(cleansingVal),
          conditionAll:  Math.round(conditionVal),
          bubblyAll: Math.round(bubblyVal),
          creamyAll: Math.round(creamyVal),
          iodineAll: Math.round(iodineVal),
          insAll: Math.round(insVal),
          lauricAll: Math.round(lauricVal),
          myristicAll: Math.round(myristicVal),
          palmiticAll: Math.round(palmiticVal),
          stearicAll: Math.round(stearicVal),
          ricinoleicAll: Math.round(ricinoleicVal),
          oleicAll: Math.round(oleicVal),
          linoleicAll: Math.round(linoleicVal),
          linolenicAll: Math.round(linolenicVal),
          sapAll: Math.round(sapVal)
    })
    }
  }
    percentageInputChangeSix= (e) =>{
      if(this.state.weight === true){
      const hardnessVal = ((this.state.oilGrabbedSix.hardness * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree) + (this.state.oilGrabbedFour.hardness * this.state.percentageFour) + (this.state.oilGrabbedFive.hardness * this.state.percentageFive))
      const cleansingVal = ((this.state.oilGrabbedSix.cleansing * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree) + (this.state.oilGrabbedFour.cleansing * this.state.percentageFour) + (this.state.oilGrabbedFive.cleansing * this.state.percentageFive))
      const conditionVal = ((this.state.oilGrabbedSix.condition1 * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree) + (this.state.oilGrabbedFour.condition1 * this.state.percentageFour) + (this.state.oilGrabbedFive.condition1 * this.state.percentageFive))
      const bubblyVal = ((this.state.oilGrabbedSix.bubbly * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree) + (this.state.oilGrabbedFour.bubbly * this.state.percentageFour) + (this.state.oilGrabbedFive.bubbly * this.state.percentageFive))
      const creamyVal = ((this.state.oilGrabbedSix.creamy * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree) + (this.state.oilGrabbedFour.creamy * this.state.percentageFour) + (this.state.oilGrabbedFive.creamy * this.state.percentageFive))
      const iodineVal = ((this.state.oilGrabbedSix.iodine * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree) + (this.state.oilGrabbedFour.iodine * this.state.percentageFour) + (this.state.oilGrabbedFive.iodine * this.state.percentageFive))
      const insVal = ((this.state.oilGrabbedSix.ins * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree) + (this.state.oilGrabbedFour.ins * this.state.percentageFour) + (this.state.oilGrabbedFive.ins * this.state.percentageFive))
      const lauricVal = ((this.state.oilGrabbedSix.lauric * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree) + (this.state.oilGrabbedFour.lauric * this.state.percentageFour) + (this.state.oilGrabbedFive.lauric* this.state.percentageFive))
      const myristicVal = ((this.state.oilGrabbedSix.myristic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree) + (this.state.oilGrabbedFour.myristic * this.state.percentageFour) + (this.state.oilGrabbedFive.myristic * this.state.percentageFive))
      const palmiticVal = ((this.state.oilGrabbedSix.palmitic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree) + (this.state.oilGrabbedFour.palmitic * this.state.percentageFour) + (this.state.oilGrabbedFive.palmitic * this.state.percentageFive))
      const stearicVal = ((this.state.oilGrabbedSix.stearic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree) + (this.state.oilGrabbedFour.stearic * this.state.percentageFour) + (this.state.oilGrabbedFive.stearic * this.state.percentageFive))
      const ricinoleicVal = ((this.state.oilGrabbedSix.ricinoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.ricinoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.ricinoleic * this.state.percentageFive))
      const oleicVal = ((this.state.oilGrabbedSix.oleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree) + (this.state.oilGrabbedFour.oleic * this.state.percentageFour) + (this.state.oilGrabbedFive.oleic * this.state.percentageFive))
      const linoleicVal = ((this.state.oilGrabbedSix.linoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.linoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.linoleic * this.state.percentageFive))
      const linolenicVal = ((this.state.oilGrabbedSix.linolenic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree) + (this.state.oilGrabbedFour.linolenic * this.state.percentageFour) + (this.state.oilGrabbedFive.linolenic * this.state.percentageFive))
      const sapVal = ((this.state.oilGrabbedSix.sap * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree) + (this.state.oilGrabbedFour.sap * this.state.percentageFour) + (this.state.oilGrabbedFive.sap * this.state.percentageFive))
        this.setState({
          percentageSix: (e.target.value/this.state.totalWeight),
          hardnessAll: Math.round(hardnessVal),
          cleansingAll: Math.round(cleansingVal),
          conditionAll:  Math.round(conditionVal),
          bubblyAll: Math.round(bubblyVal),
          creamyAll: Math.round(creamyVal),
          iodineAll: Math.round(iodineVal),
          insAll: Math.round(insVal),
          lauricAll: Math.round(lauricVal),
          myristicAll: Math.round(myristicVal),
          palmiticAll: Math.round(palmiticVal),
          stearicAll: Math.round(stearicVal),
          ricinoleicAll: Math.round(ricinoleicVal),
          oleicAll: Math.round(oleicVal),
          linoleicAll: Math.round(linoleicVal),
          linolenicAll: Math.round(linolenicVal),
          sapAll: Math.round(sapVal)
      })
    } else {
      const hardnessVal = ((this.state.oilGrabbedSix.hardness * (e.target.value/100)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree) + (this.state.oilGrabbedFour.hardness * this.state.percentageFour) + (this.state.oilGrabbedFive.hardness * this.state.percentageFive))
      const cleansingVal = ((this.state.oilGrabbedSix.cleansing * (e.target.value/100)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree) + (this.state.oilGrabbedFour.cleansing * this.state.percentageFour) + (this.state.oilGrabbedFive.cleansing * this.state.percentageFive))
      const conditionVal = ((this.state.oilGrabbedSix.condition1 * (e.target.value/100)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree) + (this.state.oilGrabbedFour.condition1 * this.state.percentageFour) + (this.state.oilGrabbedFive.condition1 * this.state.percentageFive))
      const bubblyVal = ((this.state.oilGrabbedSix.bubbly * (e.target.value/100)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree) + (this.state.oilGrabbedFour.bubbly * this.state.percentageFour) + (this.state.oilGrabbedFive.bubbly * this.state.percentageFive))
      const creamyVal = ((this.state.oilGrabbedSix.creamy * (e.target.value/100)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree) + (this.state.oilGrabbedFour.creamy * this.state.percentageFour) + (this.state.oilGrabbedFive.creamy * this.state.percentageFive))
      const iodineVal = ((this.state.oilGrabbedSix.iodine * (e.target.value/100)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree) + (this.state.oilGrabbedFour.iodine * this.state.percentageFour) + (this.state.oilGrabbedFive.iodine * this.state.percentageFive))
      const insVal = ((this.state.oilGrabbedSix.ins * (e.target.value/100)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree) + (this.state.oilGrabbedFour.ins * this.state.percentageFour) + (this.state.oilGrabbedFive.ins * this.state.percentageFive))
      const lauricVal = ((this.state.oilGrabbedSix.lauric * (e.target.value/100)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree) + (this.state.oilGrabbedFour.lauric * this.state.percentageFour) + (this.state.oilGrabbedFive.lauric* this.state.percentageFive))
      const myristicVal = ((this.state.oilGrabbedSix.myristic * (e.target.value/100)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree) + (this.state.oilGrabbedFour.myristic * this.state.percentageFour) + (this.state.oilGrabbedFive.myristic * this.state.percentageFive))
      const palmiticVal = ((this.state.oilGrabbedSix.palmitic * (e.target.value/100)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree) + (this.state.oilGrabbedFour.palmitic * this.state.percentageFour) + (this.state.oilGrabbedFive.palmitic * this.state.percentageFive))
      const stearicVal = ((this.state.oilGrabbedSix.stearic * (e.target.value/100)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree) + (this.state.oilGrabbedFour.stearic * this.state.percentageFour) + (this.state.oilGrabbedFive.stearic * this.state.percentageFive))
      const ricinoleicVal = ((this.state.oilGrabbedSix.ricinoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.ricinoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.ricinoleic * this.state.percentageFive))
      const oleicVal = ((this.state.oilGrabbedSix.oleic * (e.target.value/100)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree) + (this.state.oilGrabbedFour.oleic * this.state.percentageFour) + (this.state.oilGrabbedFive.oleic * this.state.percentageFive))
      const linoleicVal = ((this.state.oilGrabbedSix.linoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.linoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.linoleic * this.state.percentageFive))
      const linolenicVal = ((this.state.oilGrabbedSix.linolenic * (e.target.value/100)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree) + (this.state.oilGrabbedFour.linolenic * this.state.percentageFour) + (this.state.oilGrabbedFive.linolenic * this.state.percentageFive))
      const sapVal = ((this.state.oilGrabbedSix.sap * (e.target.value/100)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree) + (this.state.oilGrabbedFour.sap * this.state.percentageFour) + (this.state.oilGrabbedFive.sap * this.state.percentageFive))
        this.setState({
          percentageSix: (e.target.value/100),
          hardnessAll: Math.round(hardnessVal),
          cleansingAll: Math.round(cleansingVal),
          conditionAll:  Math.round(conditionVal),
          bubblyAll: Math.round(bubblyVal),
          creamyAll: Math.round(creamyVal),
          iodineAll: Math.round(iodineVal),
          insAll: Math.round(insVal),
          lauricAll: Math.round(lauricVal),
          myristicAll: Math.round(myristicVal),
          palmiticAll: Math.round(palmiticVal),
          stearicAll: Math.round(stearicVal),
          ricinoleicAll: Math.round(ricinoleicVal),
          oleicAll: Math.round(oleicVal),
          linoleicAll: Math.round(linoleicVal),
          linolenicAll: Math.round(linolenicVal),
          sapAll: Math.round(sapVal)
      })
    }
    }
    percentageInputChangeSeven= (e) =>{
          if(this.state.weight === true){
      const hardnessVal = ((this.state.oilGrabbedSeven.hardness * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree) + (this.state.oilGrabbedFour.hardness * this.state.percentageFour) + (this.state.oilGrabbedFive.hardness * this.state.percentageFive) + (this.state.oilGrabbedSix.hardness * this.state.percentageSix))
      const cleansingVal = ((this.state.oilGrabbedSeven.cleansing * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree) + (this.state.oilGrabbedFour.cleansing * this.state.percentageFour) + (this.state.oilGrabbedFive.cleansing * this.state.percentageFive) + (this.state.oilGrabbedSix.cleansing * this.state.percentageSix))
      const conditionVal = ((this.state.oilGrabbedSeven.condition1 * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree) + (this.state.oilGrabbedFour.condition1 * this.state.percentageFour) + (this.state.oilGrabbedFive.condition1 * this.state.percentageFive) + (this.state.oilGrabbedSix.condition1 * this.state.percentageSix))
      const bubblyVal = ((this.state.oilGrabbedSeven.bubbly * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree) + (this.state.oilGrabbedFour.bubbly * this.state.percentageFour) + (this.state.oilGrabbedFive.bubbly * this.state.percentageFive) + (this.state.oilGrabbedSix.bubbly * this.state.percentageSix))
      const creamyVal = ((this.state.oilGrabbedSeven.creamy * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree) + (this.state.oilGrabbedFour.creamy * this.state.percentageFour) + (this.state.oilGrabbedFive.creamy * this.state.percentageFive) + (this.state.oilGrabbedSix.creamy * this.state.percentageSix))
      const iodineVal = ((this.state.oilGrabbedSeven.iodine * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree) + (this.state.oilGrabbedFour.iodine * this.state.percentageFour) + (this.state.oilGrabbedFive.iodine * this.state.percentageFive) + (this.state.oilGrabbedSix.iodine * this.state.percentageSix))
      const insVal = ((this.state.oilGrabbedSeven.ins * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree) + (this.state.oilGrabbedFour.ins * this.state.percentageFour) + (this.state.oilGrabbedFive.ins * this.state.percentageFive) + (this.state.oilGrabbedSix.ins * this.state.percentageSix))
      const lauricVal = ((this.state.oilGrabbedSeven.lauric * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree) + (this.state.oilGrabbedFour.lauric * this.state.percentageFour) + (this.state.oilGrabbedFive.lauric* this.state.percentageFive) + (this.state.oilGrabbedSix.lauric * this.state.percentageSix))
      const myristicVal = ((this.state.oilGrabbedSeven.myristic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree) + (this.state.oilGrabbedFour.myristic * this.state.percentageFour) + (this.state.oilGrabbedFive.myristic * this.state.percentageFive) + (this.state.oilGrabbedSix.myristic * this.state.percentageSix))
      const palmiticVal = ((this.state.oilGrabbedSeven.palmitic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree) + (this.state.oilGrabbedFour.palmitic * this.state.percentageFour) + (this.state.oilGrabbedFive.palmitic * this.state.percentageFive) + (this.state.oilGrabbedSix.palmitic * this.state.percentageSix))
      const stearicVal = ((this.state.oilGrabbedSeven.stearic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree) + (this.state.oilGrabbedFour.stearic * this.state.percentageFour) + (this.state.oilGrabbedFive.stearic * this.state.percentageFive) + (this.state.oilGrabbedSix.stearic * this.state.percentageSix))
      const ricinoleicVal = ((this.state.oilGrabbedSeven.ricinoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.ricinoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.ricinoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.ricinoleic * this.state.percentageSix))
      const oleicVal = ((this.state.oilGrabbedSeven.oleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree) + (this.state.oilGrabbedFour.oleic * this.state.percentageFour) + (this.state.oilGrabbedFive.oleic * this.state.percentageFive) + (this.state.oilGrabbedSix.oleic * this.state.percentageSix))
      const linoleicVal = ((this.state.oilGrabbedSeven.linoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.linoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.linoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.linoleic * this.state.percentageSix))
      const linolenicVal = ((this.state.oilGrabbedSeven.linolenic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree) + (this.state.oilGrabbedFour.linolenic * this.state.percentageFour) + (this.state.oilGrabbedFive.linolenic * this.state.percentageFive) + (this.state.oilGrabbedSix.linolenic * this.state.percentageSix))
      const sapVal = ((this.state.oilGrabbedSeven.sap * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree) + (this.state.oilGrabbedFour.sap * this.state.percentageFour) + (this.state.oilGrabbedFive.sap * this.state.percentageFive) + (this.state.oilGrabbedSix.sap * this.state.percentageSix))
      this.setState({
        percentageSeven: (e.target.value/this.state.totalWeight),
        hardnessAll: Math.round(hardnessVal),
        cleansingAll: Math.round(cleansingVal),
        conditionAll:  Math.round(conditionVal),
        bubblyAll: Math.round(bubblyVal),
        creamyAll: Math.round(creamyVal),
        iodineAll: Math.round(iodineVal),
        insAll: Math.round(insVal),
        lauricAll: Math.round(lauricVal),
        myristicAll: Math.round(myristicVal),
        palmiticAll: Math.round(palmiticVal),
        stearicAll: Math.round(stearicVal),
        ricinoleicAll: Math.round(ricinoleicVal),
        oleicAll: Math.round(oleicVal),
        linoleicAll: Math.round(linoleicVal),
        linolenicAll: Math.round(linolenicVal),
        sapAll: Math.round(sapVal)
      })
    } else {
      const hardnessVal = ((this.state.oilGrabbedSeven.hardness * (e.target.value/100)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree) + (this.state.oilGrabbedFour.hardness * this.state.percentageFour) + (this.state.oilGrabbedFive.hardness * this.state.percentageFive) + (this.state.oilGrabbedSix.hardness * this.state.percentageSix))
      const cleansingVal = ((this.state.oilGrabbedSeven.cleansing * (e.target.value/100)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree) + (this.state.oilGrabbedFour.cleansing * this.state.percentageFour) + (this.state.oilGrabbedFive.cleansing * this.state.percentageFive) + (this.state.oilGrabbedSix.cleansing * this.state.percentageSix))
      const conditionVal = ((this.state.oilGrabbedSeven.condition1 * (e.target.value/100)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree) + (this.state.oilGrabbedFour.condition1 * this.state.percentageFour) + (this.state.oilGrabbedFive.condition1 * this.state.percentageFive) + (this.state.oilGrabbedSix.condition1 * this.state.percentageSix))
      const bubblyVal = ((this.state.oilGrabbedSeven.bubbly * (e.target.value/100)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree) + (this.state.oilGrabbedFour.bubbly * this.state.percentageFour) + (this.state.oilGrabbedFive.bubbly * this.state.percentageFive) + (this.state.oilGrabbedSix.bubbly * this.state.percentageSix))
      const creamyVal = ((this.state.oilGrabbedSeven.creamy * (e.target.value/100)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree) + (this.state.oilGrabbedFour.creamy * this.state.percentageFour) + (this.state.oilGrabbedFive.creamy * this.state.percentageFive) + (this.state.oilGrabbedSix.creamy * this.state.percentageSix))
      const iodineVal = ((this.state.oilGrabbedSeven.iodine * (e.target.value/100)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree) + (this.state.oilGrabbedFour.iodine * this.state.percentageFour) + (this.state.oilGrabbedFive.iodine * this.state.percentageFive) + (this.state.oilGrabbedSix.iodine * this.state.percentageSix))
      const insVal = ((this.state.oilGrabbedSeven.ins * (e.target.value/100)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree) + (this.state.oilGrabbedFour.ins * this.state.percentageFour) + (this.state.oilGrabbedFive.ins * this.state.percentageFive) + (this.state.oilGrabbedSix.ins * this.state.percentageSix))
      const lauricVal = ((this.state.oilGrabbedSeven.lauric * (e.target.value/100)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree) + (this.state.oilGrabbedFour.lauric * this.state.percentageFour) + (this.state.oilGrabbedFive.lauric* this.state.percentageFive) + (this.state.oilGrabbedSix.lauric * this.state.percentageSix))
      const myristicVal = ((this.state.oilGrabbedSeven.myristic * (e.target.value/100)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree) + (this.state.oilGrabbedFour.myristic * this.state.percentageFour) + (this.state.oilGrabbedFive.myristic * this.state.percentageFive) + (this.state.oilGrabbedSix.myristic * this.state.percentageSix))
      const palmiticVal = ((this.state.oilGrabbedSeven.palmitic * (e.target.value/100)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree) + (this.state.oilGrabbedFour.palmitic * this.state.percentageFour) + (this.state.oilGrabbedFive.palmitic * this.state.percentageFive) + (this.state.oilGrabbedSix.palmitic * this.state.percentageSix))
      const stearicVal = ((this.state.oilGrabbedSeven.stearic * (e.target.value/100)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree) + (this.state.oilGrabbedFour.stearic * this.state.percentageFour) + (this.state.oilGrabbedFive.stearic * this.state.percentageFive) + (this.state.oilGrabbedSix.stearic * this.state.percentageSix))
      const ricinoleicVal = ((this.state.oilGrabbedSeven.ricinoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.ricinoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.ricinoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.ricinoleic * this.state.percentageSix))
      const oleicVal = ((this.state.oilGrabbedSeven.oleic * (e.target.value/100)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree) + (this.state.oilGrabbedFour.oleic * this.state.percentageFour) + (this.state.oilGrabbedFive.oleic * this.state.percentageFive) + (this.state.oilGrabbedSix.oleic * this.state.percentageSix))
      const linoleicVal = ((this.state.oilGrabbedSeven.linoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.linoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.linoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.linoleic * this.state.percentageSix))
      const linolenicVal = ((this.state.oilGrabbedSeven.linolenic * (e.target.value/100)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree) + (this.state.oilGrabbedFour.linolenic * this.state.percentageFour) + (this.state.oilGrabbedFive.linolenic * this.state.percentageFive) + (this.state.oilGrabbedSix.linolenic * this.state.percentageSix))
      const sapVal = ((this.state.oilGrabbedSeven.sap * (e.target.value/100)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree) + (this.state.oilGrabbedFour.sap * this.state.percentageFour) + (this.state.oilGrabbedFive.sap * this.state.percentageFive) + (this.state.oilGrabbedSix.sap * this.state.percentageSix))
      this.setState({
        percentageSeven: (e.target.value/100),
        hardnessAll: Math.round(hardnessVal),
        cleansingAll: Math.round(cleansingVal),
        conditionAll:  Math.round(conditionVal),
        bubblyAll: Math.round(bubblyVal),
        creamyAll: Math.round(creamyVal),
        iodineAll: Math.round(iodineVal),
        insAll: Math.round(insVal),
        lauricAll: Math.round(lauricVal),
        myristicAll: Math.round(myristicVal),
        palmiticAll: Math.round(palmiticVal),
        stearicAll: Math.round(stearicVal),
        ricinoleicAll: Math.round(ricinoleicVal),
        oleicAll: Math.round(oleicVal),
        linoleicAll: Math.round(linoleicVal),
        linolenicAll: Math.round(linolenicVal),
        sapAll: Math.round(sapVal)
      })
    }
  }
    percentageInputChangeEight= (e) =>{
      if(this.state.weight === true){
      const hardnessVal = ((this.state.oilGrabbedEight.hardness * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree) + (this.state.oilGrabbedFour.hardness * this.state.percentageFour) + (this.state.oilGrabbedFive.hardness * this.state.percentageFive) + (this.state.oilGrabbedSix.hardness * this.state.percentageSix) + (this.state.oilGrabbedSeven.hardness * this.state.percentageSeven))
      const cleansingVal = ((this.state.oilGrabbedEight.cleansing * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree) + (this.state.oilGrabbedFour.cleansing * this.state.percentageFour) + (this.state.oilGrabbedFive.cleansing * this.state.percentageFive) + (this.state.oilGrabbedSix.cleansing * this.state.percentageSix) + (this.state.oilGrabbedSeven.cleansing * this.state.percentageSeven))
      const conditionVal = ((this.state.oilGrabbedEight.condition1 * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree) + (this.state.oilGrabbedFour.condition1 * this.state.percentageFour) + (this.state.oilGrabbedFive.condition1 * this.state.percentageFive) + (this.state.oilGrabbedSix.condition1 * this.state.percentageSix) + (this.state.oilGrabbedSeven.condition1 * this.state.percentageSeven))
      const bubblyVal = ((this.state.oilGrabbedEight.bubbly * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree) + (this.state.oilGrabbedFour.bubbly * this.state.percentageFour) + (this.state.oilGrabbedFive.bubbly * this.state.percentageFive) + (this.state.oilGrabbedSix.bubbly * this.state.percentageSix) + (this.state.oilGrabbedSeven.bubbly * this.state.percentageSeven))
      const creamyVal = ((this.state.oilGrabbedEight.creamy * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree) + (this.state.oilGrabbedFour.creamy * this.state.percentageFour) + (this.state.oilGrabbedFive.creamy * this.state.percentageFive) + (this.state.oilGrabbedSix.creamy * this.state.percentageSix) + (this.state.oilGrabbedSeven.creamy * this.state.percentageSeven))
      const iodineVal = ((this.state.oilGrabbedEight.iodine * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree) + (this.state.oilGrabbedFour.iodine * this.state.percentageFour) + (this.state.oilGrabbedFive.iodine * this.state.percentageFive) + (this.state.oilGrabbedSix.iodine * this.state.percentageSix) + (this.state.oilGrabbedSeven.iodine * this.state.percentageSeven))
      const insVal = ((this.state.oilGrabbedEight.ins * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree) + (this.state.oilGrabbedFour.ins * this.state.percentageFour) + (this.state.oilGrabbedFive.ins * this.state.percentageFive) + (this.state.oilGrabbedSix.ins * this.state.percentageSix) + (this.state.oilGrabbedSeven.ins * this.state.percentageSeven))
      const lauricVal = ((this.state.oilGrabbedEight.lauric * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree) + (this.state.oilGrabbedFour.lauric * this.state.percentageFour) + (this.state.oilGrabbedFive.lauric* this.state.percentageFive) + (this.state.oilGrabbedSix.lauric * this.state.percentageSix) + (this.state.oilGrabbedSeven.lauric * this.state.percentageSeven))
      const myristicVal = ((this.state.oilGrabbedEight.myristic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree) + (this.state.oilGrabbedFour.myristic * this.state.percentageFour) + (this.state.oilGrabbedFive.myristic * this.state.percentageFive) + (this.state.oilGrabbedSix.myristic * this.state.percentageSix) + (this.state.oilGrabbedSeven.myristic * this.state.percentageSeven))
      const palmiticVal = ((this.state.oilGrabbedEight.palmitic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree) + (this.state.oilGrabbedFour.palmitic * this.state.percentageFour) + (this.state.oilGrabbedFive.palmitic * this.state.percentageFive) + (this.state.oilGrabbedSix.palmitic * this.state.percentageSix) + (this.state.oilGrabbedSeven.palmitic * this.state.percentageSeven))
      const stearicVal = ((this.state.oilGrabbedEight.stearic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree) + (this.state.oilGrabbedFour.stearic * this.state.percentageFour) + (this.state.oilGrabbedFive.stearic * this.state.percentageFive) + (this.state.oilGrabbedSix.stearic * this.state.percentageSix) + (this.state.oilGrabbedSeven.stearic * this.state.percentageSeven))
      const ricinoleicVal = ((this.state.oilGrabbedEight.ricinoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.ricinoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.ricinoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.ricinoleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.ricinoleic * this.state.percentageSeven))
      const oleicVal = ((this.state.oilGrabbedEight.oleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree) + (this.state.oilGrabbedFour.oleic * this.state.percentageFour) + (this.state.oilGrabbedFive.oleic * this.state.percentageFive) + (this.state.oilGrabbedSix.oleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.oleic * this.state.percentageSeven))
      const linoleicVal = ((this.state.oilGrabbedEight.linoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.linoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.linoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.linoleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.linoleic * this.state.percentageSeven))
      const linolenicVal = ((this.state.oilGrabbedEight.linolenic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree) + (this.state.oilGrabbedFour.linolenic * this.state.percentageFour) + (this.state.oilGrabbedFive.linolenic * this.state.percentageFive) + (this.state.oilGrabbedSix.linolenic * this.state.percentageSix) + (this.state.oilGrabbedSeven.linolenic * this.state.percentageSeven))
      const sapVal = ((this.state.oilGrabbedEight.sap * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree) + (this.state.oilGrabbedFour.sap * this.state.percentageFour) + (this.state.oilGrabbedFive.sap * this.state.percentageFive) + (this.state.oilGrabbedSix.sap * this.state.percentageSix) + (this.state.oilGrabbedSeven.sap * this.state.percentageSeven))
      this.setState({
        percentageEight: (e.target.value/this.state.totalWeight),
        hardnessAll: Math.round(hardnessVal),
        cleansingAll: Math.round(cleansingVal),
        conditionAll:  Math.round(conditionVal),
        bubblyAll: Math.round(bubblyVal),
        creamyAll: Math.round(creamyVal),
        iodineAll: Math.round(iodineVal),
        insAll: Math.round(insVal),
        lauricAll: Math.round(lauricVal),
        myristicAll: Math.round(myristicVal),
        palmiticAll: Math.round(palmiticVal),
        stearicAll: Math.round(stearicVal),
        ricinoleicAll: Math.round(ricinoleicVal),
        oleicAll: Math.round(oleicVal),
        linoleicAll: Math.round(linoleicVal),
        linolenicAll: Math.round(linolenicVal),
        sapAll: Math.round(sapVal)
      })
    } else {
      const hardnessVal = ((this.state.oilGrabbedEight.hardness * (e.target.value/100)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree) + (this.state.oilGrabbedFour.hardness * this.state.percentageFour) + (this.state.oilGrabbedFive.hardness * this.state.percentageFive) + (this.state.oilGrabbedSix.hardness * this.state.percentageSix) + (this.state.oilGrabbedSeven.hardness * this.state.percentageSeven))
      const cleansingVal = ((this.state.oilGrabbedEight.cleansing * (e.target.value/100)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree) + (this.state.oilGrabbedFour.cleansing * this.state.percentageFour) + (this.state.oilGrabbedFive.cleansing * this.state.percentageFive) + (this.state.oilGrabbedSix.cleansing * this.state.percentageSix) + (this.state.oilGrabbedSeven.cleansing * this.state.percentageSeven))
      const conditionVal = ((this.state.oilGrabbedEight.condition1 * (e.target.value/100)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree) + (this.state.oilGrabbedFour.condition1 * this.state.percentageFour) + (this.state.oilGrabbedFive.condition1 * this.state.percentageFive) + (this.state.oilGrabbedSix.condition1 * this.state.percentageSix) + (this.state.oilGrabbedSeven.condition1 * this.state.percentageSeven))
      const bubblyVal = ((this.state.oilGrabbedEight.bubbly * (e.target.value/100)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree) + (this.state.oilGrabbedFour.bubbly * this.state.percentageFour) + (this.state.oilGrabbedFive.bubbly * this.state.percentageFive) + (this.state.oilGrabbedSix.bubbly * this.state.percentageSix) + (this.state.oilGrabbedSeven.bubbly * this.state.percentageSeven))
      const creamyVal = ((this.state.oilGrabbedEight.creamy * (e.target.value/100)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree) + (this.state.oilGrabbedFour.creamy * this.state.percentageFour) + (this.state.oilGrabbedFive.creamy * this.state.percentageFive) + (this.state.oilGrabbedSix.creamy * this.state.percentageSix) + (this.state.oilGrabbedSeven.creamy * this.state.percentageSeven))
      const iodineVal = ((this.state.oilGrabbedEight.iodine * (e.target.value/100)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree) + (this.state.oilGrabbedFour.iodine * this.state.percentageFour) + (this.state.oilGrabbedFive.iodine * this.state.percentageFive) + (this.state.oilGrabbedSix.iodine * this.state.percentageSix) + (this.state.oilGrabbedSeven.iodine * this.state.percentageSeven))
      const insVal = ((this.state.oilGrabbedEight.ins * (e.target.value/100)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree) + (this.state.oilGrabbedFour.ins * this.state.percentageFour) + (this.state.oilGrabbedFive.ins * this.state.percentageFive) + (this.state.oilGrabbedSix.ins * this.state.percentageSix) + (this.state.oilGrabbedSeven.ins * this.state.percentageSeven))
      const lauricVal = ((this.state.oilGrabbedEight.lauric * (e.target.value/100)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree) + (this.state.oilGrabbedFour.lauric * this.state.percentageFour) + (this.state.oilGrabbedFive.lauric* this.state.percentageFive) + (this.state.oilGrabbedSix.lauric * this.state.percentageSix) + (this.state.oilGrabbedSeven.lauric * this.state.percentageSeven))
      const myristicVal = ((this.state.oilGrabbedEight.myristic * (e.target.value/100)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree) + (this.state.oilGrabbedFour.myristic * this.state.percentageFour) + (this.state.oilGrabbedFive.myristic * this.state.percentageFive) + (this.state.oilGrabbedSix.myristic * this.state.percentageSix) + (this.state.oilGrabbedSeven.myristic * this.state.percentageSeven))
      const palmiticVal = ((this.state.oilGrabbedEight.palmitic * (e.target.value/100)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree) + (this.state.oilGrabbedFour.palmitic * this.state.percentageFour) + (this.state.oilGrabbedFive.palmitic * this.state.percentageFive) + (this.state.oilGrabbedSix.palmitic * this.state.percentageSix) + (this.state.oilGrabbedSeven.palmitic * this.state.percentageSeven))
      const stearicVal = ((this.state.oilGrabbedEight.stearic * (e.target.value/100)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree) + (this.state.oilGrabbedFour.stearic * this.state.percentageFour) + (this.state.oilGrabbedFive.stearic * this.state.percentageFive) + (this.state.oilGrabbedSix.stearic * this.state.percentageSix) + (this.state.oilGrabbedSeven.stearic * this.state.percentageSeven))
      const ricinoleicVal = ((this.state.oilGrabbedEight.ricinoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.ricinoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.ricinoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.ricinoleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.ricinoleic * this.state.percentageSeven))
      const oleicVal = ((this.state.oilGrabbedEight.oleic * (e.target.value/100)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree) + (this.state.oilGrabbedFour.oleic * this.state.percentageFour) + (this.state.oilGrabbedFive.oleic * this.state.percentageFive) + (this.state.oilGrabbedSix.oleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.oleic * this.state.percentageSeven))
      const linoleicVal = ((this.state.oilGrabbedEight.linoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.linoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.linoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.linoleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.linoleic * this.state.percentageSeven))
      const linolenicVal = ((this.state.oilGrabbedEight.linolenic * (e.target.value/100)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree) + (this.state.oilGrabbedFour.linolenic * this.state.percentageFour) + (this.state.oilGrabbedFive.linolenic * this.state.percentageFive) + (this.state.oilGrabbedSix.linolenic * this.state.percentageSix) + (this.state.oilGrabbedSeven.linolenic * this.state.percentageSeven))
      const sapVal = ((this.state.oilGrabbedEight.sap * (e.target.value/100)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree) + (this.state.oilGrabbedFour.sap * this.state.percentageFour) + (this.state.oilGrabbedFive.sap * this.state.percentageFive) + (this.state.oilGrabbedSix.sap * this.state.percentageSix) + (this.state.oilGrabbedSeven.sap * this.state.percentageSeven))
      this.setState({
        percentageEight: (e.target.value/100),
        hardnessAll: Math.round(hardnessVal),
        cleansingAll: Math.round(cleansingVal),
        conditionAll:  Math.round(conditionVal),
        bubblyAll: Math.round(bubblyVal),
        creamyAll: Math.round(creamyVal),
        iodineAll: Math.round(iodineVal),
        insAll: Math.round(insVal),
        lauricAll: Math.round(lauricVal),
        myristicAll: Math.round(myristicVal),
        palmiticAll: Math.round(palmiticVal),
        stearicAll: Math.round(stearicVal),
        ricinoleicAll: Math.round(ricinoleicVal),
        oleicAll: Math.round(oleicVal),
        linoleicAll: Math.round(linoleicVal),
        linolenicAll: Math.round(linolenicVal),
        sapAll: Math.round(sapVal)
      })
    }
    }
    percentageInputChangeNine= (e) =>{
      if(this.state.weight === true){
      const hardnessVal = ((this.state.oilGrabbedNine.hardness * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree) + (this.state.oilGrabbedFour.hardness * this.state.percentageFour) + (this.state.oilGrabbedFive.hardness * this.state.percentageFive) + (this.state.oilGrabbedSix.hardness * this.state.percentageSix) + (this.state.oilGrabbedSeven.hardness * this.state.percentageSeven) + (this.state.oilGrabbedEight.hardness * this.state.percentageEight))
      const cleansingVal = ((this.state.oilGrabbedNine.cleansing * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree) + (this.state.oilGrabbedFour.cleansing * this.state.percentageFour) + (this.state.oilGrabbedFive.cleansing * this.state.percentageFive) + (this.state.oilGrabbedSix.cleansing * this.state.percentageSix) + (this.state.oilGrabbedSeven.cleansing * this.state.percentageSeven) + (this.state.oilGrabbedEight.cleansing * this.state.percentageEight))
      const conditionVal = ((this.state.oilGrabbedNine.condition1 * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree) + (this.state.oilGrabbedFour.condition1 * this.state.percentageFour) + (this.state.oilGrabbedFive.condition1 * this.state.percentageFive) + (this.state.oilGrabbedSix.condition1 * this.state.percentageSix) + (this.state.oilGrabbedSeven.condition1 * this.state.percentageSeven) + (this.state.oilGrabbedEight.condition1 * this.state.percentageEight))
      const bubblyVal = ((this.state.oilGrabbedNine.bubbly * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree) + (this.state.oilGrabbedFour.bubbly * this.state.percentageFour) + (this.state.oilGrabbedFive.bubbly * this.state.percentageFive) + (this.state.oilGrabbedSix.bubbly * this.state.percentageSix) + (this.state.oilGrabbedSeven.bubbly * this.state.percentageSeven) + (this.state.oilGrabbedEight.bubbly * this.state.percentageEight))
      const creamyVal = ((this.state.oilGrabbedNine.creamy * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree) + (this.state.oilGrabbedFour.creamy * this.state.percentageFour) + (this.state.oilGrabbedFive.creamy * this.state.percentageFive) + (this.state.oilGrabbedSix.creamy * this.state.percentageSix) + (this.state.oilGrabbedSeven.creamy * this.state.percentageSeven) + (this.state.oilGrabbedEight.creamy * this.state.percentageEight))
      const iodineVal = ((this.state.oilGrabbedNine.iodine * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree) + (this.state.oilGrabbedFour.iodine * this.state.percentageFour) + (this.state.oilGrabbedFive.iodine * this.state.percentageFive) + (this.state.oilGrabbedSix.iodine * this.state.percentageSix) + (this.state.oilGrabbedSeven.iodine * this.state.percentageSeven) + (this.state.oilGrabbedEight.iodine * this.state.percentageEight))
      const insVal = ((this.state.oilGrabbedNine.ins * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree) + (this.state.oilGrabbedFour.ins * this.state.percentageFour) + (this.state.oilGrabbedFive.ins * this.state.percentageFive) + (this.state.oilGrabbedSix.ins * this.state.percentageSix) + (this.state.oilGrabbedSeven.ins * this.state.percentageSeven) + (this.state.oilGrabbedEight.ins * this.state.percentageEight))
      const lauricVal = ((this.state.oilGrabbedNine.lauric * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree) + (this.state.oilGrabbedFour.lauric * this.state.percentageFour) + (this.state.oilGrabbedFive.lauric* this.state.percentageFive) + (this.state.oilGrabbedSix.lauric * this.state.percentageSix) + (this.state.oilGrabbedSeven.lauric * this.state.percentageSeven) + (this.state.oilGrabbedEight.lauric * this.state.percentageEight))
      const myristicVal = ((this.state.oilGrabbedNine.myristic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree) + (this.state.oilGrabbedFour.myristic * this.state.percentageFour) + (this.state.oilGrabbedFive.myristic * this.state.percentageFive) + (this.state.oilGrabbedSix.myristic * this.state.percentageSix) + (this.state.oilGrabbedSeven.myristic * this.state.percentageSeven) + (this.state.oilGrabbedEight.myristic * this.state.percentageEight))
      const palmiticVal = ((this.state.oilGrabbedNine.palmitic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree) + (this.state.oilGrabbedFour.palmitic * this.state.percentageFour) + (this.state.oilGrabbedFive.palmitic * this.state.percentageFive) + (this.state.oilGrabbedSix.palmitic * this.state.percentageSix) + (this.state.oilGrabbedSeven.palmitic * this.state.percentageSeven) + (this.state.oilGrabbedEight.palmitic * this.state.percentageEight))
      const stearicVal = ((this.state.oilGrabbedNine.stearic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree) + (this.state.oilGrabbedFour.stearic * this.state.percentageFour) + (this.state.oilGrabbedFive.stearic * this.state.percentageFive) + (this.state.oilGrabbedSix.stearic * this.state.percentageSix) + (this.state.oilGrabbedSeven.stearic * this.state.percentageSeven) + (this.state.oilGrabbedEight.stearic * this.state.percentageEight))
      const ricinoleicVal = ((this.state.oilGrabbedNine.ricinoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.ricinoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.ricinoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.ricinoleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.ricinoleic * this.state.percentageSeven) + (this.state.oilGrabbedEight.ricinoleic * this.state.percentageEight))
      const oleicVal = ((this.state.oilGrabbedNine.oleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree) + (this.state.oilGrabbedFour.oleic * this.state.percentageFour) + (this.state.oilGrabbedFive.oleic * this.state.percentageFive) + (this.state.oilGrabbedSix.oleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.oleic * this.state.percentageSeven) + (this.state.oilGrabbedEight.oleic * this.state.percentageEight))
      const linoleicVal = ((this.state.oilGrabbedNine.linoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.linoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.linoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.linoleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.linoleic * this.state.percentageSeven) + (this.state.oilGrabbedEight.linoleic * this.state.percentageEight))
      const linolenicVal = ((this.state.oilGrabbedNine.linolenic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree) + (this.state.oilGrabbedFour.linolenic * this.state.percentageFour) + (this.state.oilGrabbedFive.linolenic * this.state.percentageFive) + (this.state.oilGrabbedSix.linolenic * this.state.percentageSix) + (this.state.oilGrabbedSeven.linolenic * this.state.percentageSeven) + (this.state.oilGrabbedEight.linolenic * this.state.percentageEight))
      const sapVal = ((this.state.oilGrabbedNine.sap * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree) + (this.state.oilGrabbedFour.sap * this.state.percentageFour) + (this.state.oilGrabbedFive.sap * this.state.percentageFive) + (this.state.oilGrabbedSix.sap * this.state.percentageSix) + (this.state.oilGrabbedSeven.sap * this.state.percentageSeven) + (this.state.oilGrabbedEight.sap * this.state.percentageEight))
      this.setState({
        percentageNine: (e.target.value/this.state.totalWeight),
        hardnessAll: Math.round(hardnessVal),
        cleansingAll: Math.round(cleansingVal),
        conditionAll:  Math.round(conditionVal),
        bubblyAll: Math.round(bubblyVal),
        creamyAll: Math.round(creamyVal),
        iodineAll: Math.round(iodineVal),
        insAll: Math.round(insVal),
        lauricAll: Math.round(lauricVal),
        myristicAll: Math.round(myristicVal),
        palmiticAll: Math.round(palmiticVal),
        stearicAll: Math.round(stearicVal),
        ricinoleicAll: Math.round(ricinoleicVal),
        oleicAll: Math.round(oleicVal),
        linoleicAll: Math.round(linoleicVal),
        linolenicAll: Math.round(linolenicVal),
        sapAll: Math.round(sapVal)
      })
    } else {
      const hardnessVal = ((this.state.oilGrabbedNine.hardness * (e.target.value/100)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree) + (this.state.oilGrabbedFour.hardness * this.state.percentageFour) + (this.state.oilGrabbedFive.hardness * this.state.percentageFive) + (this.state.oilGrabbedSix.hardness * this.state.percentageSix) + (this.state.oilGrabbedSeven.hardness * this.state.percentageSeven) + (this.state.oilGrabbedEight.hardness * this.state.percentageEight))
      const cleansingVal = ((this.state.oilGrabbedNine.cleansing * (e.target.value/100)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree) + (this.state.oilGrabbedFour.cleansing * this.state.percentageFour) + (this.state.oilGrabbedFive.cleansing * this.state.percentageFive) + (this.state.oilGrabbedSix.cleansing * this.state.percentageSix) + (this.state.oilGrabbedSeven.cleansing * this.state.percentageSeven) + (this.state.oilGrabbedEight.cleansing * this.state.percentageEight))
      const conditionVal = ((this.state.oilGrabbedNine.condition1 * (e.target.value/100)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree) + (this.state.oilGrabbedFour.condition1 * this.state.percentageFour) + (this.state.oilGrabbedFive.condition1 * this.state.percentageFive) + (this.state.oilGrabbedSix.condition1 * this.state.percentageSix) + (this.state.oilGrabbedSeven.condition1 * this.state.percentageSeven) + (this.state.oilGrabbedEight.condition1 * this.state.percentageEight))
      const bubblyVal = ((this.state.oilGrabbedNine.bubbly * (e.target.value/100)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree) + (this.state.oilGrabbedFour.bubbly * this.state.percentageFour) + (this.state.oilGrabbedFive.bubbly * this.state.percentageFive) + (this.state.oilGrabbedSix.bubbly * this.state.percentageSix) + (this.state.oilGrabbedSeven.bubbly * this.state.percentageSeven) + (this.state.oilGrabbedEight.bubbly * this.state.percentageEight))
      const creamyVal = ((this.state.oilGrabbedNine.creamy * (e.target.value/100)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree) + (this.state.oilGrabbedFour.creamy * this.state.percentageFour) + (this.state.oilGrabbedFive.creamy * this.state.percentageFive) + (this.state.oilGrabbedSix.creamy * this.state.percentageSix) + (this.state.oilGrabbedSeven.creamy * this.state.percentageSeven) + (this.state.oilGrabbedEight.creamy * this.state.percentageEight))
      const iodineVal = ((this.state.oilGrabbedNine.iodine * (e.target.value/100)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree) + (this.state.oilGrabbedFour.iodine * this.state.percentageFour) + (this.state.oilGrabbedFive.iodine * this.state.percentageFive) + (this.state.oilGrabbedSix.iodine * this.state.percentageSix) + (this.state.oilGrabbedSeven.iodine * this.state.percentageSeven) + (this.state.oilGrabbedEight.iodine * this.state.percentageEight))
      const insVal = ((this.state.oilGrabbedNine.ins * (e.target.value/100)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree) + (this.state.oilGrabbedFour.ins * this.state.percentageFour) + (this.state.oilGrabbedFive.ins * this.state.percentageFive) + (this.state.oilGrabbedSix.ins * this.state.percentageSix) + (this.state.oilGrabbedSeven.ins * this.state.percentageSeven) + (this.state.oilGrabbedEight.ins * this.state.percentageEight))
      const lauricVal = ((this.state.oilGrabbedNine.lauric * (e.target.value/100)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree) + (this.state.oilGrabbedFour.lauric * this.state.percentageFour) + (this.state.oilGrabbedFive.lauric* this.state.percentageFive) + (this.state.oilGrabbedSix.lauric * this.state.percentageSix) + (this.state.oilGrabbedSeven.lauric * this.state.percentageSeven) + (this.state.oilGrabbedEight.lauric * this.state.percentageEight))
      const myristicVal = ((this.state.oilGrabbedNine.myristic * (e.target.value/100)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree) + (this.state.oilGrabbedFour.myristic * this.state.percentageFour) + (this.state.oilGrabbedFive.myristic * this.state.percentageFive) + (this.state.oilGrabbedSix.myristic * this.state.percentageSix) + (this.state.oilGrabbedSeven.myristic * this.state.percentageSeven) + (this.state.oilGrabbedEight.myristic * this.state.percentageEight))
      const palmiticVal = ((this.state.oilGrabbedNine.palmitic * (e.target.value/100)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree) + (this.state.oilGrabbedFour.palmitic * this.state.percentageFour) + (this.state.oilGrabbedFive.palmitic * this.state.percentageFive) + (this.state.oilGrabbedSix.palmitic * this.state.percentageSix) + (this.state.oilGrabbedSeven.palmitic * this.state.percentageSeven) + (this.state.oilGrabbedEight.palmitic * this.state.percentageEight))
      const stearicVal = ((this.state.oilGrabbedNine.stearic * (e.target.value/100)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree) + (this.state.oilGrabbedFour.stearic * this.state.percentageFour) + (this.state.oilGrabbedFive.stearic * this.state.percentageFive) + (this.state.oilGrabbedSix.stearic * this.state.percentageSix) + (this.state.oilGrabbedSeven.stearic * this.state.percentageSeven) + (this.state.oilGrabbedEight.stearic * this.state.percentageEight))
      const ricinoleicVal = ((this.state.oilGrabbedNine.ricinoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.ricinoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.ricinoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.ricinoleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.ricinoleic * this.state.percentageSeven) + (this.state.oilGrabbedEight.ricinoleic * this.state.percentageEight))
      const oleicVal = ((this.state.oilGrabbedNine.oleic * (e.target.value/100)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree) + (this.state.oilGrabbedFour.oleic * this.state.percentageFour) + (this.state.oilGrabbedFive.oleic * this.state.percentageFive) + (this.state.oilGrabbedSix.oleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.oleic * this.state.percentageSeven) + (this.state.oilGrabbedEight.oleic * this.state.percentageEight))
      const linoleicVal = ((this.state.oilGrabbedNine.linoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.linoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.linoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.linoleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.linoleic * this.state.percentageSeven) + (this.state.oilGrabbedEight.linoleic * this.state.percentageEight))
      const linolenicVal = ((this.state.oilGrabbedNine.linolenic * (e.target.value/100)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree) + (this.state.oilGrabbedFour.linolenic * this.state.percentageFour) + (this.state.oilGrabbedFive.linolenic * this.state.percentageFive) + (this.state.oilGrabbedSix.linolenic * this.state.percentageSix) + (this.state.oilGrabbedSeven.linolenic * this.state.percentageSeven) + (this.state.oilGrabbedEight.linolenic * this.state.percentageEight))
      const sapVal = ((this.state.oilGrabbedNine.sap * (e.target.value/100)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree) + (this.state.oilGrabbedFour.sap * this.state.percentageFour) + (this.state.oilGrabbedFive.sap * this.state.percentageFive) + (this.state.oilGrabbedSix.sap * this.state.percentageSix) + (this.state.oilGrabbedSeven.sap * this.state.percentageSeven) + (this.state.oilGrabbedEight.sap * this.state.percentageEight))
      this.setState({
        percentageNine: (e.target.value/100),
        hardnessAll: Math.round(hardnessVal),
        cleansingAll: Math.round(cleansingVal),
        conditionAll:  Math.round(conditionVal),
        bubblyAll: Math.round(bubblyVal),
        creamyAll: Math.round(creamyVal),
        iodineAll: Math.round(iodineVal),
        insAll: Math.round(insVal),
        lauricAll: Math.round(lauricVal),
        myristicAll: Math.round(myristicVal),
        palmiticAll: Math.round(palmiticVal),
        stearicAll: Math.round(stearicVal),
        ricinoleicAll: Math.round(ricinoleicVal),
        oleicAll: Math.round(oleicVal),
        linoleicAll: Math.round(linoleicVal),
        linolenicAll: Math.round(linolenicVal),
        sapAll: Math.round(sapVal)
      })
    }
  }
    percentageInputChangeTen= (e) =>{
          if(this.state.weight === true){
      const hardnessVal = ((this.state.oilGrabbedTen.hardness * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree) + (this.state.oilGrabbedFour.hardness * this.state.percentageFour) + (this.state.oilGrabbedFive.hardness * this.state.percentageFive) + (this.state.oilGrabbedSix.hardness * this.state.percentageSix) + (this.state.oilGrabbedSeven.hardness * this.state.percentageSeven) + (this.state.oilGrabbedEight.hardness * this.state.percentageEight) + (this.state.oilGrabbedNine.hardness * this.state.percentageNine))
      const cleansingVal = ((this.state.oilGrabbedTen.cleansing * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree) + (this.state.oilGrabbedFour.cleansing * this.state.percentageFour) + (this.state.oilGrabbedFive.cleansing * this.state.percentageFive) + (this.state.oilGrabbedSix.cleansing * this.state.percentageSix) + (this.state.oilGrabbedSeven.cleansing * this.state.percentageSeven) + (this.state.oilGrabbedEight.cleansing * this.state.percentageEight) + (this.state.oilGrabbedNine.cleansing * this.state.percentageNine))
      const conditionVal = ((this.state.oilGrabbedTen.condition1 * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree) + (this.state.oilGrabbedFour.condition1 * this.state.percentageFour) + (this.state.oilGrabbedFive.condition1 * this.state.percentageFive) + (this.state.oilGrabbedSix.condition1 * this.state.percentageSix) + (this.state.oilGrabbedSeven.condition1 * this.state.percentageSeven) + (this.state.oilGrabbedEight.condition1 * this.state.percentageEight) + (this.state.oilGrabbedNine.condition1 * this.state.percentageNine))
      const bubblyVal = ((this.state.oilGrabbedTen.bubbly * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree) + (this.state.oilGrabbedFour.bubbly * this.state.percentageFour) + (this.state.oilGrabbedFive.bubbly * this.state.percentageFive) + (this.state.oilGrabbedSix.bubbly * this.state.percentageSix) + (this.state.oilGrabbedSeven.bubbly * this.state.percentageSeven) + (this.state.oilGrabbedEight.bubbly * this.state.percentageEight) + (this.state.oilGrabbedNine.bubbly * this.state.percentageNine))
      const creamyVal = ((this.state.oilGrabbedTen.creamy * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree) + (this.state.oilGrabbedFour.creamy * this.state.percentageFour) + (this.state.oilGrabbedFive.creamy * this.state.percentageFive) + (this.state.oilGrabbedSix.creamy * this.state.percentageSix) + (this.state.oilGrabbedSeven.creamy * this.state.percentageSeven) + (this.state.oilGrabbedEight.creamy * this.state.percentageEight) + (this.state.oilGrabbedNine.creamy * this.state.percentageNine))
      const iodineVal = ((this.state.oilGrabbedTen.iodine * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree) + (this.state.oilGrabbedFour.iodine * this.state.percentageFour) + (this.state.oilGrabbedFive.iodine * this.state.percentageFive) + (this.state.oilGrabbedSix.iodine * this.state.percentageSix) + (this.state.oilGrabbedSeven.iodine * this.state.percentageSeven) + (this.state.oilGrabbedEight.iodine * this.state.percentageEight) + (this.state.oilGrabbedNine.iodine * this.state.percentageNine))
      const insVal = ((this.state.oilGrabbedTen.ins * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree) + (this.state.oilGrabbedFour.ins * this.state.percentageFour) + (this.state.oilGrabbedFive.ins * this.state.percentageFive) + (this.state.oilGrabbedSix.ins * this.state.percentageSix) + (this.state.oilGrabbedSeven.ins * this.state.percentageSeven) + (this.state.oilGrabbedEight.ins * this.state.percentageEight) + (this.state.oilGrabbedNine.ins * this.state.percentageNine))
      const lauricVal = ((this.state.oilGrabbedTen.lauric * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree) + (this.state.oilGrabbedFour.lauric * this.state.percentageFour) + (this.state.oilGrabbedFive.lauric* this.state.percentageFive) + (this.state.oilGrabbedSix.lauric * this.state.percentageSix) + (this.state.oilGrabbedSeven.lauric * this.state.percentageSeven) + (this.state.oilGrabbedEight.lauric * this.state.percentageEight) + (this.state.oilGrabbedNine.lauric * this.state.percentageNine))
      const myristicVal = ((this.state.oilGrabbedTen.myristic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree) + (this.state.oilGrabbedFour.myristic * this.state.percentageFour) + (this.state.oilGrabbedFive.myristic * this.state.percentageFive) + (this.state.oilGrabbedSix.myristic * this.state.percentageSix) + (this.state.oilGrabbedSeven.myristic * this.state.percentageSeven) + (this.state.oilGrabbedEight.myristic * this.state.percentageEight) + (this.state.oilGrabbedNine.myristic * this.state.percentageNine))
      const palmiticVal = ((this.state.oilGrabbedTen.palmitic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree) + (this.state.oilGrabbedFour.palmitic * this.state.percentageFour) + (this.state.oilGrabbedFive.palmitic * this.state.percentageFive) + (this.state.oilGrabbedSix.palmitic * this.state.percentageSix) + (this.state.oilGrabbedSeven.palmitic * this.state.percentageSeven) + (this.state.oilGrabbedEight.palmitic * this.state.percentageEight) + (this.state.oilGrabbedNine.palmitic * this.state.percentageNine))
      const stearicVal = ((this.state.oilGrabbedTen.stearic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree) + (this.state.oilGrabbedFour.stearic * this.state.percentageFour) + (this.state.oilGrabbedFive.stearic * this.state.percentageFive) + (this.state.oilGrabbedSix.stearic * this.state.percentageSix) + (this.state.oilGrabbedSeven.stearic * this.state.percentageSeven) + (this.state.oilGrabbedEight.stearic * this.state.percentageEight) + (this.state.oilGrabbedNine.stearic * this.state.percentageNine))
      const ricinoleicVal = ((this.state.oilGrabbedTen.ricinoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.ricinoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.ricinoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.ricinoleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.ricinoleic * this.state.percentageSeven) + (this.state.oilGrabbedEight.ricinoleic * this.state.percentageEight) + (this.state.oilGrabbedNine.ricinoleic * this.state.percentageNine))
      const oleicVal = ((this.state.oilGrabbedTen.oleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree) + (this.state.oilGrabbedFour.oleic * this.state.percentageFour) + (this.state.oilGrabbedFive.oleic * this.state.percentageFive) + (this.state.oilGrabbedSix.oleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.oleic * this.state.percentageSeven) + (this.state.oilGrabbedEight.oleic * this.state.percentageEight) + (this.state.oilGrabbedNine.oleic * this.state.percentageNine))
      const linoleicVal = ((this.state.oilGrabbedTen.linoleic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.linoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.linoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.linoleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.linoleic * this.state.percentageSeven) + (this.state.oilGrabbedEight.linoleic * this.state.percentageEight) + (this.state.oilGrabbedNine.linoleic * this.state.percentageNine))
      const linolenicVal = ((this.state.oilGrabbedTen.linolenic * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree) + (this.state.oilGrabbedFour.linolenic * this.state.percentageFour) + (this.state.oilGrabbedFive.linolenic * this.state.percentageFive) + (this.state.oilGrabbedSix.linolenic * this.state.percentageSix) + (this.state.oilGrabbedSeven.linolenic * this.state.percentageSeven) + (this.state.oilGrabbedEight.linolenic * this.state.percentageEight) + (this.state.oilGrabbedNine.linolenic * this.state.percentageNine))
      const sapVal = ((this.state.oilGrabbedTen.sap * (e.target.value/this.state.totalWeight)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree) + (this.state.oilGrabbedFour.sap * this.state.percentageFour) + (this.state.oilGrabbedFive.sap * this.state.percentageFive) + (this.state.oilGrabbedSix.sap * this.state.percentageSix) + (this.state.oilGrabbedSeven.sap * this.state.percentageSeven) + (this.state.oilGrabbedEight.sap * this.state.percentageEight) + (this.state.oilGrabbedNine.sap * this.state.percentageNine))
      this.setState({
        percentageTen: (e.target.value/this.state.totalWeight),
        hardnessAll: Math.round(hardnessVal),
        cleansingAll: Math.round(cleansingVal),
        conditionAll:  Math.round(conditionVal),
        bubblyAll: Math.round(bubblyVal),
        creamyAll: Math.round(creamyVal),
        iodineAll: Math.round(iodineVal),
        insAll: Math.round(insVal),
        lauricAll: Math.round(lauricVal),
        myristicAll: Math.round(myristicVal),
        palmiticAll: Math.round(palmiticVal),
        stearicAll: Math.round(stearicVal),
        ricinoleicAll: Math.round(ricinoleicVal),
        oleicAll: Math.round(oleicVal),
        linoleicAll: Math.round(linoleicVal),
        linolenicAll: Math.round(linolenicVal),
        sapAll: Math.round(sapVal)
      })
    } else {
      const hardnessVal = ((this.state.oilGrabbedTen.hardness * (e.target.value/100)) + (this.state.oilGrabbedOne.hardness * this.state.percentageOne) + (this.state.oilGrabbedTwo.hardness * this.state.percentageTwo) + (this.state.oilGrabbedThree.hardness * this.state.percentageThree) + (this.state.oilGrabbedFour.hardness * this.state.percentageFour) + (this.state.oilGrabbedFive.hardness * this.state.percentageFive) + (this.state.oilGrabbedSix.hardness * this.state.percentageSix) + (this.state.oilGrabbedSeven.hardness * this.state.percentageSeven) + (this.state.oilGrabbedEight.hardness * this.state.percentageEight) + (this.state.oilGrabbedNine.hardness * this.state.percentageNine))
      const cleansingVal = ((this.state.oilGrabbedTen.cleansing * (e.target.value/100)) + (this.state.oilGrabbedOne.cleansing * this.state.percentageOne) + (this.state.oilGrabbedTwo.cleansing * this.state.percentageTwo) + (this.state.oilGrabbedThree.cleansing * this.state.percentageThree) + (this.state.oilGrabbedFour.cleansing * this.state.percentageFour) + (this.state.oilGrabbedFive.cleansing * this.state.percentageFive) + (this.state.oilGrabbedSix.cleansing * this.state.percentageSix) + (this.state.oilGrabbedSeven.cleansing * this.state.percentageSeven) + (this.state.oilGrabbedEight.cleansing * this.state.percentageEight) + (this.state.oilGrabbedNine.cleansing * this.state.percentageNine))
      const conditionVal = ((this.state.oilGrabbedTen.condition1 * (e.target.value/100)) + (this.state.oilGrabbedOne.condition1 * this.state.percentageOne) + (this.state.oilGrabbedTwo.condition1 * this.state.percentageTwo) + (this.state.oilGrabbedThree.condition1 * this.state.percentageThree) + (this.state.oilGrabbedFour.condition1 * this.state.percentageFour) + (this.state.oilGrabbedFive.condition1 * this.state.percentageFive) + (this.state.oilGrabbedSix.condition1 * this.state.percentageSix) + (this.state.oilGrabbedSeven.condition1 * this.state.percentageSeven) + (this.state.oilGrabbedEight.condition1 * this.state.percentageEight) + (this.state.oilGrabbedNine.condition1 * this.state.percentageNine))
      const bubblyVal = ((this.state.oilGrabbedTen.bubbly * (e.target.value/100)) + (this.state.oilGrabbedOne.bubbly * this.state.percentageOne) + (this.state.oilGrabbedTwo.bubbly * this.state.percentageTwo) + (this.state.oilGrabbedThree.bubbly * this.state.percentageThree) + (this.state.oilGrabbedFour.bubbly * this.state.percentageFour) + (this.state.oilGrabbedFive.bubbly * this.state.percentageFive) + (this.state.oilGrabbedSix.bubbly * this.state.percentageSix) + (this.state.oilGrabbedSeven.bubbly * this.state.percentageSeven) + (this.state.oilGrabbedEight.bubbly * this.state.percentageEight) + (this.state.oilGrabbedNine.bubbly * this.state.percentageNine))
      const creamyVal = ((this.state.oilGrabbedTen.creamy * (e.target.value/100)) + (this.state.oilGrabbedOne.creamy * this.state.percentageOne) + (this.state.oilGrabbedTwo.creamy * this.state.percentageTwo) + (this.state.oilGrabbedThree.creamy * this.state.percentageThree) + (this.state.oilGrabbedFour.creamy * this.state.percentageFour) + (this.state.oilGrabbedFive.creamy * this.state.percentageFive) + (this.state.oilGrabbedSix.creamy * this.state.percentageSix) + (this.state.oilGrabbedSeven.creamy * this.state.percentageSeven) + (this.state.oilGrabbedEight.creamy * this.state.percentageEight) + (this.state.oilGrabbedNine.creamy * this.state.percentageNine))
      const iodineVal = ((this.state.oilGrabbedTen.iodine * (e.target.value/100)) + (this.state.oilGrabbedOne.iodine * this.state.percentageOne) + (this.state.oilGrabbedTwo.iodine * this.state.percentageTwo) + (this.state.oilGrabbedThree.iodine * this.state.percentageThree) + (this.state.oilGrabbedFour.iodine * this.state.percentageFour) + (this.state.oilGrabbedFive.iodine * this.state.percentageFive) + (this.state.oilGrabbedSix.iodine * this.state.percentageSix) + (this.state.oilGrabbedSeven.iodine * this.state.percentageSeven) + (this.state.oilGrabbedEight.iodine * this.state.percentageEight) + (this.state.oilGrabbedNine.iodine * this.state.percentageNine))
      const insVal = ((this.state.oilGrabbedTen.ins * (e.target.value/100)) + (this.state.oilGrabbedOne.ins * this.state.percentageOne) + (this.state.oilGrabbedTwo.ins * this.state.percentageTwo) + (this.state.oilGrabbedThree.ins * this.state.percentageThree) + (this.state.oilGrabbedFour.ins * this.state.percentageFour) + (this.state.oilGrabbedFive.ins * this.state.percentageFive) + (this.state.oilGrabbedSix.ins * this.state.percentageSix) + (this.state.oilGrabbedSeven.ins * this.state.percentageSeven) + (this.state.oilGrabbedEight.ins * this.state.percentageEight) + (this.state.oilGrabbedNine.ins * this.state.percentageNine))
      const lauricVal = ((this.state.oilGrabbedTen.lauric * (e.target.value/100)) + (this.state.oilGrabbedOne.lauric * this.state.percentageOne) + (this.state.oilGrabbedTwo.lauric * this.state.percentageTwo) + (this.state.oilGrabbedThree.lauric * this.state.percentageThree) + (this.state.oilGrabbedFour.lauric * this.state.percentageFour) + (this.state.oilGrabbedFive.lauric* this.state.percentageFive) + (this.state.oilGrabbedSix.lauric * this.state.percentageSix) + (this.state.oilGrabbedSeven.lauric * this.state.percentageSeven) + (this.state.oilGrabbedEight.lauric * this.state.percentageEight) + (this.state.oilGrabbedNine.lauric * this.state.percentageNine))
      const myristicVal = ((this.state.oilGrabbedTen.myristic * (e.target.value/100)) + (this.state.oilGrabbedOne.myristic * this.state.percentageOne) + (this.state.oilGrabbedTwo.myristic * this.state.percentageTwo) + (this.state.oilGrabbedThree.myristic * this.state.percentageThree) + (this.state.oilGrabbedFour.myristic * this.state.percentageFour) + (this.state.oilGrabbedFive.myristic * this.state.percentageFive) + (this.state.oilGrabbedSix.myristic * this.state.percentageSix) + (this.state.oilGrabbedSeven.myristic * this.state.percentageSeven) + (this.state.oilGrabbedEight.myristic * this.state.percentageEight) + (this.state.oilGrabbedNine.myristic * this.state.percentageNine))
      const palmiticVal = ((this.state.oilGrabbedTen.palmitic * (e.target.value/100)) + (this.state.oilGrabbedOne.palmitic * this.state.percentageOne) + (this.state.oilGrabbedTwo.palmitic * this.state.percentageTwo) + (this.state.oilGrabbedThree.palmitic * this.state.percentageThree) + (this.state.oilGrabbedFour.palmitic * this.state.percentageFour) + (this.state.oilGrabbedFive.palmitic * this.state.percentageFive) + (this.state.oilGrabbedSix.palmitic * this.state.percentageSix) + (this.state.oilGrabbedSeven.palmitic * this.state.percentageSeven) + (this.state.oilGrabbedEight.palmitic * this.state.percentageEight) + (this.state.oilGrabbedNine.palmitic * this.state.percentageNine))
      const stearicVal = ((this.state.oilGrabbedTen.stearic * (e.target.value/100)) + (this.state.oilGrabbedOne.stearic * this.state.percentageOne) + (this.state.oilGrabbedTwo.stearic * this.state.percentageTwo) + (this.state.oilGrabbedThree.stearic * this.state.percentageThree) + (this.state.oilGrabbedFour.stearic * this.state.percentageFour) + (this.state.oilGrabbedFive.stearic * this.state.percentageFive) + (this.state.oilGrabbedSix.stearic * this.state.percentageSix) + (this.state.oilGrabbedSeven.stearic * this.state.percentageSeven) + (this.state.oilGrabbedEight.stearic * this.state.percentageEight) + (this.state.oilGrabbedNine.stearic * this.state.percentageNine))
      const ricinoleicVal = ((this.state.oilGrabbedTen.ricinoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.ricinoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.ricinoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.ricinoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.ricinoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.ricinoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.ricinoleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.ricinoleic * this.state.percentageSeven) + (this.state.oilGrabbedEight.ricinoleic * this.state.percentageEight) + (this.state.oilGrabbedNine.ricinoleic * this.state.percentageNine))
      const oleicVal = ((this.state.oilGrabbedTen.oleic * (e.target.value/100)) + (this.state.oilGrabbedOne.oleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.oleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.oleic * this.state.percentageThree) + (this.state.oilGrabbedFour.oleic * this.state.percentageFour) + (this.state.oilGrabbedFive.oleic * this.state.percentageFive) + (this.state.oilGrabbedSix.oleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.oleic * this.state.percentageSeven) + (this.state.oilGrabbedEight.oleic * this.state.percentageEight) + (this.state.oilGrabbedNine.oleic * this.state.percentageNine))
      const linoleicVal = ((this.state.oilGrabbedTen.linoleic * (e.target.value/100)) + (this.state.oilGrabbedOne.linoleic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linoleic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linoleic * this.state.percentageThree) + (this.state.oilGrabbedFour.linoleic * this.state.percentageFour) + (this.state.oilGrabbedFive.linoleic * this.state.percentageFive) + (this.state.oilGrabbedSix.linoleic * this.state.percentageSix) + (this.state.oilGrabbedSeven.linoleic * this.state.percentageSeven) + (this.state.oilGrabbedEight.linoleic * this.state.percentageEight) + (this.state.oilGrabbedNine.linoleic * this.state.percentageNine))
      const linolenicVal = ((this.state.oilGrabbedTen.linolenic * (e.target.value/100)) + (this.state.oilGrabbedOne.linolenic * this.state.percentageOne) + (this.state.oilGrabbedTwo.linolenic * this.state.percentageTwo) + (this.state.oilGrabbedThree.linolenic * this.state.percentageThree) + (this.state.oilGrabbedFour.linolenic * this.state.percentageFour) + (this.state.oilGrabbedFive.linolenic * this.state.percentageFive) + (this.state.oilGrabbedSix.linolenic * this.state.percentageSix) + (this.state.oilGrabbedSeven.linolenic * this.state.percentageSeven) + (this.state.oilGrabbedEight.linolenic * this.state.percentageEight) + (this.state.oilGrabbedNine.linolenic * this.state.percentageNine))
      const sapVal = ((this.state.oilGrabbedTen.sap * (e.target.value/100)) + (this.state.oilGrabbedOne.sap * this.state.percentageOne) + (this.state.oilGrabbedTwo.sap * this.state.percentageTwo) + (this.state.oilGrabbedThree.sap * this.state.percentageThree) + (this.state.oilGrabbedFour.sap * this.state.percentageFour) + (this.state.oilGrabbedFive.sap * this.state.percentageFive) + (this.state.oilGrabbedSix.sap * this.state.percentageSix) + (this.state.oilGrabbedSeven.sap * this.state.percentageSeven) + (this.state.oilGrabbedEight.sap * this.state.percentageEight) + (this.state.oilGrabbedNine.sap * this.state.percentageNine))
      this.setState({
        percentageTen: (e.target.value/100),
        hardnessAll: Math.round(hardnessVal),
        cleansingAll: Math.round(cleansingVal),
        conditionAll:  Math.round(conditionVal),
        bubblyAll: Math.round(bubblyVal),
        creamyAll: Math.round(creamyVal),
        iodineAll: Math.round(iodineVal),
        insAll: Math.round(insVal),
        lauricAll: Math.round(lauricVal),
        myristicAll: Math.round(myristicVal),
        palmiticAll: Math.round(palmiticVal),
        stearicAll: Math.round(stearicVal),
        ricinoleicAll: Math.round(ricinoleicVal),
        oleicAll: Math.round(oleicVal),
        linoleicAll: Math.round(linoleicVal),
        linolenicAll: Math.round(linolenicVal),
        sapAll: Math.round(sapVal)
      })
    }
    }

    addOil = (e) => {
      if(this.state.oilGrabbedOne === ""){
        this.setState({
        oilGrabbedOne: this.state.ingredients[e]
      })
      } else if(this.state.oilGrabbedTwo === ""){
        this.setState({
        oilGrabbedTwo: this.state.ingredients[e]
      })
      } else if(this.state.oilGrabbedThree === ""){
      this.setState({
        oilGrabbedThree: this.state.ingredients[e]
      })
      } else if(this.state.oilGrabbedFour === ""){
      this.setState({
        oilGrabbedFour: this.state.ingredients[e]
      })
      } else if(this.state.oilGrabbedFive === ""){
      this.setState({
        oilGrabbedFive: this.state.ingredients[e]
      })
      } else if(this.state.oilGrabbedSix === ""){
      this.setState({
        oilGrabbedSix: this.state.ingredients[e]
      })
      } else if(this.state.oilGrabbedSeven === ""){
      this.setState({
        oilGrabbedSeven: this.state.ingredients[e]
      })
      } else if(this.state.oilGrabbedEight === ""){
      this.setState({
        oilGrabbedEight: this.state.ingredients[e]
      })
      } else if(this.state.oilGrabbedNine === ""){
      this.setState({
        oilGrabbedNine: this.state.ingredients[e]
      })
      } else if(this.state.oilGrabbedTen === ""){
      this.setState({
        oilGrabbedTen: this.state.ingredients[e]
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
      <div>
        <div className='firstFourStepsBox'  >
          <div className='stepOne'>
            <span className='stepOneText'>Choose what kind of lye you will be using. Sodium hydroxide, NaOH, is used to make soap bars.
            If you want to make bar soap, click the circle next to NaOH. Potassium hyroxide, KOH, is used to make liquid soap.
            This is a more complicated process than making bar soap. It involves adding the water in two stages: one for the soap cooking stage,
            the other for diluting the soap.  You can find more about it here.  When making liquid soap, click the circle next to KOH.
            If you have 90% pure KOH check the 90% box.</span>
            <h1>Type of Lye</h1>
              <label>NaOH
                <input type='radio' name='Lye' checked/>
              </label><br/>
              <label>KOH
                <input type='radio' name='Lye' />
              </label><br/>
              <label>%90KOH
                <input type='checkbox' name='90%KOH' />
              </label>
          </div>
          <div className='stepTwo'>
            <span className='stepTwoText'>This value is the total weight of all the oils that will be used in your recipe.  You can use either pounds, ounces or grams as your unit of measurement.
              No matter what unit of measurement you use to create your recipe, the calculated values are displayed in pounds, ounces and grams after clicking the 'View/Print Recipe' button.</span>
            <h1> Weight of Oils</h1>
            <label>Pounds
              <input type='radio' name='Weight' checked/>
            </label><br/>
            <label>Ounces
              <input type='radio' name='Weight'/>
            </label><br/>
            <label>Grams
              <input type='radio' name='Weight' />
            </label><br/>
            <label>
              <input type='text' name='amount' onChange={this.totalWeightChange}/>
            </label>
          </div>
          <div className='stepThree'>
            <span className = 'stepThreeText'>'Water as % of Oils' is the simplest way to determine the amount of water used in your recipe.  It is recommended that beginners use this method
               and use the default value of 38%. More experienced users typically reduce this percentage to around 32-33%. Example: Using the default 38% and the total weight of the oils in
               your recipe is 1 pound, the amount of water in which the lye is mixed would be 0.38 pounds. The water and lye amounts are calculated on the 'View Recipe' page.
               'Lye Concentration' - Advanced users can set the Lye percentage of the water & lye solution directly.  Example: If you want lye to be 34% of (lye + water), click
               'Lye Concentration' and enter 34 in the text box to the right of the check box before clicking 'Calculate Recipe'.
               'Water : Lye Ratio' - Advanced users can also set the Water:Lye ratio directly.  Example: If you want the water to lye ratio to be 2 to 1, click 'Water : Lye Ratio'
               and enter 2:1 before clicking 'Calculate Recipe'.</span>
            <h1>Water</h1>
            <label>Water as % of Oils
              <input type='text' name='water%oils' value="%38"/>
            </label><br/>
            <label>Lye Concentration
              <input type='text' name='Lye Concecntration' />
            </label><br/>
            <label>Water : Lye Ratio
              <input type='text' name='Water:lyeRatio' />
            </label>
          </div>
          <div className='stepFour'>
            <span className='stepFourText'>Super Fat.  Due to several possible oil variables it is safer to use less lye than needed to saponify the oils in your recipe.  This is called
              a lye discount and 5% is generally considered a safe number to use. Because discounting the lye by 5% leaves 5% of unsaponified oils in your soap bar this number is also referred
              to as super fat.  That extra 5% of superfat not only is a safety factor, it also gives the soap bar extra skin conditioning qualities because approximately 95% of the bar is soap
              and approximately 5% of the bar is an oil mixture that is deposited on the skin.  For more info see FAQ Number 7
              Fragrance.  The amount of fragrance to use is typically about 3-4% of the total weight of the oils used in your recipe.  This is commonly specified as ounces per pound of oils or
              grams per kilogram of oils.  Some suppliers will specify a usage rate for each of their oils.
              Example: The supplier suggests a usage rate .6 oz/lb: 0.6/16 oz = .0375 = 3.75%. The metric equivalent would be .0375 x 1000 = 37.5 g/kg. Essential Oils are stronger and usually
              require a lower percentage than Fragrance Oils.</span>
            <h1>Step Four</h1>
            <label>Super Fat
              <input type='text' name='superFat' value="5"/>
            </label><br/>
            <label>Super Fragrance
              <input type='text' name='Fragrance' value=".5"/>
            </label><br/>
            <label>Amount
              <input type='text' name='Amount' />
            </label><br/>
          </div>
        </div>
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
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeOne}/>%
                  <input className="weightInput" type="number" onChange={this.weightInputChangeOne}/>weight
                </label>
                <br/>
                <label> 2 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilTwo()}>-</a>
                  <input className="inputTwo" type="text" value={this.showOilNameTwo()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeTwo}/>%
                  <input className="weightInput" type="number" onChange={this.percentageInputChangeTwo}/>weight
                </label>
                <br/>
                <label> 3 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilThree()}>-</a>
                  <input className="inputThree" type="text" value={this.showOilNameThree()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeThree}/>%
                  <input className="weightInput" type="number" onChange={this.percentageInputChangeThree}/>weight
                </label>
                <br/>
                <label> 4 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilFour()}>-</a>
                  <input className="inputFour" type="text" value={this.showOilNameFour()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeFour}/>%
                  <input className="weightInput" type="percentage" onChange={this.percentageInputChangeFour}/>weight
                </label>
                <br/>
                <label> 5 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilFive()}>-</a>
                  <input className="inputFive" type="text" value={this.showOilNameFive()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeFive}/>%
                  <input className="weightInput" type="weight" onChange={this.percentageInputChangeFive}/>weight
                </label>
                <br/>
                <label> 6 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilSix()}>-</a>
                  <input className="inputSix" type="text" value={this.showOilNameSix()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeSix}/>%
                  <input className="weightInput" type="weight" onChange={this.percentageInputChangeSix}/>weight
                </label>
                <br/>
                <label> 7 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilSeven()}>-</a>
                  <input className="inputSeven" type="text" value={this.showOilNameSeven()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeSeven}/>%
                  <input className="weightInput" type="weight" onChange={this.percentageInputChangeSeven}/>weight
                </label>
                <br/>
                <label> 8 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilEight()}>-</a>
                  <input className="inputEight" type="text" value={this.showOilNameEight()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeEight}/>%
                  <input className="weightInput" type="weight" onChange={this.percentageInputChangeEight}/>weight
                </label>
                <br/>
                <label> 9 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilNine()}>-</a>
                  <input className="inputNine" type="text" value={this.showOilNameNine()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeNine}/>%
                  <input className="weightInput" type="weight" onChange={this.percentageInputChangeNine}/>weight
                </label>
                <br/>
                <label> 10 <a classname="removeOilButton" href= "#" onClick={() => this.removeOilTen()}>-</a>
                  <input className="inputTen" type="text" value={this.showOilNameTen()}/>
                  <input className="percentageInput" type="percentage" onChange={this.percentageInputChangeTen}/>%
                  <input className="weightInput" type="weight" onChange={this.percentageInputChangeTen}/>weight
                </label>
              </form>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default StepFive
