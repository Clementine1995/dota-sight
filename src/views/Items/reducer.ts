import {
  ItemType
} from '../../types'


type ReducerAction = 
  {
    type: 'clickItem';
    id: number
  }

interface ItemState {
  items: Array<ItemType>,
  activeItem?: ItemType
}

function itemReducer(itemState: ItemState, action: ReducerAction): ItemState {
  switch (action.type) {
    case 'clickItem':
      {
        const a = 1
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