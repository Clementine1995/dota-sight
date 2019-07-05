/** @format */

import React, { useState, useEffect } from 'react'
import { Select, Spin } from 'antd'

interface IVersionD {
  version: string
}

const { Option } = Select

function Version() {
  const [version, setVersion] = useState<string>('0.0')

  const [versions, setVersions] = useState<string[]>()

  function handleChange(value: string) {
    setVersion(value)
  }

  useEffect(() => {
    let ignore = false

    window.setTimeout(() => {
      if (!ignore) {
        setVersions(['7.22b', '7.22a', '7.22', '7.21d', '7.21c'])
        setVersion('7.22b')
      }
    }, 1000)
    return () => {
      ignore = true
    }
  }, [])

  return (
    <article className="ds-version ds-contariner">
      <div className="">
        <span>版本：</span>
        <Select value={version} onChange={handleChange}>
          {versions &&
            versions.map((item, i) => (
              <Option key={i} value={item}>
                {item}
              </Option>
            ))}
        </Select>
      </div>
      <VersionDetail version={version} />
    </article>
  )
}

function VersionDetail(prop: IVersionD) {
  const [detail, setDetail] = useState<object>()

  useEffect(() => {
    if (prop.version !== '0.0') {
      setDetail({})
    }
  }, [prop.version])
  return <section>{detail ? <div>当前版本：{prop.version}</div> : <Spin />}</section>
}

export default Version
