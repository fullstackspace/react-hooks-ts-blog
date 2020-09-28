import React, { FC, useEffect, useRef, useState } from 'react';
import { formList } from '@/model/searchList';
import { IInputItem } from '@/types/form';
import CommForm from '@/components/CommForm';
import { getFormValue } from '@/utils/public';
import { UpOutlined, DownOutlined } from '@ant-design/icons'
import './index.scss'
import { Button, message, Row, Col } from 'antd';

interface IObject {
  [propName: string]: any
}
const SearchFormList: FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [list, setList] = useState([...formList])
  const formValue = getFormValue(list)
  const [expand, setExpand] = useState(false)
  const [params, setParams] = useState({
    ...formValue
  })

  useEffect(() => {
    if (expand) {
      setList([...formList])
    } else {
      setList([...formList.filter((item, index) => index < 3)])
    }
  }, [expand])
  // 表单赋值后的回调
  const back = (values: IObject) => {
    setParams(Object.assign(params, values))
    console.log(params)
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


  // 提交
  const submit = () => {
    // ?.可选链操作符
    const res = formRef.current?.submit()
    console.log('res', res)
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
        isSuccess={(values: IObject) => isSuccess(values)}></CommForm>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" onClick={submit}>
            Search
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={reset}
          >
            Clear
          </Button>

        </Col>
      </Row>
    </div>
  )
}

export default SearchFormList