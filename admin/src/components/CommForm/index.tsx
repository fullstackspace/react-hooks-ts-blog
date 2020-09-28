import React, { FC, useEffect, useImperativeHandle } from 'react';
import { IInputItem } from '@/types/form';
import { Form, Input, Select, DatePicker, TimePicker, Button } from 'antd';
import moment from 'moment';
import { useForm } from 'antd/lib/form/Form';
import './index.scss'

const { TextArea, Search } = Input
const { Option } = Select
interface IProps {
  list: IInputItem[],
  isEdit?: boolean,
  formValues?: object | any,
  iconMethods?: (values: IObject) => void,
  callback?: (values: IObject) => void,
  [propName: string]: any
}
interface IObject {
  [propName: string]: any;
}


const CommForm: FC<IProps> = (props) => {
  const { isEdit, list, formValues, iconMethods, callback, formRef } = props
  const [form] = useForm()
  form.setFieldsValue({ ...formValues })

  useEffect(() => {
    // 详情时,空字段替换为'--'
    if (isEdit) {
      for (let key in formValues) {
        if (!formValues[key]) {
          formValues[key] = '--'
        }
      }
      form.setFieldsValue({ ...formValues })
    }
  }, [isEdit])

  useImperativeHandle(formRef, () => ({
    form
  }))

  const updateValue = (e: any, name: string, value?: any) => {
    console.log(e, name, value)
    let valObject: IObject = {}
    // console.log(e)
    if (e.target) {
      valObject = {
        [name]: e.target.value,
      }
    } else if (e === 'search') {
      return iconMethods!({ name, value })
    } else if (e === 'date') {
      valObject = {
        [value]: name,
      }
    } else {
      valObject = {
        [name]: e,
      }
      // valObject.value = e.target.value
      // valObject.value = name
    }
    return callback!(valObject)
  }

  // 表单类型
  const getInputType = (props: IInputItem) => {
    const dateFormat = 'YYYY/MM/DD';
    const { label, type, name, value, attrs } = props
    const updateValue = (e: any, name: string, value?: any) => {
      console.log(e, name, value)
      let valObject: IObject = {}
      // console.log(e)
      if (e.target) {
        valObject = {
          [name]: e.target.value,
        }
      } else if (e === 'search') {
        return iconMethods!({ name, value })
      } else if (e === 'date') {
        valObject = {
          [value]: name ? moment(name) : '',
        }
      } else {
        valObject = {
          [name]: e,
        }
        // valObject.value = e.target.value
        // valObject.value = name
      }
      console.log('valObject', valObject)
      return callback!(valObject)
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
            autoSize={attrs || true}
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
          <DatePicker.RangePicker
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
  // 详情表单
  const getDetailInput = (form: IInputItem) => {
    return (
      <Input />
    )
  }
  console.log(formValues)
  return (
    <Form
      form={form}
      layout="inline"
      labelCol={{ span: 10 }}
      labelAlign="right"
      className={isEdit ? 'detail commForm' : 'commForm'}>
      {
        list.map(item => (
          // !isEdit ?
          (
            <Form.Item
              label={item.label}
              key={item.name}
              name={item.name}
              rules={(!item?.attrs?.disabled && item.required && [{ required: true, message: `请${item.type === 'select' ? '选择' : '录入'}${item.label}` }])}>
              { !isEdit ? getInputType(item) : <Input className="form-detail" disabled />}
            </Form.Item>
          )
          // :
          // (<div key={item.name} className="comm-detail">
          //   <p className="comm-detail-title">{item.label} :{item.name}</p>
          //   </div>
          // )
        ))
      }
    </Form>
  )
}

CommForm.defaultProps = {
  isEdit: false
}

export default CommForm