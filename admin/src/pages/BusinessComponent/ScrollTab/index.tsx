import React, { useEffect, useRef, useState } from 'react';
import Scroll from './Scroll';
import ScrollContent from './ScrollContent';

import './index.scss'

export interface tabTreeObj {
  titleName: string
}

const ScrollTab = (prop: any) => {
  const [tabTree] = useState([
    {
      titleName: 'TabOne'
    },
    {
      titleName: 'TabTwo'
    },
    {
      titleName: 'TabThree'
    }
  ])
  const contentRef = useRef(null)
  useEffect(() => {
    // console.log(scrollContent.current)
    console.log(contentRef.current)
  }, [])
  return (
    <div className="scrolltab-container">
      <Scroll tabTree={tabTree} />
      <ScrollContent tabTree={tabTree} />
    </div>
  )
}


export default ScrollTab