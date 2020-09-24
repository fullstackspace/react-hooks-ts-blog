import React, { FC } from 'react';
import { Modal } from 'antd';
import './index.scss'

interface Iprops {
  title?: string,
  visible: boolean,
  onOk: Function,
  onCancel: Function,
  children?: React.ReactNode
}


const Dialog: FC<Iprops> = (props) => {
  const { title, onOk, onCancel, visible, children } = props
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={() => onOk(false)}
      onCancel={() => onCancel(false)}
    >
      {children}
    </Modal>
  )
}

// 默认值设置
Dialog.defaultProps = {
  title: '',
}

export default Dialog