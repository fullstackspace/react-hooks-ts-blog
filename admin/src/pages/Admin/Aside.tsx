import React from 'react';
import { Layout, Menu } from 'antd';
import {
  AntDesignOutlined
} from '@ant-design/icons';
import router, { IRouter } from '@/router';
import createIcon from '../../components/createIcon';
import { Link } from 'react-router-dom';
const { Sider } = Layout
const { SubMenu } = Menu
console.log(router)


// 无子菜单
const parentMenu = (menu: IRouter) => {
  return (
    <Menu.Item key={menu.path} icon={createIcon((menu.icon ? menu.icon : '') as any)}>
      {console.log(menu.key, menu.path)}
      <Link to={menu.key}>{menu.title}</Link>
    </Menu.Item>
  )
}
// 有子菜单
const sonMemu = (menu: IRouter) => {
  return (
    <SubMenu key={menu.key} title={menu.title} icon={createIcon((menu.icon ? menu.icon : '') as any)}>
      {
        menu.child?.map((childMenu: IRouter) => {
          return childMenu.child ? sonMemu(childMenu) : parentMenu(childMenu)
        })
      }
    </SubMenu>
  )
}

interface IProps {
  collapsed: boolean,
  [propName: string]: any
}
const Aside = (props: IProps) => {
  const { collapsed } = props
  return (
    <Sider collapsed={collapsed} style={{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
      zIndex: 99
    }}>
      <div className="logo">
        <AntDesignOutlined />
        {!collapsed && <span className='title'>Antd Design Pro</span>}
      </div>
      <div className="aside-menu">
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {
            router.map((menu: IRouter) => {
              return menu.child ? sonMemu(menu) : parentMenu(menu)
            })
          }
        </Menu>
      </div>
    </Sider>
  )
}

export default Aside