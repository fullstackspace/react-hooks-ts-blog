import React, { FC, useRef, useState } from 'react';
import CommTable from '@/components/CommTable';
import { Space, Button, Popconfirm, message } from 'antd';
import detailList from '@/model/detailList';
import './index.scss'

interface Iprops {

}

interface Item {
  key: string;
  Name: string;
  Age: number;
  Address: string;
  Tags: string;
}

interface IButtonAction {
  text: string,
  clickButton: string,
  [propName: string]: any
}


const dataList = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: 'developer',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: 'loser',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: 'teacher',
  },
];

const { tableList } = detailList()

const RequestTable: FC = (props) => {
  const [data, setData] = useState([...dataList])
  const formRef = useRef<HTMLFormElement>(null)
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record: Item) => record.key === editingKey;
  const columns = [
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => {
        const editable = isEditing(record);
        return editable ? (
          <Space>
            <Button type='link' onClick={() => handleButton('saveButton', record)} style={{ marginRight: 8 }}>
              Save
            </Button>
            <Button type='link' onClick={() => handleButton('cancelButton', record)} >Cancel</Button>
          </Space>
        ) : (
            <Space>
              <Button type='link' disabled={editingKey !== ''} onClick={() => handleButton('editButton', record)}>
                Edit
            </Button>
              <Button type='link' disabled={editingKey !== ''} onClick={() => handleButton('deleteButton', record)}>
                Delete
            </Button>
            </Space>
          )
      },
    },
  ];

  // 
  const handleButton = (name: string, record: any) => {
    console.log(name)
    // 编辑
    if (name === 'editButton') {
      setEditingKey(record.key);
      formRef.current?.edit(record)
    }

    if (name === 'cancelButton') {
      setEditingKey('')
    }
    if (name === 'deleteButton') {
      toDelete(record)
    }
    if (name === 'saveButton') {
      formRef.current?.save(record)
    }
  }

  // 数据保存
  const saveDate = async (data: Item) => {
    console.log(data)
    // 发送修改后的数据给后台接口
    // const res = await xxxx
    // 重新请求表格数据
    // setData(data)
    setEditingKey('')
    message.success('修改成功!')
  }
  const toDelete = async (record: Item) => {
    console.log(record)
    // 发送请求删除数据
    // const res = await xxxx
    // 数据删除成功后,重新请求数据
    message.success('删除成功!')
  }

  return (
    <div className='table-container'>
      <CommTable
        editingKey={editingKey}
        formRef={formRef}
        columns={[...tableList, ...columns]}
        data={data}
        saveDate={saveDate}
        isRequest={true}
      />
    </div>
  )
}

export default RequestTable