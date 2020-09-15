import React, { FC } from 'react';
import { Layout } from 'antd';
const { Content } = Layout
interface IProps {
  collapsed: boolean,
  [propsName: string]: any
}
const TabComtent = (props: IProps) => {
  const { collapsed } = props
  return (
    <Content className={collapsed ? 'close' : 'open'}>
      <h1>1111</h1>
    </Content>
  )
}

export default TabComtent

