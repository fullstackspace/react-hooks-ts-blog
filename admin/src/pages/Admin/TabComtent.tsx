import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import PrivateRouter from '@/components/privateRouter';
// 工程化
import { routeComponent } from '@/utils/commom';

const { Content } = Layout
interface IProps {
  collapsed: boolean,
  [propsName: string]: any
}
// console.log(routeComponent())
const TabComtent = (props: IProps) => {
  const [components, setComponents] = useState([])
  const { collapsed } = props
  useEffect(() => {
    // console.log(1)
    setComponents(routeComponent() as [])
  }, [])
  return (
    <Content className={collapsed ? 'close' : 'open'}>
      {
        components.map(({ path, component }) => (
          <PrivateRouter key={path} component={component} path={path}></PrivateRouter>
        ))
      }
    </Content>
  )
}

export default TabComtent

