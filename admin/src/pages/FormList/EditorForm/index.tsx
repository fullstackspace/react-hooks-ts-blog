import React, { FC, useRef, useState } from 'react';
import userList from '@/model/userList';
import { IInputItem } from '@/types/form';
import CommForm from '@/components/CommForm';
import moment from 'moment';
import { getFormValue, computedFormList } from '@/utils/public';
import './index.scss'
import { Button, message } from 'antd';

interface IObject {
  [propName: string]: any
}

const { formList } = userList()
const EditorFormList: FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [list, setList] = useState([...formList])
  const formValue = getFormValue(list)
  const [params, setParams] = useState({
    ...formValue
  })

  // 表单赋值后的回调
  const back = (values: IObject) => {
    // setParams(Object.assign(params, values))
    setParams({ ...params, ...values })
    // 字段过滤(联动)
    if (values.gender && values.gender === 'tom') {
      setList([...computedFormList(list, ['username'])])
    } else {
      setList([...formList])
    }
    console.log(values.username)
  }

  const iconMethods = (values: any) => {
    // setVisible(true)
    console.log(values)
  }

  // 提交
  const submit = () => {
    // ?.可选链操作符
    const { validateFields } = formRef.current?.form
    validateFields()
      .then((val: any) => {
        console.log(val)
      }).catch((err: any) => {
        console.log(err)
      })
  }

  // 重置
  const reset = () => {
    setParams({})
    formRef.current?.form.resetFields()
  }
  return (
    <div className="form-container">
      <CommForm
        list={list}
        formValues={params}
        formRef={formRef}
        callback={(values: IObject) => back(values)}
        iconMethods={(values: any) => iconMethods(values)}></CommForm>
      <Button type="primary" onClick={submit} >提 交</Button>
      <Button type="primary" onClick={reset} >重 置</Button>
    </div>
  )
}

export default EditorFormList