import React from 'react'
import * as Icon from '@ant-design/icons'

// Icon 可能存在的图标类型 route中配置的图标需要在iconType中添加
type iconType = ''
/**
 * 动态创建Icon
 * @param props icon可能存在的类型
 */
const createIcon = (props: iconType) => {
  return props ? React.createElement(Icon[props]) : null
}
export default createIcon
