import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { FiExternalLink } from "@react-icons/all-files/fi/FiExternalLink";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";
import { useAnimationContext } from '../../context/useAnimationContext'

const Projects: React.FC<{}> = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  })
  const animation = useAnimation();
  const { variants, fadeLeft, fadeRight } = useAnimationContext();

  useEffect(() => {
    if (inView ) {
      animation.start("show")
    } else {
      animation.start("hidden")
    }

  }, [inView]);
  return (
    <div>
      <h2 className="text_white hello_text pt-5 pb-5">Projects</h2>
      <motion.div
        ref={ref}
        variants={variants}
        animate={animation}
        className='row align-items-center pb-5'>
        <motion.div variants={fadeLeft} className="col-lg-6 px-3 mb-4 mb-md-0">
          <a href="https://leadster.com.br/" rel='noreferrer' target={'_blank'}>
            <Image width={688} height={480} src="/img/leadster.png" className='img-fluid project_img' alt="" />
          </a>
        </motion.div>
        <motion.div variants={fadeRight} className="col-lg-5 px-3 px-md-5 pe-lg-4 position-relative" style={{ zIndex: 2 }}>
          <div className='text-lg-end mb-4 mb-md-5 ms-2 ms-lg-0 me-lg-2'>
            <p className='text_pink f_600 f_size_18'>Featured Project</p>
            <h2 className='text_white f_600'>Leadster Website</h2>
          </div>
          <div className='box_project_description text-lg-end'>
            <p className='text_white f_size_18 l_height_30'>Project created using ReactJS, NextsJS, CSS Module, SASS, MaterialUI and Bootstrap.</p>
          </div>
          <div className="mt-4 d-flex justify-content-start justify-content-lg-end flex-wrap">
            <p className='text_pink f_600 f_size_16 mx-2'>NextJS</p>
            <p className='text_pink f_600 f_size_16 mx-2'>CSS Modules</p>
            <p className='text_pink f_600 f_size_16 mx-2'>Material UI</p>
            <p className='text_pink f_600 f_size_16 mx-2'>Bootstrap</p>
          </div>
          <div className="text-lg-end ms-2 ms-lg-0">
            <a href="https://leadster.com.br/" rel='noreferrer' target={'_blank'}>
              <FiExternalLink size={'25px'} className='me-lg-2 link_project' />
            </a>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={ref}
        variants={variants}
        animate={animation}
        className='row align-items-center justify-content-end flex-row-reverse pt-5 mt-lg-5'>
        <motion.div variants={fadeLeft} className="col-lg-6 px-3 mb-4 mb-md-0">
          <a href="https://gallery-blue.vercel.app/" rel='noreferrer' target={'_blank'}>
            <Image width={688} height={480} src="/img/gallery.png" className='img-fluid project_img' alt="" />
          </a>
        </motion.div>
        <motion.div variants={fadeRight} className="col-lg-5 px-3 px-md-5 pe-lg-4 position-relative" style={{ zIndex: 2 }}>
          <div className='text-start mb-4 mb-md-5 ms-lg-2 pt-4 pt-sm-5 ms-2'>
            <p className='text_pink f_600 f_size_18'>Featured Project</p>
            <h2 className='text_white f_600'>Gallery</h2>
          </div>
          <div className='box_project_description2 text-start'>
            <p className='text_white f_size_18 l_height_30'>A photo gallery created as my first project using ReactJS, SASS, Pexels API and Axios</p>
          </div>
          <div className="mt-4 d-flex justify-content-start flex-wrap">
            <p className='text_pink f_600 f_size_16 mx-2'>ReactJS</p>
            <p className='text_pink f_600 f_size_16 mx-2'>SASS</p>
            <p className='text_pink f_600 f_size_16 mx-2'>Axios</p>
            <p className='text_pink f_600 f_size_16 mx-2'>React Context</p>
            <p className='text_pink f_600 f_size_16 mx-2'>React Hooks</p>
          </div>
          <div className="text-start d-flex">
            <a href="https://gallery-blue.vercel.app/" className='mx-2' rel='noreferrer' target={'_blank'}>
              <FiExternalLink size={'25px'} className='me-lg-2 link_project' />
            </a>
            <a href="https://github.com/gabrielabsouza1/gallery" className='mx-2' rel='noreferrer' target={'_blank'}>
              <FiGithub size={'25px'} className='me-lg-2 link_project' />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Projects;