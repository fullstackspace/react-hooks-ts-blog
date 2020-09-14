import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  AppleOutlined
} from '@ant-design/icons';
import router from '@/router';
const { Sider } = Layout
const { SubMenu } = Menu
console.log(router)
interface IProps {
  collapsed: boolean,
  [propName: string]: any
}
const Aside = (props: IProps) => {
  const { collapsed } = props
  return (
    <Sider collapsed={collapsed} style={{ width: '300px' }} >
      <div className="logo">
        <AppleOutlined />
        {!collapsed && <span className='title'>Management</span>}
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <SubMenu key="sub12" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="13">option1</Menu.Item>
            <Menu.Item key="24">option2</Menu.Item>
            <Menu.Item key="35">option3</Menu.Item>
            <Menu.Item key="42">option4</Menu.Item>
          </SubMenu>
        </SubMenu>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Aside