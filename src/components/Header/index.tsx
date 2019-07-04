/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

function Header() {
  return (
    <div className="ds-header">
      <div className="ds-header--left">
        <span>❤</span>
        <div className="ds-header__title">
          <Link to="/">Dota sight</Link>
        </div>
      </div>
      <div className="ds-header__content">
        <div className="content__item">
          <Link to="/heros">英雄</Link>
        </div>
        <div className="content__item">
          <Link to="/items">物品</Link>
        </div>
        <div className="content__item">
          <Link to="/news">资讯</Link>
        </div>
      </div>
      <div className="ds-header--right">
        <div>登录</div>
      </div>
    </div>
  )
}

export default Header
