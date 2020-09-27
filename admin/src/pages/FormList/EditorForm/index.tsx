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
    if (values.gender && formValue.gender === 'Tom') {
      setList([...computedFormList(list, ['username'])])
    }
    console.log(values.username)
  }
  const isSuccess = (values: IObject) => {
    // setBody(values)
    const { isOk = true } = values
    if (!isOk) {
      message.warn('当前页面存在必填项未录入或数据录入错误,请检查!')
    } else {
      formRef.current?.reset()
    }
    console.log('表单数据集合', JSON.stringify(values))
  }

  const iconMethods = (values: any) => {
    // setVisible(true)
    console.log(values)
  }

  // 提交
  const submit = () => {
    // ?.可选链操作符
    formRef.current?.submit()
  }

  // 重置
  const reset = () => {
    formRef.current?.reset()
  }
  return (
    <div className="form-container">
      <CommForm
        list={list}
        formValues={params}
        formRef={formRef}
        callback={(values: IObject) => back(values)}
        isSuccess={(values: IObject) => isSuccess(values)}
        iconMethods={(values: any) => iconMethods(values)}></CommForm>
      <Button type="primary" onClick={submit} >提 交</Button>
      <Button type="primary" onClick={reset} >重 置</Button>
    </div>
  )
}

export default EditorFormList