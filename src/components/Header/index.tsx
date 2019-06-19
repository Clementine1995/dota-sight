import * as React from 'react'
import './index.scss'

class Header extends React.Component {
  render () {
    return (
      <div className="ds-header">
        <div className="ds-header--left">
          <span>❤</span>
          <div className="ds-header__title">Dota sight</div>
        </div>
        <div className="ds-header__content">
          <div className="content__item">英雄</div>
          <div className="content__item">物品</div>
          <div className="content__item">资讯</div>
        </div>
        <div className="ds-header--right">
          <div>登录</div>
        </div>
      </div>
    )
  }
}

export default Header