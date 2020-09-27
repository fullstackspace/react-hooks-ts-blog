import React, { FC, useRef, useState } from 'react';
import CommForm from '@/components/CommForm';
import detailList from '@/model/detailList';
import { getFormValue } from '@/utils/public';
import { Button, message } from 'antd';
import './index.scss'

interface IObject {
  [propName: string]: any
}

const { formList } = detailList()

const DetailForm: FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [list, setList] = useState([...formList])
  const formValue = getFormValue(list)
  const [params, setParams] = useState({
    ...formValue
  })

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

  const submit = () => {
    formRef.current?.submit()
  }

  return (
    <div>
      <CommForm
        list={list}
        formValues={params}
        formRef={formRef}
        isSuccess={(values: IObject) => isSuccess(values)}
        isEdit={true}
      >
      </CommForm>
      <Button type="primary" onClick={submit} >搜集数据</Button>
    </div>
  )
}

export default DetailForm