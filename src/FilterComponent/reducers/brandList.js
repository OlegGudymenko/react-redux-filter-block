import * as constants from '../constants'
const initialState = [
  {
    id: 1,
    brandName: 'Apple',
    selected: true
  },
  {
    id: 2,
    brandName: 'HP',
    selected: false
  },
  {
    id: 3,
    brandName: 'Samsung',
    selected: true
  },
  {
    id: 4,
    brandName: 'Huawei',
    selected: false
  },
]

export default function brandList(state = initialState,action) {
  switch (action.type) {
    case 'SELECT_BRAND': {
      const newItem = state.find( (item) => {
        if(item.id === action.payload){
          item.selected = !item.selected
          return item
        }
      })
      return [...state, ...newItem]
    }
    break;
  }
  return state
}
