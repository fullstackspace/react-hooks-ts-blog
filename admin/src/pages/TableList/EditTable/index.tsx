import React, { Component } from 'react';
import { Table, Tag, Space, Input } from 'antd';
import './index.scss'

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    isEdit: false
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    isEdit: false
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    isEdit: false
  },
];
class EditTable extends Component {
  constructor(prop: any) {
    super(prop)
  }
  state = {

  }
  handleClick = (record: any, text: string, index: any) => {
    // handleClick = (event: any, record: object, index: any) => {
    console.log(record, text, index)
  }
  render() {
    const _that = this
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <span>{text}</span>,
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
        render: (text: string, record: any) => {
          console.log(text, record, 2)
          return (
            // <span>{text}</span>
            <Input name={text} value={text} />
          )
        }
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: any) => (
          <>
            {tags.map((tag: any) => {
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
      {
        title: 'Action',
        key: 'action',
        render: (text: any, record: any, index: any) => (
          <Space size="middle">
            <a onClick={() => _that.handleClick(record, text, index)} >Invite {record.name}</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ];
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default EditTable