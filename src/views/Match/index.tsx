/** @format */

import React, { useState } from 'react'
import './index.scss'

interface IReport {
  title: string
  pic: string
  detail: string
}

function Match() {
  const [recent, setRecent] = useState<string[]>(['Ti9', '震中杯', 'MDL巴黎站', 'Dota Pit'])

  const [reports, setReports] = useState<IReport[]>([
    { title: 'VG获得Ti9冠军', pic: '', detail: '3:0战胜LGD' },
    { title: 'LGD从败者组杀回决赛', pic: '', detail: '2:1战胜OG' },
    { title: 'VG胜者组冠军', pic: '', detail: '2:1战胜LGD' }
  ])
  return (
    <article className="ds-match ds-container">
      <section className="ds-match__reports">
        {reports.map((item, i) => (
          <Report key={i} {...item} />
        ))}
      </section>
      <section className="ds-match__recent">
        <header>近期比赛：</header>
        <ul>
          {recent.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}

function Report(prop: IReport) {
  return (
    <div className="reports__item">
      <div>{prop.title}</div>
      <div>{prop.detail}</div>
    </div>
  )
}

export default Match
