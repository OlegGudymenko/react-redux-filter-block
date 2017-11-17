import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const SwitchContainer = (props) => {
  return(
    <div className="filter-switch-container close">
      <div className="switch-block">
        <span>Another option</span>
        <i className="icon ion-chevron-down down"></i>
        <i className="icon ion-chevron-up up"></i>
      </div>
      <div className="switch-content"></div>
    </div>
  )
}

export default SwitchContainer

//
// const mapStateToProps = (state) => ({})
//
// const mapDispatchToProps = (dispatch) => ({})
//
// export default connect(mapStateToProps, mapDispatchToProps)(SwitchContainer)
//

{/* <div className="filter-switch-container close">
  <div className="switch-block">
    <span>Pricing option</span>
    <i className="icon ion-chevron-down down"></i>
    <i className="icon ion-chevron-up up"></i>
  </div>
  <div className="switch-content"></div>
</div> */}
