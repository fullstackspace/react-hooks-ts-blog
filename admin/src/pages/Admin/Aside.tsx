import React, { useState, useEffect, useRef } from 'react';
import { Layout, Menu } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import router, { IRouter } from '@/router';
import createIcon from '../../components/createIcon';
import { Link, useLocation } from 'react-router-dom';
import { routeComponent } from '@/utils/commom';
const { Sider } = Layout
const { SubMenu } = Menu
console.log(router)

// 无子菜单
const parentMenu = (menu: IRouter) => {
  return (
    <Menu.Item key={menu.path} icon={createIcon((menu.icon ? menu.icon : '') as any)}>
      {/* {console.log(menu.key, menu.path)} */}
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
  const [selectKeys, setSelectKesy] = useState('/firstPages')
  const [menuOpen, setMenuOpen] = useState(['dashboard', 'work', 'analysis1'])
  const { collapsed } = props
  const local = useLocation()
  const route = routeComponent()
  useEffect(() => {
    const { pathname } = local
    setSelectKesy(pathname)
  }, [])
  /**选中菜单 */
  const selectMenu = (item: any) => {
    setSelectKesy(item.key)
  }
  const openMenu = (item: any) => {
    console.log(item)
  }
  useEffect(() => {
    const { pathname } = local
    console.log(pathname)
    const res = route.findIndex(({ path }) => pathname.includes(path))
    console.log(res)
  }, [local])
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
        <Menu
          theme="dark"
          mode="inline"
          onSelect={selectMenu}
          selectedKeys={[selectKeys]}
          openKeys={menuOpen}
        // onOpenChange={openMenu}
        >
          {/* openKeys={['dashboard1']}> */}
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