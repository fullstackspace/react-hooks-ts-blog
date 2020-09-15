import React from 'react'
import * as Icon from '@ant-design/icons'

// Icon 可能存在的图标类型 route中配置的图标需要在iconType中添加
type iconType = 'UserOutlined'
/**
 * 动态创建Icon
 * @param props icon可能存在的类型
 */
export default function createIcon(props: iconType) {
  return props ? React.createElement(Icon[props]) : ''
}
