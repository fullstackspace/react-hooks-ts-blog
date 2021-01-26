import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import PrivateRouter from '@/components/privateRouter';
// 工程化
import { routeComponent } from '@/utils/commom';
import RouteTag from './RouteTag';
import { ITagProps } from './index';

const { Content } = Layout
interface IProps {
  collapsed: boolean,
  tagArray: Array<ITagProps>,
  [propsName: string]: any
}
// console.log(routeComponent())
const TabComtent = (props: IProps) => {
  const [components, setComponents] = useState([])
  const { collapsed, tagArray, deleteTag } = props
  useEffect(() => {
    setComponents(routeComponent() as [])
  }, [])
  return (
    <Content className={collapsed ? 'close' : 'open'}>
      <RouteTag tagArray={tagArray} deleteTag={deleteTag} />
      <div className="content-card">
        {
          components.map(({ path, component }) => (
            <PrivateRouter key={path} component={component} path={path}></PrivateRouter>
          ))
        }
      </div>
    </Content>
  )
}

export default TabComtent

