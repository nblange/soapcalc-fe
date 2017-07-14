import React, { Component } from 'react';

class FirstFourSteps extends Component {
  render(){
    return (
      <div className='firstFourStepsBox'>
        <div className='stepOne'>
          <h1>Type of Lye</h1>
            <label>NaOH
              <input type='radio' name='Lye' value='NaOH'/>
            </label><br/>
            <label>KOH
              <input type='radio' name='Lye' value='KOH'/>
            </label><br/>
            <label>%90KOH
              <input type='checkbox' name='90%KOH' value='%90KOH'/>
            </label>
        </div>
        <div className='stepTwo'>
          <h1> Weight of Oils</h1>
          <label>Pounds
            <input type='radio' name='Weight' value='Pounds' checked/>
          </label><br/>
          <label>Ounces
            <input type='radio' name='Weight' value='KOH'/>
          </label><br/>
          <label>Grams
            <input type='radio' name='Weight' value='KOH'/>
          </label><br/>
          <label>
            <input type='text' name='90%KOH' value='1'/>
          </label>
        </div>
        <div className='stepThree'>
          <h1>Water</h1>
          <label>Water as % of Oils
            <input type='text' name='water%oils' value=''/>
          </label><br/>
          <label>Lye Concentration
            <input type='text' name='Lye Concecntration' value=''/>
          </label><br/>
          <label>Water : Lye Ratio
            <input type='text' name='Water:lyeRatio' value=''/>
          </label>
        </div>
        <div className='stepFour'>
          <h1>Step Four</h1>
          <label>Super Fat
            <input type='text' name='superFat' value=''/>
          </label><br/>
          <label>Super Fragrance
            <input type='text' name='Fragrance' value=''/>
          </label><br/>
          <label>Amount
            <input type='text' name='Amount' value=''/>
          </label><br/>
        </div>
      </div>
    )
  }
}

export default FirstFourSteps
