import 'antd/dist/antd.less'

import Button from 'antd/es/button'
import React from 'react'
import { ProjectTable } from 'ui'

import { ReactComponent as Logo } from './image/logo.svg'
import styles from './index.module.scss'

export default function Project() {
  return (
    <div className={styles.primary}>
      <div className={styles.header}>
        <Logo width={40} />
        <Button type="primary">Create project</Button>
      </div>
      <ProjectTable />
    </div>
  )
}
