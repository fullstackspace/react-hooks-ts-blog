import React, { Component } from 'react';
import { tabTreeObj } from './index';
interface IProp {
  tabTree: Array<tabTreeObj>
}
const ScrollLeft = (prop: IProp) => {
  const { tabTree } = prop
  return (
    <div className="scroll-content">
      <div className="tab-scroll">
        <ul id="tab_scroll">
          {
            tabTree.map((item) =>
              <li className="tab-list" key={item.titleName}>
                <a>{item.titleName}</a>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}
export default ScrollLeft