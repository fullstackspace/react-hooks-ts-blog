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
import Dialog from '@/components/dialog';


const { Footer } = Layout;
interface IProps {
  [propName: string]: any
}


const Admin: React.FC = (props: IProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const [visible, setVisible] = useState(false)
  const history = useHistory()
  useEffect(() => {
    console.log(getToken({ name: 'token' }))
    if (!getToken({ name: 'token' })) {
      history.push('/login')
    }
  }, [])
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
  return (
    <div className='layout'>
      <Layout>
        <Aside collapsed={collapsed} />
        <Layout>
          <TopHeader collapsed={collapsed} toggleCollapsed={(bool: any) => toggleCollapsed(bool)} topGoTo={(path: string) => topGoTo(path)} />
          <TabComtent collapsed={collapsed} />
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