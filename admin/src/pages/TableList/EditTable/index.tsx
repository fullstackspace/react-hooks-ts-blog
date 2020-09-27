import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Button } from 'antd';

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

// 循环生成数据
const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  console.log(editing, '-', dataIndex, '-', title)
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
          children
        )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [count, setCount] = useState('1000')
  const [isAdd, setIsAdd] = useState(true)
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');  // 控制修改的是那一行数据

  const isEditing = (record: Item) => record.key === editingKey; // 是否可以编辑。key === editingKey时,该行能被修改

  // 修改
  const edit = (record: Item) => {
    console.log(record, 1)
    form.setFieldsValue({ name: '', age: '', address: '', ...record }); // 给表单设置值
    setEditingKey(record.key);
  };

  // 取消
  const cancel = () => {
    setEditingKey('');
  };

  // 保存
  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
        setIsAdd(true)
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        // 控制当前行显示的操作按钮
        return editable ? (
          <span>
            <Button type='link' onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button type='link'>Cancel</Button>
            </Popconfirm>
          </span>
        ) : (
            <Button type='link' disabled={editingKey !== ''} onClick={() => edit(record)}>
              Edit
            </Button>
          );
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  console.log(editingKey)

  const handleAdd = () => {
    form.resetFields()
    setIsAdd(false)
    const addCount = count
    const newData = [{
      key: addCount,
      name: '',
      age: 0,
      address: '',
    }];
    console.log(newData)
    setCount(String(Number(count) + 1))
    setData([...newData, ...data])
    setEditingKey(addCount)
    console.log(data)
  }
  return (
    <div>
      <Button type="primary" disabled={!isAdd} onClick={handleAdd}>Add</Button>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </div>
  );
};
export default EditableTable 