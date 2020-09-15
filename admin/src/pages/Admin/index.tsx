import React, { useState } from 'react';
import { Layout, Badge, Avatar } from 'antd';
// 侧边栏
import Aside from './Aside';
// 内容区域
import TabComtent from './TabComtent';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SoundOutlined,
} from '@ant-design/icons';

import './index.scss';

const { Header, Footer } = Layout;
interface IProps {
  [propName: string]: any
}


const Admin: React.FC = (props: IProps) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className='layout'>
      <Layout>
        <Aside collapsed={collapsed} />
        <Layout>
          <Header className={collapsed ? 'close' : 'open'}>
            {collapsed ? <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} /> : <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />}
            <div className='right clearBoth'>
              <Badge offset={[10, 0]} overflowCount={5} size='small' count={10} >
                <SoundOutlined />
              </Badge>
              <Avatar size={40}> User </Avatar>
            </div>
          </Header>
          <TabComtent collapsed={collapsed} />
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default Admin