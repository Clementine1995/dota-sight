/** @format */

import * as React from 'react'
import { ItemType } from '../../types'

interface IProp {
  activeItem: ItemType
}

function Detail(prop: IProp) {
  console.log(prop)
  return (
    <>
      <p>{prop.activeItem.desc}</p>
      <p>{prop.activeItem.price}</p>
    </>
  )
}

export default Detail
