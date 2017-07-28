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
          <span className = 'stepThreeText'>'Water as % of Oils' is the simplest way to determine the amount of water used in your recipe.  It is recommended that beginners use this method
             and use the default value of 38%. More experienced users typically reduce this percentage to around 32-33%. Example: Using the default 38% and the total weight of the oils in
             your recipe is 1 pound, the amount of water in which the lye is mixed would be 0.38 pounds. The water and lye amounts are calculated on the 'View Recipe' page.
             'Lye Concentration' - Advanced users can set the Lye percentage of the water & lye solution directly.  Example: If you want lye to be 34% of (lye + water), click
             'Lye Concentration' and enter 34 in the text box to the right of the check box before clicking 'Calculate Recipe'.
             'Water : Lye Ratio' - Advanced users can also set the Water:Lye ratio directly.  Example: If you want the water to lye ratio to be 2 to 1, click 'Water : Lye Ratio'
             and enter 2:1 before clicking 'Calculate Recipe'.</span>
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
