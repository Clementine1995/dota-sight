/** @format */

import React, { useContext } from 'react'
import { ItemType } from '../../types'
import { ItemDispatch } from './index'

interface IItem {
  items: ItemType[]
}

function ItemCol(prop: IItem) {
  return (
    <div className="ds-items__col">
      {prop.items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </div>
  )
}

function Item(prop: ItemType) {
  const dispatch = useContext(ItemDispatch)
  function handleClick() {
    dispatch({ type: 'clickItem', id: prop.id })
  }
  return (
    <div className="items-col__item" onClick={handleClick}>
      {prop.name}
    </div>
  )
}

export default ItemCol
