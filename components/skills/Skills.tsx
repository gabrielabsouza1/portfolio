import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import CircularProgress from '@mui/material/CircularProgress';
import { useInView } from "react-intersection-observer";

const Skills: React.FC<{}> = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [progress4, setProgress4] = useState(0);
  const [progress5, setProgress5] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  })

  function progressAnimation() {
    if (progress1 < 100) {
      setInterval(() => {
        setProgress1((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 1));
      }, 30);
    }
    if (progress2 < 95) {
      setInterval(() => {
        setProgress2((prevProgress) => (prevProgress >= 95 ? 95 : prevProgress + 1));
      }, 30);
    }
    if (progress3 < 85) {
      setInterval(() => {
        setProgress3((prevProgress) => (prevProgress >= 85 ? 85 : prevProgress + 1));
      }, 30);
    }
    if (progress4 < 90) {
      setInterval(() => {
        setProgress4((prevProgress) => (prevProgress >= 90 ? 90 : prevProgress + 1));
      }, 30);
    }
    if (progress5 < 75) {
      setInterval(() => {
        setProgress5((prevProgress) => (prevProgress >= 75 ? 75 : prevProgress + 1));
      }, 30);
    }
  }
  useEffect(() => {
    inView && progressAnimation()

  }, [inView]);
  return (
    <div id='skills' className='anchor container-fluid pb-lg-4 ps-lg-5 pe-lg-0 bg_palette1'>
      <div className='grid_layout mb-5'>
        <h2 className="text_white hello_text pt-5 pb-lg-5 pb-3">Skills</h2>
        <div ref={ref} className='d-flex align-items-center justify-content-center flex-wrap'>
          <div className='position-relative my-4 me-lg-5'>
            <div className={`${style.glow} ${style.color1}`}>
              <div className={style.glow_inner}></div>
              <div className={style.text_inner}>
                <h2 className='text_white f_700 f_size_24em'>100%</h2>
                <p className='text_white text-center' style={{ fontSize: 14 + 'px' }}>HTML / CSS</p>
              </div>
            </div>
            <CircularProgress size={190} className='text_pink' variant='determinate' value={progress1} />
          </div>
          <div className='position-relative my-4 mx-md-5'>
            <div className={`${style.glow} ${style.color5}`}>
              <div className={style.glow_inner}></div>
              <div className={style.text_inner}>
                <h2 className='text_white f_700 f_size_24em'>95%</h2>
                <p className='text_white text-center' style={{ fontSize: 14 + 'px' }}>JAVASCRIPT</p>
              </div>
            </div>
            <CircularProgress size={190} style={{color: '#ff4b66'}} variant='determinate' value={progress2} />
          </div>
          <div className='position-relative my-4 mx-md-5'>
            <div className={`${style.glow} ${style.color2}`}>
              <div className={style.glow_inner}></div>
              <div className={style.text_inner}>
                <h2 className='text_white f_700 f_size_24em'>85%</h2>
                <p className='text_white text-center' style={{ fontSize: 14 + 'px' }}>REACT JS</p>
              </div>
            </div>
            <CircularProgress size={190} style={{color: '#7226d1'}} variant='determinate' value={progress3} />
          </div>
          <div className='position-relative my-4 mx-md-5'>
            <div className={`${style.glow} ${style.color3}`}>
              <div className={style.glow_inner}></div>
              <div className={style.text_inner}>
                <h2 className='text_white f_700 f_size_24em'>90%</h2>
                <p className='text_white text-center' style={{ fontSize: 14 + 'px' }}>NEXT JS</p>
              </div>
            </div>
            <CircularProgress size={190} style={{color: '#31ffe2'}} variant='determinate' value={progress4} />
          </div>
          <div className='position-relative my-4 ms-md-5'>
            <div className={`${style.glow} ${style.color4}`}>
              <div className={style.glow_inner}></div>
              <div className={style.text_inner}>
                <h2 className='text_white f_700 f_size_24em'>75%</h2>
                <p className='text_white text-center' style={{ fontSize: 14 + 'px' }}>SEO</p>
              </div>
            </div>
            <CircularProgress size={190} style={{color: '#2ee072'}} variant='determinate' value={progress5} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills;