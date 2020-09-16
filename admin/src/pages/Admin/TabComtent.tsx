import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, useLocation, Redirect } from 'react-router-dom';
import Analysis from '../Analysis';
import FirstPages from '@/pages/FirstPages';
import PrivateRouter from '@/components/privateRouter';
// 工程化
import { routeComponent } from '@/utils/commom';

const { Content } = Layout
interface IProps {
  collapsed: boolean,
  [propsName: string]: any
}
console.log(routeComponent())
const TabComtent = (props: IProps) => {
  const [components, setComponents] = useState([])
  const { collapsed } = props
  const local = useLocation()
  useEffect(() => {
    console.log(1)
    setComponents(routeComponent() as [])
  }, [])
  // console.log(components)
  return (
    <Content className={collapsed ? 'close' : 'open'}>
      {/* {console.log(local.pathname)} */}
      {
        components.map(({ path, component }) => (
          <PrivateRouter key={path} component={component} path={path}></PrivateRouter>
        ))
      }
    </Content>
  )
}

export default TabComtent

