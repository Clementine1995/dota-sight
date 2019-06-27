import * as React from 'react'
import { HeroType } from '../../types'
import { Link } from "react-router-dom"

interface IHeros {
  heros: Array<HeroType>
}

function HeroList(prop: IHeros) {
  return (
    <div className="ds-heros__line">
      {prop.heros.map((hero, i) => (
        <HeroItem key={i} {...hero} />
      ))}
    </div>
  )
}

function HeroItem(prop: HeroType) {
  return (
    <div className="ds-heros__item">
      <Link to={`/hero/${prop.name}`}>
        <img src={require(`@img/${prop.icon}`)} alt=""/>
      </Link>
    </div>
  )
}

export default HeroList