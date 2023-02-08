import React from 'react';
import { motion } from "framer-motion"
import style from './style.module.scss';

const Bubbles: React.FC<{children: any}> = ({children}) => {

  return (
    <div className='container-fluid overflow_hidden px-0 position-relative' style={{zIndex: 2}}>
      <div className={`${style.bubbles} px-lg-5 pt-4`}>
        <span style={{ '--i': 11 } as React.CSSProperties}></span>
        <span style={{ '--i': 12 } as React.CSSProperties}></span>
        <span style={{ '--i': 24 } as React.CSSProperties}></span>
        <span style={{ '--i': 10 } as React.CSSProperties}></span>
        <span style={{ '--i': 14 } as React.CSSProperties}></span>
        <span style={{ '--i': 23 } as React.CSSProperties}></span>
        <span style={{ '--i': 18 } as React.CSSProperties}></span>
        <span style={{ '--i': 16 } as React.CSSProperties}></span>
        <span style={{ '--i': 19 } as React.CSSProperties}></span>
        <span style={{ '--i': 20 } as React.CSSProperties}></span>
        <span style={{ '--i': 22 } as React.CSSProperties}></span>
        <span style={{ '--i': 25 } as React.CSSProperties}></span>
        <span style={{ '--i': 18 } as React.CSSProperties}></span>
        <span style={{ '--i': 21 } as React.CSSProperties}></span>
        <span style={{ '--i': 15 } as React.CSSProperties}></span>
        <span style={{ '--i': 13 } as React.CSSProperties}></span>
        <span style={{ '--i': 26 } as React.CSSProperties}></span>
        <span style={{ '--i': 17 } as React.CSSProperties}></span>
        <span style={{ '--i': 13 } as React.CSSProperties}></span>
        <span style={{ '--i': 28 } as React.CSSProperties}></span>
        <span style={{ '--i': 11 } as React.CSSProperties}></span>
        <span style={{ '--i': 12 } as React.CSSProperties}></span>
        <span style={{ '--i': 24 } as React.CSSProperties}></span>
        <span style={{ '--i': 10 } as React.CSSProperties}></span>
        <span style={{ '--i': 14 } as React.CSSProperties}></span>
        <span style={{ '--i': 23 } as React.CSSProperties}></span>
        <span style={{ '--i': 18 } as React.CSSProperties}></span>
        <span style={{ '--i': 16 } as React.CSSProperties}></span>
        <span style={{ '--i': 19 } as React.CSSProperties}></span>
        <span style={{ '--i': 20 } as React.CSSProperties}></span>
        <span style={{ '--i': 22 } as React.CSSProperties}></span>
        <span style={{ '--i': 25 } as React.CSSProperties}></span>
        <span style={{ '--i': 18 } as React.CSSProperties}></span>
        <span style={{ '--i': 21 } as React.CSSProperties}></span>
        <span style={{ '--i': 15 } as React.CSSProperties}></span>
        <span style={{ '--i': 13 } as React.CSSProperties}></span>
        <span style={{ '--i': 26 } as React.CSSProperties}></span>
        <span style={{ '--i': 17 } as React.CSSProperties}></span>
        <span style={{ '--i': 13 } as React.CSSProperties}></span>
        <span style={{ '--i': 28 } as React.CSSProperties}></span>
        <span style={{ '--i': 18 } as React.CSSProperties}></span>
        <span style={{ '--i': 16 } as React.CSSProperties}></span>
        <span style={{ '--i': 19 } as React.CSSProperties}></span>
        <span style={{ '--i': 20 } as React.CSSProperties}></span>
        <span style={{ '--i': 22 } as React.CSSProperties}></span>
        <span style={{ '--i': 25 } as React.CSSProperties}></span>
        <span style={{ '--i': 18 } as React.CSSProperties}></span>
      </div>
      {children}
    </div>
  )
}

export default Bubbles;