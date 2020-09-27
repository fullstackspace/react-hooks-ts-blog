import { IInputItem } from '@/types/form';
import { IColumn } from '@/types/table';

import { Tag } from 'antd';
import moment from 'moment';
import React from 'react';
const formList: IInputItem[] = [
  {
    label: '用户名',
    name: 'username',
    type: 'input',
    value: '',
    required: true,
    // attrs: { disabled: true }
  },
  {
    label: '还款用户行',
    name: 'bank',
    type: 'search',
    value: '中国银行',
    required: true,
  },
  {
    label: '性别',
    name: 'gender',
    type: 'select',
    options: [],
    value: 'Jack',
    required: true,
    // attrs: { disabled: true }
  },
  {
    label: '出生日期',
    name: 'birth',
    type: 'date',
    value: moment(new Date()),
    // attrs: { disabled: true }
  },
  {
    label: '还款日期范围',
    name: 'repayDate',
    type: 'rangeDate',
    value: '',
    attrs: { disabled: true }
  },
  {
    label: '还款时间',
    name: 'repayTime',
    type: 'time',
    value: '',
    attrs: { disabled: true }
  },
  {
    label: '还款时间范围',
    name: 'repayTimeRange',
    type: 'rangeTime',
    value: '',
    attrs: { disabled: true }
  },
  {
    label: '描述',
    name: 'descriptions',
    type: 'textarea',
    value: '',
    attrs: { disabled: true }
  },
]

const tableList: IColumn[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: any) => (
      <>
        {tags.map((tag: string) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
]

export default (options?: string) => {
  return {
    formList,
    tableList
  }
}