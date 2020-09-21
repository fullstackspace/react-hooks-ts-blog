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
  toggleCollapsed: any
}

const userInfo = [
  {
    key: '/Personal',
    icon: 'UserOutlined',
    title: '个人中心'
  },
  {
    key: '/System',
    icon: 'ToolOutlined',
    title: '系统设置'
  },
  {
    key: '/login',
    icon: 'AimOutlined',
    title: '登出'
  },
]

const TopHeader: FC<IProps> = (props) => {
  const { collapsed, toggleCollapsed } = props
  const handleMenuClick = (e: any) => {
    console.log(e)
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      {
        userInfo.map(item => {
          // <Menu.Item key={item.key} icon={createIcon((item.icon ? item.icon : '') as any)}>
          //   {item.title}
          // </Menu.Item>
        })
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