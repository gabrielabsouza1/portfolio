import Navbar from '../components/navbar/Navbar'
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FiExternalLink } from "@react-icons/all-files/fi/FiExternalLink";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import React, { useState, useEffect } from 'react'
import Experiences from 'components/experiences/Experiences';
import Skills from 'components/skills/Skills';
import Bubbles from 'components/bubbles/Bubbles';
import ExperiencesMobile from 'components/experiences/ExperiencesMobile';
import Image from 'next/image';

export default function Home() {
  const [isMobile, setisMobile] = useState(false)
  useEffect(() => {
    if (window.screen.width <= 991) {
      setisMobile(true)
    } else if (window.screen.width > 991) {
      setisMobile(false)
    }
  }, []);
  return (
    <>
      <Bubbles>
        <section className='bg_palette1'>
          <header>
            <Navbar />
          </header>
          <main>
            <div className='container-fluid ps-lg-5 pb-5 pe-lg-0 bg_palette1'>
              <div className="d-flex align-items-center justify-content-between height_header flex-wrap">
                <div className='col-xl-6 col-xxl-5 ps-2 ps-sm-5 box_name'>
                  <h1 className="text_white hello_text">Hello, i'm</h1>
                  <div className="animation">
                    <div className="first"><div>Gabriela Souza</div></div>
                    <div className="second"><div>Web Developer</div></div>
                  </div>
                </div>

                <div className='img_header_visibility col-sm-10 col-xl-6 col-xxl-7 px-0' >
                  <Image width={1082} height={1027} priority src="/img/header-teste2.png" className='img-fluid bouncing_img' alt="" />
                </div>
              </div>

              <div id='about' className='anchor px-lg-5 pb-5 pt-5'>
                <div className='grid_layout px-3'>
                  <h2 className="text_white hello_text pt-5 pb-lg-5 pb-3">About</h2>
                  <div className='row align-items-center box_about position-relative' style={{ zIndex: 5, background: 'transparent', backdropFilter: 'blur(20px)' }}>
                    <div className="col-lg-4 px-0 px-sm-5 px-lg-0">
                      <Image width={431} height={431} src="/img/me2.png" className='img-fluid' style={{ borderRadius: 5 + 'px' }} alt="" />
                    </div>
                    <div className="col-lg-6 ms-lg-5 pe-lg-5 mt-4 mt-lg-0">
                      <p className='text_pink f_size_16em f_600 mb-2'>About me</p>
                      <h3 className='f_size_24em text_white mb-4'>Gabriela Souza</h3>
                      <p className='text_white f_size_18 f_600'>Front End Developer</p>
                      <p className='text_white f_size_18 l_height_30'>Hello! My name is Gabriela and I'm a developer who made her career migration in 2021. After I graduated in Gastronomy (2021) I started
                        learning about IT and became passionate about technology.
                        <br />
                        I'm constantly studying new frameworks, improving my
                        knowledge and refining my skills. I'm very good at communicating with people, working in groups and I'm always
                        ready to face a challenge.
                        <br /><br />
                        Currently based in Melbourne, VIC, Australia
                      </p>
                      <div className="d-flex align-items-center justify-content-start flex-wrap mt-4">
                        <div className="social_media mt-3">
                          <a className='text_pink' href="https://www.facebook.com/gabigabrielabs" target="_blank" rel="noreferrer">
                            <FaFacebookSquare size={30} />
                          </a>
                        </div>
                        <div className="social_media mt-3">
                          <a className='text_pink' href="https://github.com/gabrielabsouza1" target="_blank" rel="noreferrer">
                            <FaGithub size={30} />
                          </a>
                        </div>
                        <div className="social_media mt-3">
                          <a className='text_pink' href="https://www.instagram.com/gabiisouzab/" target="_blank" rel="noreferrer">
                            <FaInstagram size={30} />
                          </a>
                        </div>
                        <div className="social_media mt-3">
                          <a className='text_pink' href="https://www.linkedin.com/in/gabriela-souza-744a141b0/" target="_blank" rel="noreferrer">
                            <FaLinkedin size={30} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='container-fluid ps-lg-5 pb-5 pe-lg-0 bg_palette2'>
              <div id='experiences' className='anchor px-lg-5 pt-4'>
                <div className='grid_layout'>
                  <h2 className="text_white hello_text pt-5 pb-lg-5 pb-3">Experiences</h2>
                  <div className='row align-items-center'>
                    {isMobile ? <ExperiencesMobile /> : <Experiences />}
                  </div>
                </div>
              </div>
            </div>

            <Skills />

            <div className='container-fluid py-lg-5 pe-lg-0 bg_palette2'>
              <div id='projects' className='anchor px-lg-5 pt-4'>
                <div className='grid_layout pb-5'>
                  <h2 className="text_white hello_text pt-5 pb-5">Projects</h2>
                  <div className='row align-items-center position-relative pb-5'>
                    <div className="col-lg-6">
                      <a href="https://leadster.com.br/" rel='noreferrer' target={'_blank'}>
                        <Image width={688} height={480} src="/img/leadster.png" className='img-fluid project_img' alt="" />
                      </a>
                    </div>
                    <div className="col-lg-5 project_description_mobile px-4 px-sm-5 pe-lg-4 ">
                      <div className='text-lg-end mb-5 ms-2 ms-lg-0 me-lg-2'>
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
                    </div>
                  </div>
                  <div className='row align-items-center position-relative justify-content-end flex-row-reverse pt-5 mt-lg-5'>
                    <div className="col-lg-6">
                      <a href="https://gallery-blue.vercel.app/" rel='noreferrer' target={'_blank'}>
                        <Image width={688} height={480} src="/img/gallery.png" className='img-fluid project_img' alt="" />
                      </a>
                    </div>
                    <div className="col-lg-5 project_description_mobile px-4 px-sm-5 pe-lg-4">
                      <div className='text-start mb-5 ms-lg-2 pt-4 pt-sm-5 ms-2'>
                        <p className='text_pink f_600 f_size_18'>Featured Project</p>
                        <h2 className='text_white f_600'>Gallery</h2>
                      </div>
                      <div className='box_project_description2 text-start'>
                        <p className='text_white f_size_18 l_height_30'>A photo gallery created as my first project using ReactJS, SASS, Pexels API and Axios</p>
                      </div>
                      <div className="mt-4 d-flex justify-content-start justify-content-lg-end flex-wrap">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </main>
        </section>
      </Bubbles>
      <div className='parallax'></div>
      <div className='parallax_color'></div>
    </>
  )
}
