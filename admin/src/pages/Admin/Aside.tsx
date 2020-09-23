import React, { useState, useEffect, FC } from 'react';
import { Layout, Menu } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import router, { IRouter } from '@/router';
import createIcon from '../../components/createIcon';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { routeComponent } from '@/utils/commom';
const { Sider } = Layout
const { SubMenu } = Menu

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
const sonMemu = (menu: IRouter, selectSubMenu: any) => {
  return (
    <SubMenu onTitleClick={({ key }) => selectSubMenu(key)} key={menu.key} title={menu.title} icon={createIcon((menu.icon ? menu.icon : '') as any)}>
      {
        menu.child?.map((childMenu: IRouter) => {
          return childMenu.child ? sonMemu(childMenu, selectSubMenu) : parentMenu(childMenu)
        })
      }
    </SubMenu>
  )
}

interface IProps {
  collapsed: boolean,
  [propName: string]: any
}

interface IMenu {
  selectKeys: string[],
  menuOpen: string[],
}
const Aside: FC<IProps> = (props) => {
  const [menuKey, setMenuKey] = useState<IMenu>({ selectKeys: [''], menuOpen: [''] })
  const history = useHistory()
  // const [menuKey, setMenuKey] = useState<IMenu>({ selectKeys: ['/workLog'], menuOpen: ['/dashboard','/work'] })
  // const [menuKey, setMenuKey] = useState<IMenu>({ selectKeys: ['/generalTable'], menuOpen: ['/tablelist'] })
  const { collapsed } = props
  const local = useLocation()
  const route = routeComponent()
  /**路由切换时,控制左侧菜单高亮或多级菜单展开收起 */
  useEffect(() => {
    // 解决侧边栏收起时,多级菜单一直显示问题
    if (collapsed) {
      setMenuKey({ ...menuKey, menuOpen: [''] })
      return
    }
    let { pathname } = local
    const pathIndex = route.findIndex(({ path }) => pathname.toLowerCase() === path)
    // let parentPath = menuKey.menuOpen
    let parentPath = ['']
    console.log(pathIndex)
    if (pathIndex > -1) {
      console.log(route[pathIndex])
      parentPath = [...route[pathIndex].parentPath]
    }
    // 初始化时直接跳转到首页
    if (pathname === '/') {
      history.push('/firstPages')
    }
    setMenuKey({ selectKeys: [pathname], menuOpen: parentPath })
  }, [local, collapsed, history])

  /**选中菜单 */
  const selectMenu = (item: any) => {
    console.log(item)
    setMenuKey({ ...menuKey, selectKeys: [item.key] })
  }

  /**点击一级以上菜单标题 */
  const selectSubMenu = (key: string) => {
    const { menuOpen } = menuKey
    // 菜单已打开,再次点击菜单 -> 当前菜单点击一次及以上
    if (menuOpen.includes(key)) {
      const index = menuOpen.findIndex(item => item.includes(key))
      menuOpen.splice(index - menuOpen.length)
      setMenuKey({ ...menuKey, menuOpen })
      // return
    } else {
      // 菜单为打开 当前菜单点击零次
      const pathIndex = route.findIndex(({ parentPath }) => {
        return parentPath.includes(key)
      })
      const { parentPath } = route[pathIndex]
      setMenuKey(() => ({ ...menuKey, menuOpen: parentPath }))
      console.log(menuKey)
    }
  }

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
          selectedKeys={menuKey.selectKeys}
          openKeys={menuKey.menuOpen}
        >
          {
            router.map((menu: IRouter) => {
              return menu.child ? sonMemu(menu, selectSubMenu) : parentMenu(menu)
            })
          }
        </Menu>
      </div>
    </Sider>
  )
}

export default Aside