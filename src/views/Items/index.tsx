import React, {useReducer} from 'react'
import './index.scss'
import itemsAll from './items'
import { ItemType } from '../../types'
import ItemCol from './ItemCol'
import itemReducer from './reducer'
import Detail from './Detail'
import Recipe from './Recipe'

export const ItemDispatch = React.createContext<React.Dispatch<any> | any>({})

function Items() {
  const [itemState, dispatch] = useReducer(itemReducer, { items: itemsAll })
  const itemSplit = itemsAll.reduce((arr: Array<ItemType>[], item) => {
    if (item.isBasic) {
      arr[0].push(item)
    } else {
      arr[1].push(item)
    }
    return arr
  }, [[], []])

  return (
    <ItemDispatch.Provider value={dispatch}>
      <div className="ds-items">
        <div className="ds-items__desc">
          {itemState.activeItem && <Detail activeItem={itemState.activeItem} />}
        </div>
        <div className="ds-items__container">
          {itemSplit.map((item, i) => (
            <ItemCol key={i} items={item} />
          ))}
        </div>
        <div className="ds-items__recipe">
          {itemState.activeItem && <Recipe activeItem={itemState.activeItem} />}
        </div>
      </div>
    </ItemDispatch.Provider>
    
  )
}

export default Items