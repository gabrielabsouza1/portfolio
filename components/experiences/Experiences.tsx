import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import { useInView } from 'react-intersection-observer';
import { useAnimationContext } from '../../context/useAnimationContext'
import { motion, useAnimation } from "framer-motion";

const Experiences: React.FC<{}> = () => {
  type navExperiences = {
    showLeadster: boolean;
    showCNB: boolean;
    showSanti: boolean;
  };
  const navExperiences = {
    showLeadster: true,
    showCNB: false,
    showSanti: false
  }
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const { variants, fadeUp, fadeRight } = useAnimationContext();
  const [activeNavItem, setActiveNavItem] = useState(navExperiences);

  useEffect(() => {
    if (inView) {
      animation.start("show")
    } else {
      animation.start("hidden")
    }
  }, [inView])

  return (
    <div className="row mt-5">
      <motion.div
        ref={ref}
        variants={variants}
        animate={animation}
        className="col-lg-4 mb-5 pe-lg-5" >
        <div className="p-lg-5 p-3 background_dark" style={{ borderRadius: 7 + 'px' }}>
          <motion.div variants={fadeUp} className={activeNavItem.showLeadster ? `${style.animation} d-flex justify-content-between align-items-center cursor_pointer mb-5 mt-lg-3` : `${style.animation} cursor_pointer mb-5 mt-lg-3`} onClick={() => setActiveNavItem(activeNavItem => ({ ...navExperiences, showLeadster: true }))}>
            <h3 className={activeNavItem.showLeadster ? 'f_size_20 f_700 mb-0 text_pink' : 'text_white f_size_20 mb-0'}>Leadster</h3>
            {activeNavItem.showLeadster && <img src="/img/right-arrow2.png" className='img-fluid' alt="" />}
          </motion.div>
          <motion.div variants={fadeUp} className={activeNavItem.showCNB ? `${style.animation} d-flex justify-content-between align-items-center cursor_pointer mb-5` : `${style.animation} cursor_pointer mb-5`} onClick={() => setActiveNavItem(activeNavItem => ({ ...navExperiences, showCNB: true, showLeadster: false }))}>
            <h3 className={activeNavItem.showCNB ? 'f_size_20 f_700 mb-0 text_pink' : 'text_white f_size_20 mb-0'}>Casa do Nobreak</h3>
            {activeNavItem.showCNB && <img src="/img/right-arrow2.png" className='img-fluid' alt="" />}
          </motion.div>
          <motion.div variants={fadeUp} className={activeNavItem.showSanti ? `${style.animation} d-flex justify-content-between align-items-center cursor_pointer mb-4` : `${style.animation} cursor_pointer mb-4`} onClick={() => setActiveNavItem(activeNavItem => ({ ...navExperiences, showSanti: true, showLeadster: false }))}>
            <h3 className={activeNavItem.showSanti ? 'f_size_20 f_700 mb-0 text_pink' : 'text_white f_size_20 mb-0'}>Santi Pizzeria</h3>
            {activeNavItem.showSanti && <img src="/img/right-arrow2.png" className='img-fluid' alt="" />}
          </motion.div>
        </div>
      </motion.div>
      <div
        className="col-lg-7 ps-lg-3">
        {activeNavItem.showLeadster &&
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show">
            <motion.div variants={fadeRight} className='d-flex justify-content-between align-items-baseline'>
              <h3 className='f_size_24em text_white mb-2'>Front End Developer</h3>
              <p className='text_white f_size_18'>Jan 2022 - currently</p>
            </motion.div>
            <motion.p variants={fadeRight} className='text_pink f_size_16em f_600 mb-4'>Leadster</motion.p>
            <motion.p variants={fadeRight} className='text_white f_size_18 f_600'>Brazil</motion.p>
            <motion.p variants={fadeRight} className='text_white f_size_18 l_height_45'>
              ● Adding and maintaining website pages
              <br />
              ● Website maintenance with HTML, CSS, Javascript
              <br />
              ● Data transition from HTML/CSS to ReactJs and NextJs
              <br />
              ● Improving Core Web Vitals Score
            </motion.p>
          </motion.div>
        }
        {activeNavItem.showCNB &&
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show">
            <motion.div variants={fadeRight} className='d-flex justify-content-between align-items-baseline'>
              <h3 className='f_size_24em text_white mb-2'>Costumer Service / Sales</h3>
              <p className='text_white f_size_18'>Dec 2020 - Jan 2022</p>
            </motion.div>
            <motion.p variants={fadeRight} className='text_pink f_size_16em f_600 mb-4'>Casa do Nobreak</motion.p>
            <motion.p variants={fadeRight} className='text_white f_size_18 f_600'>Brazil</motion.p>
            <motion.p variants={fadeRight} className='text_white f_size_18 l_height_45'>
              ● Sales techniques
              <br />
              ● Customer Service
              <br />
              ● Website maintenance with HTML e CSS
            </motion.p>
          </motion.div>
        }
        {activeNavItem.showSanti &&
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show">
            <motion.div variants={fadeRight} className='d-flex justify-content-between align-items-baseline'>
              <h3 className='f_size_24em text_white mb-2'>Kitchen Staff</h3>
              <p className='text_white f_size_18'>May 2019 - Dec 2020</p>
            </motion.div>
            <motion.p variants={fadeRight} className='text_pink f_size_16em f_600 mb-4'>Santi Pizzeria</motion.p>
            <motion.p variants={fadeRight} className='text_white f_size_18 f_600'>Brazil</motion.p>
            <motion.p variants={fadeRight} className='text_white f_size_18 l_height_45'>
              ● Customer Service focused on providing an excellent experience for the client
              <br />
              ● Good team work skills
            </motion.p>
          </motion.div>
        }
      </div>
    </div >
  )
}

export default Experiences;