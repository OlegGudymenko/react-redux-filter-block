import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectBrand } from '../actions/allActions'

const Brand = (props) => {
  const {
    data,
    select
  } = props
  return(
    <div className="filter-brand">
      <h3>Brand:</h3>
      <div className="tags">
        {data.map( (item,index) => (
          <span
            className={`tegs-item ${item.selected ? 'selected': ''}`}
            key={index}
            onClick={ () => select(item.id) }
            >
            {item.brandName}
            <i className="icon ion-close-round remove"></i>
          </span>
        ))}
      </div>
    </div>
  )
}



const mapStateToProps = (state) => ({
  data: state.brandList
})

const mapDispatchToProps = dispatch => bindActionCreators({
  select: (id) => selectBrand(id)
  }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Brand)
