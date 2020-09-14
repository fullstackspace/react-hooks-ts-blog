import React, { FC } from 'react';
import { Layout } from 'antd';
const { Content } = Layout
interface IProps {
  [propsName: string]: any
}
const TabComtent: FC = (props: IProps) => {
  return (
    <Content>
      <h1>1111</h1>
    </Content>
  )
}

export default TabComtent

