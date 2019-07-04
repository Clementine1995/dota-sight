/** @format */

import { ItemType } from '../../types'

interface ReducerAction {
  type: 'clickItem'
  id: number
}

interface ItemState {
  items: ItemType[]
  activeItem?: ItemType
}

function itemReducer(itemState: ItemState, action: ReducerAction): ItemState {
  switch (action.type) {
    case 'clickItem': {
      // itemState.activeItem = itemState.items.flat(1).find(item => item.id === action.id)
      return {
        items: itemState.items,
        activeItem: itemState.items.find(item => item.id === action.id)
      }
    }
    default:
      return itemState
  }
}

export default itemReducer
