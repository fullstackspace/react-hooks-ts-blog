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
    Name: 'John Brown',
    Age: 32,
    Address: 'New York No. 1 Lake Park',
    Tags: 'developer',
  },
  {
    key: '2',
    Name: 'Jim Green',
    Age: 42,
    Address: 'London No. 1 Lake Park',
    Tags: 'loser',
  },
  {
    key: '3',
    Name: 'Joe Black',
    Age: 32,
    Address: 'Sidney No. 1 Lake Park',
    Aags: 'teacher',
  },
];

const { tableList } = detailList()

const OperationTable: FC = (props) => {
  const [data, setData] = useState([...dataList])
  const [count, setCount] = useState(String(data.length + 1))
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
      console.log(record)
      setEditingKey('')
    }
    if (name === 'deleteButton') {
      formRef.current?.del(record.key)
    }
    if (name === 'saveButton') {
      formRef.current?.save(record)
    }
  }

  // 数据保存(前端)
  const saveDate = (data: []) => {
    setData(data)
    setEditingKey('')
    message.success('修改成功!')
  }
  // 数据删除(前端)
  const deleteDate = (data: []) => {
    setData(data)
    message.success('删除成功!')
  }

  const handleAdd = () => {
    // const addCount = count
    // setEditingKey(addCount)
    // const newData = {
    //   key: addCount,
    //   Name: '',
    //   Age: 0,
    //   Address: '',
    //   Tags: '',
    // };
    // setCount(count + 1)
    // setData([newData, ...data])
    console.log(data)
  }

  // console.log(editingKey)
  return (
    <div className='table-container'>
      <Button type="primary" onClick={handleAdd}>新增</Button>
      <CommTable
        editingKey={editingKey}
        formRef={formRef}
        columns={[...tableList, ...columns]}
        data={data}
        saveDate={saveDate}
        deleteDate={deleteDate}
        isRequest={false}
      />
    </div>
  )
}

export default OperationTable