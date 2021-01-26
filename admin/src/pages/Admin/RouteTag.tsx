import { Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { ITagProps } from './index';
interface IProps {
  tagArray: Array<ITagProps>,
  [propsName: string]: any
}
const RouteTag = (prop: IProps) => {
  const { tagArray, deleteTag } = prop
  const history = useHistory()
  const local = useLocation()
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const close = (e: Event, index: number) => {
    console.log(e)
    e.preventDefault()
    deleteTag(index)
    console.log(index)
  }

  // 根据路由地址,激活对应的tag标签
  useEffect(() => {
    const { pathname } = local
    const index = tagArray.findIndex((item) => item.selectKeys[0] === pathname)
    setActiveIndex(index)
  }, [local])

  const handleClick = (index: number) => {
    setActiveIndex(index)
    console.log(tagArray, index)
    history.push(tagArray[index].selectKeys[0])
  }
  return (
    <div className="tag-container">
      {
        tagArray.map(({ title }, index) =>
          <Tag
            className={
              index === activeIndex ? "active" : "normal"}
            key={title}
            closable={index === 0 ? false : true}
            onClick={() => handleClick(index)}
            onClose={(e: Event) => close(e, index)}  >
            {title}
          </Tag>
        )
      }

    </div>
  )
}

export default RouteTag