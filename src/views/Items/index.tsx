import React, {useReducer} from 'react'
import './index.scss'
import itemsAll from './items'
import ItemCol from './ItemCol'
import itemReducer from './reducer'

export const ItemDispatch = React.createContext<React.Dispatch<any> | any>({})

function Items() {
  const [itemState, dispatch] = useReducer(itemReducer, { items: itemsAll })
  return (
    <ItemDispatch.Provider value={dispatch}>
      <div className="ds-items">
        <div className="ds-items__desc">
          {itemState.activeItem && itemState.activeItem.name}
        </div>
        <div className="ds-items__container">
          {itemState.items.map((item, i) => (
            <ItemCol key={i} items={item} />
          ))}
        </div>
        <div className="ds-items__recipe">
          这里是配方
        </div>
      </div>
    </ItemDispatch.Provider>
    
  )
}

export default Items