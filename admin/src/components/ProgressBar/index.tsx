import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import './index.scss'

export interface IProgressProps {
  prefixCls?: string;
  step?: number;
  total?: number;
  showInfo?: boolean;
  color?: string;
}

/** 
 * 进度条边界
 * */
const validProgress = (progress: number | undefined) => {
  if (!progress || progress < 0) {
    return 0
  } else if (progress > 100) {
    return 100
  }
  return progress
}

/** 
 * 出去0 100后的整数处理 
 * */
const percentDeal = (step: number | undefined, total: number | undefined) => {
  if (!step || !total) {
    return 0
  }
  return (step / total) * 100
}

/** 
 * 百分比显示
 */

const parseIntPrecent = (text: number): string => `${Math.ceil(text)}%`

class ProgressBar extends Component<IProgressProps> {
  constructor(prop: any) {
    super(prop)
  }
  // 默认值设置
  static defaultProps = {
    prefixCls: 'tiger-progress',
    step: 2,
    total: 10,
    showInfo: false,
    color: 'red'
  }
  state = {}
  render() {
    const { prefixCls, step, total, showInfo, color, ...restProps } = this.props
    let progressInfo, // 提示模块
      progress // 主模块 
    // 百分比
    let percent = percentDeal(step, total)
    // 显示的文字
    let text = parseIntPrecent(validProgress(percent))

    if (showInfo) {
      progressInfo = (
        <div className={`${prefixCls}-show-info`}>
          <span className={`${prefixCls}-text`}>{text}</span>
        </div>
      )
    }
    const percentStyle = {
      // text 12%
      width: text,
      height: "12px",
      background: color,
      borderRadius: "100px"
    };
    const fixOuterStyle = {
      marginTop: "30px"
    };
    progress = (
      <div>
        <div className={`${prefixCls}-outer`} style={fixOuterStyle}>
          <div className={`${prefixCls}-inner`}>
            <div className={`${prefixCls}-bg`} style={percentStyle}>
              {progressInfo || null}
            </div>
          </div>
        </div>
      </div>
    )
    return (
      <div {...restProps} className={`${prefixCls}`}>
        {progress}
      </div>
    );
  }
}

export default ProgressBar