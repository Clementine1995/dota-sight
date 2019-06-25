import * as React from 'react'
import './index.scss'
import HeroList from './HeroList'
import herosAll from './heros'


function Heros() {
  return (
    <div className="ds-heros">
      <div className="ds-heros__container">
        {herosAll.map((hero, i) => (
          <HeroList key={i} heros={hero} />
        ))}
      </div>
    </div>
  )
}


export default Heros