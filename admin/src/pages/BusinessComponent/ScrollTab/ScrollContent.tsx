import React, { useEffect } from 'react';
import { tabTreeObj } from './index';
import { menuComponent } from '@/utils/commom';
interface IProp {
  tabTree: Array<tabTreeObj>
  [propName: string]: any
}
const ScrollContent = (prop: IProp) => {
  const { tabTree } = prop
  const components = menuComponent(tabTree)
  useEffect(() => {
    
  }, [])
  return (
    <ul className="content-scroll" id="content_scroll">
      {
        components.map((item) =>
          <li className="content-list" key={item.id}>
            <div className="scroll-inner">
              <div className="inner-content">
                {
                  React.createElement(item.component)
                }
              </div>
            </div>
          </li>
        )
      }
    </ul>
  )
}

export default ScrollContent