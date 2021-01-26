import React, { useCallback, useEffect, useState } from 'react';
import { Layout } from 'antd';
// 侧边栏
import Aside from './Aside';
// 头部
import TopHeader from './TopHeader';
// 内容区域
import TabComtent from './TabComtent';
import './index.scss';
import { getToken, removeToken } from '@/utils/stroages';
import { useHistory } from 'react-router';
import Dialog from '@/components/Dialog';


const { Footer } = Layout;
interface IProps {
  [propName: string]: any
}

export interface ITagProps {
  menuOpen: Array<string>,
  selectKeys: Array<string>,
  title: string
}


const Admin: React.FC = (props: IProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const [visible, setVisible] = useState(false)
  const [tagArray, setTagArray] = useState<Array<ITagProps>>([{
    menuOpen: [],
    selectKeys: ["/firstPages"],
    title: '首页'
  }])
  const history = useHistory()
  useEffect(() => {
    // console.log(getToken({ name: 'token' }))
    if (!getToken({ name: 'token' })) {
      history.push('/login')
    }
  }, [])

  // 每次刷新 跳转至首页
  useEffect(() => {
    if (tagArray.length === 1 && tagArray[0]?.title === '首页') {
      history.push('/')
    }
  }, [tagArray])

  const toggleCollapsed = (bool: boolean) => {
    setCollapsed(bool)
  }

  const topGoTo = (path: string) => {
    console.log(path)
    if (path === '/login') {
      setVisible(true)
    } else {
      history.push(path)
    }
  }

  const handleOk = useCallback((bool: boolean) => {
    // console.log(bool)
    setVisible(bool)
    removeToken({ name: 'token' })
    history.push('/login')
  }, [])
  const handleCancel = useCallback((bool: boolean) => {
    setVisible(bool)
  }, [])

  const tagFunc = (tabName: ITagProps) => {
    console.log('tagArray', tagArray)
    const isExist = tagArray.findIndex(({ title }) => title === tabName.title)
    if (isExist !== -1) return
    const targetArr = [...tagArray, tabName]
    setTagArray(targetArr)
  }

  // 删除tag
  const deleteTag = (id: number) => {
    let resultArr = tagArray.filter((item, index) => id !== index)
    setTagArray([...resultArr])
    console.log(id, tagArray.length)
    if (id === tagArray.length - 1) {
      console.log('resultArr.length')
      history.push(resultArr[resultArr.length - 1].selectKeys[0])
    } else {
      console.log(id,resultArr[id])
      history.push(resultArr[id].selectKeys[0])
    }
  }
  return (
    <div className='layout'>
      <Layout>
        <Aside collapsed={collapsed} tagFunc={tagFunc} tagArray={tagArray} />
        <Layout>
          <TopHeader collapsed={collapsed} toggleCollapsed={(bool: any) => toggleCollapsed(bool)} topGoTo={(path: string) => topGoTo(path)} />
          <TabComtent collapsed={collapsed} tagArray={tagArray} deleteTag={deleteTag} />
          <Footer>React - admin</Footer>
        </Layout>
      </Layout>
      <Dialog visible={visible} onOk={handleOk} onCancel={handleCancel} >
        <p>确定退出登录？</p>
      </Dialog>
    </div>
  )
}

export default Admin