import * as React from 'react'
import { Hero } from '../../types'
import { Link } from "react-router-dom"

interface IHeros {
  heros: Array<Hero>
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

function HeroItem(prop: Hero) {
  return (
    <div className="ds-heros__item">
      <Link to="/heros">
        <img src={require(`@img/${prop.icon}`)} alt=""/>
      </Link>
    </div>
  )
}

export default HeroList