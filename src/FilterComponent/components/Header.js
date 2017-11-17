import React from 'react';


const Header = (props) => {
  return(
    <div className="filter-header">
      <div className="left">
        <span>Filters</span>
      </div>
      <div className="right btn-clear">
        <span>Clear all <i className="icon ion-trash-a"></i></span>
      </div>
    </div>
  )
}
export default Header
