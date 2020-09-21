import React, { useEffect, useState } from 'react';
import { Layout, Badge, Avatar } from 'antd';
// 侧边栏
import Aside from './Aside';
// 头部
import TopHeader from './TopHeader';
// 内容区域
import TabComtent from './TabComtent';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SoundOutlined,
} from '@ant-design/icons';

import './index.scss';
import { getToken } from '@/utils/stroages';
import { useHistory } from 'react-router';


const { Header, Footer } = Layout;
interface IProps {
  [propName: string]: any
}


const Admin: React.FC = (props: IProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const history = useHistory()
  useEffect(() => {
    if (!getToken({ name: 'token' })) {
      history.push('/login')
    }
  }, [])
  const toggleCollapsed = (bool: boolean) => {
    setCollapsed(bool)
  }
  return (
    <div className='layout'>
      <Layout>
        <Aside collapsed={collapsed} />
        <Layout>
          <TopHeader collapsed={collapsed} toggleCollapsed={(bool: any) => toggleCollapsed(bool)} />
          <TabComtent collapsed={collapsed} />
          <Footer>React - admin</Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default Admin