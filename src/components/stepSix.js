import React, { Component } from 'react';
import $ from 'jquery';
import '../index.css';

class StepSix extends Component{
  render(){
    return(
      <div className='stepSixBox'>
        <h1 className="stepSixHeading"> Recipe Oil List </h1>
          <form className="stepSixForm">
            <label> 1
              <input className="inputOne" type="text" value="oilNameGrabbed"/>
            </label>
            <br/>
            <label> 2
              <input className="inputTwo" type="text" value="oilNameGrabbed"/>
            </label>
            <br/>
            <label> 3
              <input className="inputThree" type="text" value="oilNameGrabbed"/>
            </label>
            <br/>
            <label> 4
              <input className="inputFour" type="text" value="oilNameGrabbed"/>
            </label>
            <br/>
            <label> 5
              <input className="inputFive" type="text" value="oilNameGrabbed"/>
            </label>
            <br/>
            <label> 6
              <input className="inputSix" type="text" value="oilNameGrabbed"/>
            </label>
            <br/>
            <label> 7
              <input className="inputSeven" type="text" value="oilNameGrabbed"/>
            </label>
            <br/>
            <label> 8
              <input className="inputEight" type="text" value="oilNameGrabbed"/>
            </label>
            <br/>
            <label> 9
              <input className="inputNine" type="text" value="oilNameGrabbed"/>
            </label>
            <br/>
            <label> 10
              <input className="inputTen" type="text" value="oilNameGrabbed"/>
            </label>
          </form>
      </div>

    )
  }
}

export default StepSix
