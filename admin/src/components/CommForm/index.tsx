import React, { FC } from 'react';
import { IInputItem } from '@/types/form';
import { Form, Input, Select, DatePicker, TimePicker, Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import './index.scss'

const { RangePicker } = DatePicker
const { TextArea, Search } = Input
const { Option } = Select
interface IProps {
  list: IInputItem[],
  isEdit?: boolean,
  formValues?: object
}

const getInput = (item: IInputItem) => {
  const dateFormat = 'YYYY/MM/DD';
  const { label, type, name, value, attrs } = item
  const updateValue = (e: any, name: string, names?: any) => {
    console.log(e, name)
  }
  switch (type) {
    case 'input':
      return (
        <Input
          {...attrs}
          placeholder={attrs?.disabled ? '' : `请输入${label}`}
          onInput={(e) => updateValue(e, name)} />
      )
    case 'textarea':
      return (
        <TextArea
          {...attrs}
          placeholder={attrs?.disabled ? '' : `请选择${label}`}
          autoSize={item.attrs || true}
          onInput={(e) => updateValue(e, name)} />
      )
    case 'search':
      return (
        <Search
          {...attrs}
          placeholder={attrs?.disabled ? '' : `请选择${label}`}
          onSearch={val => updateValue('search', val, name)}
        />
      )
    case 'select':
      return (
        <Select
          {...attrs}
          placeholder={attrs?.disabled ? '' : `请选择${label}`}
          onChange={value => updateValue(value, name)}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      )
    case 'date':
      return (
        <DatePicker
          {...attrs}
          placeholder={attrs?.disabled ? '' : `请选择${label}`}
          format={dateFormat}
          onChange={(e, a) => updateValue('date', a, name)} />
      )
    case 'rangeDate':
      return (
        <RangePicker
          {...attrs}
          placeholder={attrs?.disabled ? '' : `请选择${label}`}
          onChange={(e, value) => updateValue('date', name, value)} />
      )
    case 'time':
      return (
        <TimePicker
          {...attrs}
          placeholder={attrs?.disabled ? '' : `请选择${label}`}
          onChange={(e, value) => updateValue('date', name, value)} />
      )
    case 'rangeTime':
      return (
        <TimePicker
          {...attrs}
          placeholder={attrs?.disabled ? '' : `请选择${label}`} />
      )
    case 'rangeTime':
      return (
        <TimePicker
          {...attrs}
          placeholder={attrs?.disabled ? '' : `请选择${label}`} />
      )
    default: return null
  }
}

const CommForm: FC<IProps> = (props) => {
  const { isEdit, list, formValues } = props
  const [form] = useForm()
  return (
    <Form
      form={form}
      layout="inline"
      labelCol={{ span: 10 }}
      labelAlign="right"
      className={isEdit ? 'detail commForm' : 'commForm'}
      initialValues={{ ...formValues }}>
      {
        list.map(item => (
          !isEdit ?
            (
              <Form.Item
                label={item.label}
                key={item.name}
                name={item.name}
                rules={(!item?.attrs?.disabled && item.required && [{ required: true, message: `请${item.type === 'select' ? '选择' : '录入'}${item.label}` }])}>
                {getInput(item)}
              </Form.Item>
            )
            :
            (<div key={item.name} className="comm-detail">
              <p className="comm-detail-title">{item.label} :</p>
            </div>)
        ))
      }
    </Form>
  )
}

CommForm.defaultProps = {
  isEdit: false
}

export default CommForm