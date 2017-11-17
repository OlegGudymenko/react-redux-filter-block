import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const PriceRange = (props) => {
  return(
    <div className="filter-price-range">
      <h3>Price range:</h3>
      <div className="input-container">
        <label>From</label>
      <input type="text"/>
      </div>
      <div className="input-container">
        <label>To</label>
      <input type="text"/>
      </div>
      <div className="filter-slider"></div>
    </div>
  )
}




const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PriceRange)
