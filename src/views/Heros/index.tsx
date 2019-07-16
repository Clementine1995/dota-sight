/** @format */

import * as React from 'react'
import './index.scss'
import HeroList from './HeroList'
import herosAll from './heros'

function Heros() {
  return (
    <div className="ds-heros ds-container">
      {herosAll.map((hero, i) => (
        <HeroList key={i} heros={hero} />
      ))}
    </div>
  )
}

export default Heros
