import React, { FC } from 'react';
import { Layout, Badge, Avatar, Dropdown, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SoundOutlined,
  UserOutlined
} from '@ant-design/icons';
import createIcon from '@/components/createIcon';

const { Header } = Layout;
interface IProps {
  collapsed: boolean,
  toggleCollapsed: any,
  topGoTo: any
}

const userInfo = [
  {
    path: '/personal',
    icon: 'UserOutlined',
    title: '个人中心'
  },
  {
    path: '/system',
    icon: 'ToolOutlined',
    title: '系统设置'
  },
  {
    path: '/login',
    icon: 'AimOutlined',
    title: '登出'
  },
]

const TopHeader: FC<IProps> = (props) => {
  const { collapsed, toggleCollapsed, topGoTo } = props
  const handleMenuClick = (e: any) => {
    console.log(e)
    topGoTo(e.key)
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      {
        userInfo.map(menu => (
          <Menu.Item key={menu.path} icon={createIcon((menu.icon ? menu.icon : '') as any)}>
            {menu.title}
          </Menu.Item>
        ))
      }
    </Menu>
  );

  return (
    <Header className={collapsed ? 'close' : 'open'}>
      {collapsed ? <MenuUnfoldOutlined onClick={() => toggleCollapsed(!collapsed)} /> : <MenuFoldOutlined onClick={() => toggleCollapsed(!collapsed)} />}
      <div className='right clearBoth'>
        <Badge offset={[10, 0]} overflowCount={5} size='small' count={10} >
          <SoundOutlined />
        </Badge>
        <Dropdown overlay={menu} placement='bottomCenter' >
          <Avatar size={40}> User </Avatar>
        </Dropdown>
      </div>
    </Header>
  )
}

export default TopHeader