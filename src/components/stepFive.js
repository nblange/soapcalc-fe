import React, { Component } from 'react';
import 'whatwg-fetch';
import $ from 'jquery';

class StepFive extends Component{
  constructor(props) {
  		super(props)
  		this.state = {
  			ingredients: []

      }
}
  	ingredientsGrab() {
  		var me = this;
  		$.ajax({
  			method: 'GET',
  			url: 'http://localhost:3002/api/ingredients',
  		})
  		.then(function(ingredients){
            me.setState({ingredients: ingredients})
  		})
  	}
    componentWillMount() {
        this.ingredientsGrab()
    }

render() {
  console.log(this.state.ingredients[0], 'in render1')
      return(
        <div className='stepFiveBox'>
          <span>bubbly</span>
        </div>
      )
  }
}

export default StepFive
