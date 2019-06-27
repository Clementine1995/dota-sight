import * as React from 'react'
import { ItemType } from '../../types'

interface IProp {
  activeItem: ItemType
}

function Recipe(prop: IProp) {
  return (
    <>
      <div>{prop.activeItem.compose && prop.activeItem.compose.map((item, i) => (<span key={i}>{item.name}</span>))}</div>
      <div>{prop.activeItem.name}</div>
      <div>{prop.activeItem.recipes && prop.activeItem.recipes.map((item, i) => (<span key={i}>{item.name}</span>))}</div>
    </>
  )
}


export default Recipe