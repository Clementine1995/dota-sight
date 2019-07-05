/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'antd'
import './index.scss'

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/match">赛事新闻</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/version">版本更新</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/heros">战队动态</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/news">Dota新闻</Link>
    </Menu.Item>
  </Menu>
)

function Header() {
  return (
    <header className="ds-header">
      <div className="ds-header--left">
        <span>❤</span>
        <div className="ds-header__title">
          <Link to="/">Dota sight</Link>
        </div>
      </div>
      <nav className="ds-header__content">
        <div className="content__item">
          <Link to="/heros">英雄</Link>
        </div>
        <div className="content__item">
          <Link to="/items">物品</Link>
        </div>
        <div className="content__item">
          <Dropdown overlay={menu}>
            <Link to="/news">资讯</Link>
          </Dropdown>
        </div>
      </nav>
      <div className="ds-header--right">
        <div>登录</div>
      </div>
    </header>
  )
}

export default Header
