import Table from 'antd/lib/table'
import Tag from 'antd/lib/tag'
import React, { ReactNode } from 'react'

import { locale } from './locale'

export function ProjectTable() {
  const message = locale.en
  const columns = [
    {
      title: message.name,
      dataIndex: 'name',
    },
    {
      title: message.responsiblePerson,
      dataIndex: 'responsiblePerson',
    },
    {
      title: message.department,
      dataIndex: 'department',
    },
    {
      title: message.capitalized,
      dataIndex: 'capitalized',
    },
    {
      title: message.projectTag,
      dataIndex: 'projectTag',
      render: (tags: string[]): ReactNode =>
        tags?.map?.(tag => <Tag key={tag}>{tag}</Tag>),
    },
  ]
  return <Table columns={columns} dataSource={data} rowKey="id" />
}

const data = [
  {
    id: 1,
    name: 'クラウド会計Plus',
    responsiblePerson: '植田 隆史',
    department: 'ERP本部',
    capitalized: 'する',
    projectTag: ['Tag 1', 'Tag 2'],
  },
  {
    id: 2,
    name: 'API開発',
    responsiblePerson: '杉浦 まさたか',
    department: 'ERP本部',
    capitalized: 'する',
    projectTag: ['Tag 1', 'Tag 2'],
  },
  {
    id: 3,
    name: '債権請求',
    responsiblePerson: '後藤 悠太',
    department: 'ERP本部',
    capitalized: 'する',
    projectTag: ['Tag 1', 'Tag 2'],
  },
  {
    id: 4,
    name: '債権請求',
    responsiblePerson: '後藤 悠太',
    department: 'ERP本部',
    capitalized: 'する',
    projectTag: ['Tag 1', 'Tag 2'],
  },
  {
    id: 5,
    name: 'ARM123  SF連携',
    responsiblePerson: '後藤 悠太',
    department: 'ERP本部',
    capitalized: 'する',
    projectTag: ['Tag 1', 'Tag 2'],
  },
  {
    id: 6,
    name: 'ARM126  前受金管理',
    responsiblePerson: '後藤 悠太',
    department: 'ERP本部',
    capitalized: 'しない',
    projectTag: ['Tag 1', 'Tag 2'],
  },
  {
    id: 7,
    name: 'ARM149  リファクタリング',
    responsiblePerson: 'Steve',
    department: 'ERP本部',
    capitalized: 'しない',
    projectTag: ['Tag 1', 'Tag 2'],
  },
  {
    id: 8,
    name: 'ARM149  リファクタリング',
    responsiblePerson: 'Steve',
    department: 'ERP本部',
    capitalized: 'しない',
    projectTag: ['Tag 1', 'Tag 2'],
  },
  {
    id: 9,
    name: 'ARM149  リファクタリング',
    responsiblePerson: 'Steve',
    department: 'ERP本部',
    capitalized: 'しない',
    projectTag: ['Tag 1', 'Tag 2'],
  },
  {
    id: 10,
    name: 'ARM149  リファクタリング',
    responsiblePerson: 'Steve',
    department: 'ERP本部',
    capitalized: 'しない',
    projectTag: ['Tag 1', 'Tag 2'],
  },
  {
    id: 11,
    name: 'ARM149  リファクタリング',
    responsiblePerson: 'Steve',
    department: 'ERP本部',
    capitalized: 'しない',
    projectTag: ['Tag 1', 'Tag 2'],
  },
  {
    id: 12,
    name: 'ARM149  リファクタリング',
    responsiblePerson: 'Steve',
    department: 'ERP本部',
    capitalized: 'しない',
    projectTag: ['Tag 1', 'Tag 2'],
  },
]
