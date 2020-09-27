import React, { Component, FC } from 'react';
import CommTable from '@/components/CommTable';
import { Table, Tag, Space, Button } from 'antd';
import userList from '@/model/userList';
import './index.scss'

interface Iprops {

}

interface IButtonAction {
  text: string,
  clickButton: string,
  [propName: string]: any
}

const buttonAction: IButtonAction[] = [
  {
    text: '申请',
    clickButton: 'applyButton'
  },
  {
    text: '取消',
    clickButton: 'cancelButton'
  }
]

const { tableList } = userList()

const GeneralTable: FC<Iprops> = (props) => {

  const columns = [
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <Space size="middle">
          {
            buttonAction.map((action: IButtonAction) => (
              <Button key={action.clickButton} type='link' onClick={() => handleButton(action.clickButton, record)}>{action.text}</Button>
            ))
          }
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  // 
  const handleButton = (name: string, record: any) => {
    console.log(name)
    if (name === 'applyButton') {
      console.log(record)
    }

    if (name === 'cancleButton') {
      console.log(record)
    }
  }
  return (
    <div className='table-container'>
      <CommTable columns={[...tableList, ...columns]} data={data} />
    </div>
  )
}

export default GeneralTable