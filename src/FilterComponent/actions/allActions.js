import * as constants from '../constants'


export const selectBrand = (id) => ({
    type: constants.SELECT_BRAND,
    payload: id
  }
)
