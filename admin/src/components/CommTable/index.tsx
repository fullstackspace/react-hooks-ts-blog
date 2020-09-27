import React, { FC, useImperativeHandle } from 'react';
import { Table, Form, InputNumber, Input } from 'antd';
import { IColumn } from '@/types/table';
import { useForm } from 'antd/lib/form/Form';
import './index.scss'


interface IProps {
  columns: IColumn[],
  data: any,
  [propName: string]: any
}

interface Item {
  key: string;
  Name: string;
  Age: number;
  Address: string;
  Tags: string;
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

const CommTable: FC<IProps> = (props) => {
  const {
    columns,
    data,
    formRef,
    editingKey,
    saveDate,
    isRequest,
    deleteDate
  } = props
  const [form] = useForm()

  const isEditing = (record: Item) => record.key === editingKey;

  const save = async (record: any) => {
    try {
      const row = await (form.validateFields()) as Item
      if (isRequest) {
        saveDate(row)
        return
      }
      const newData = [...data]
      const index = newData.findIndex(item => record.key === item.key)
      if (index > -1) {
        const item = newData[index]
        console.log(item, 'row', row)
        newData.splice(index, 1, {
          ...item,
          ...row,
        })
        saveDate(newData)
      } else {
        newData.push(row)
        saveDate(newData)
      }
    } catch (error) {
      console.log('errorInfo', error)
    }
  }
  const del = (key: React.Key) => {
    const newData = data.filter((item: Item) => key !== item.key)
    deleteDate(newData)
  }
  const edit = (record: any) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record }); // 给表单设置值
    console.log(record)
  }
  // 取消
  const cancel = () => {
    // setEditingKey('');
  };
  useImperativeHandle(formRef, () => ({
    save,
    cancel,
    del,
    edit
  }))

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

  return (
    <Form form={form} component={false}>
      <Table components={{
        body: {
          cell: EditableCell,
        },
      }}
        columns={mergedColumns}
        dataSource={data}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  )
}

export default CommTable