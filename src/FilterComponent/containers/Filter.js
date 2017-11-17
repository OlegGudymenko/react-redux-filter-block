import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header'
import Brand from '../components/Brand'
import PriceRange from '../components/PriceRange'
import SwitchContainer from '../components/SwitchContainer'

class Filter extends Component {
  
  render() {
    return (
      <form className="filters-container">
        <Header/>
  			<Brand/>
        <PriceRange/>
        <SwitchContainer/>
  			<div className="filter-footer">
  				<button className="btn-apply">
  					Apply filters
  				</button>
  			</div>
  		</form>
    );
  }
}

export default Filter;
