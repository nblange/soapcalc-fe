import React, { Component } from 'react';
import '../index.css';

class FirstFourSteps extends Component {

  render(){
    return (
      <div className='firstFourStepsBox'  >
        <div className='stepOne'>
          <span className='stepOneText'>Choose what kind of lye you will be using. Sodium hydroxide, NaOH, is used to make soap bars.
          If you want to make bar soap, click the circle next to NaOH. Potassium hyroxide, KOH, is used to make liquid soap.
          This is a more complicated process than making bar soap. It involves adding the water in two stages: one for the soap cooking stage,
          the other for diluting the soap.  You can find more about it here.  When making liquid soap, click the circle next to KOH.
          If you have 90% pure KOH check the 90% box.</span>
          <h1>Type of Lye</h1>
            <label>NaOH
              <input type='radio' name='Lye' />
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
            <input type='text' name='90%KOH' />
          </label>
        </div>
        <div className='stepThree'>
          <h1>Water</h1>
          <label>Water as % of Oils
            <input type='text' name='water%oils' />
          </label><br/>
          <label>Lye Concentration
            <input type='text' name='Lye Concecntration' />
          </label><br/>
          <label>Water : Lye Ratio
            <input type='text' name='Water:lyeRatio' />
          </label>
        </div>
        <div className='stepFour'>
          <h1>Step Four</h1>
          <label>Super Fat
            <input type='text' name='superFat' />
          </label><br/>
          <label>Super Fragrance
            <input type='text' name='Fragrance' />
          </label><br/>
          <label>Amount
            <input type='text' name='Amount' />
          </label><br/>
        </div>
      </div>
    )
  }
}

export default FirstFourSteps
