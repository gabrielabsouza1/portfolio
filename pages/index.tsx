import Navbar from '../components/navbar/Navbar'
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import React, { useState, useEffect } from 'react'
import Experiences from 'components/experiences/Experiences';
import Skills from 'components/skills/Skills';
import Bubbles from 'components/bubbles/Bubbles';
import ExperiencesMobile from 'components/experiences/ExperiencesMobile';
import Image from 'next/image';
import Head from 'next/head';
import { motion, useAnimation } from "framer-motion";
import { PageWrapper } from 'components/page-wrapper/PageWrapper';
import { useInView } from 'react-intersection-observer';
import { useAnimationContext } from '../context/useAnimationContext'
import Projects from 'components/projects/Projects';

export default function Home() {
  const [isMobile, setisMobile] = useState(false)
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const { variants, fadeUp, fadeDown, fade } = useAnimationContext();

  useEffect(() => {
    if (window.screen.width <= 991) {
      setisMobile(true)
    } else if (window.screen.width > 991) {
      setisMobile(false)
    }

    if (inView) {
      animation.start("show")
    } else {
      animation.start("hidden")
    }

  }, [inView]);
  return (
    <>
      <Head>
        <title>Gabriela Souza Portfolio</title>
        <link rel="icon" href="/img/favicon-32x32.png" />
        <meta name="description" content="Portfolio Front end Developer" />
        <link rel="canonical" href="https://portfolio-gabriela.vercel.app/"></link>
        <meta property="og:title" content="Gabriela Souza Portfolio" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://portfolio-gabriela.vercel.app/img/meta_image.png" />
        <meta property="og:url" content="https://portfolio-gabriela.vercel.app/" />
        <meta property="og:description" content="Portfolio Front end Developer"></meta>
      </Head>
      <Bubbles>
        <section className='bg_palette1'>
          <header>
            <Navbar />
          </header>
          <PageWrapper>
            <main>
              <div className='container-fluid ps-lg-5 pb-5 pe-lg-0 bg_palette1'>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="show" 
                  className="d-flex align-items-center justify-content-between height_header flex-wrap">
                  <motion.div variants={fadeDown} className='col-xl-6 col-xxl-5 ps-2 ps-sm-5 box_name'>
                    <h1 className="text_white hello_text">Hello, i'm</h1>
                    <div className="animation">
                      <div className="first"><div>Gabriela Souza</div></div>
                      <div className="second"><div>Web Developer</div></div>
                    </div>
                  </motion.div>
                  <motion.div variants={fade} className='img_header_visibility col-sm-10 col-xl-6 col-xxl-7 px-0' >
                    <img width={1082} height={1027} src="/img/header-teste2.png" className='img-fluid bouncing_img' alt="" />
                  </motion.div>
                </motion.div>

                <div id='about' className='anchor px-lg-5 pb-5 pt-5'>
                  <div className='grid_layout px-3'>
                    <h2 className="text_white hello_text pt-5 pb-lg-5 pb-3">About</h2>
                    <motion.div
                      ref={ref}
                      variants={variants}
                      animate={animation}
                      className='row align-items-center box_about position-relative' style={{ zIndex: 5, background: 'transparent', backdropFilter: 'blur(20px)' }}>
                      <div className="col-lg-4 px-0 px-sm-5 px-lg-0">
                        <Image width={431} height={431} src="/img/me2.png" className='img-fluid' style={{ borderRadius: 5 + 'px' }} alt="" />
                      </div>
                      <div className="col-lg-6 ms-lg-5 pe-lg-5 mt-4 mt-lg-0">
                        <motion.p variants={fadeUp} className='text_pink f_size_16em f_600 mb-2'>About me</motion.p>
                        <motion.h3 variants={fadeUp} className='f_size_24em text_white mb-4'>Gabriela Souza</motion.h3>
                        <motion.p variants={fadeUp} className='text_white f_size_18 f_600'>Front End Developer</motion.p>
                        <motion.p variants={fadeUp} className='text_white f_size_18 l_height_30'>Hello! My name is Gabriela and I'm a developer who made her career migration in 2021. After I graduated in Gastronomy (2021) I started
                          learning about IT and became passionate about technology.
                          <br />
                          I'm constantly studying new frameworks, improving my
                          knowledge and refining my skills. I'm very good at communicating with people, working in groups and I'm always
                          ready to face a challenge.
                          <br /><br />
                          Currently based in Melbourne, VIC, Australia
                        </motion.p>
                        <div className="d-flex align-items-center justify-content-start flex-wrap mt-4">
                          <motion.div variants={fade} className="social_media mt-3">
                            <a className='text_pink' href="https://www.facebook.com/gabigabrielabs" target="_blank" rel="noreferrer">
                              <FaFacebookSquare size={30} />
                            </a>
                          </motion.div>
                          <motion.div variants={fade} className="social_media mt-3">
                            <a className='text_pink' href="https://github.com/gabrielabsouza1" target="_blank" rel="noreferrer">
                              <FaGithub size={30} />
                            </a>
                          </motion.div>
                          <motion.div variants={fade} className="social_media mt-3">
                            <a className='text_pink' href="https://www.instagram.com/gabiisouzab/" target="_blank" rel="noreferrer">
                              <FaInstagram size={30} />
                            </a>
                          </motion.div>
                          <motion.div variants={fade} className="social_media mt-3">
                            <a className='text_pink' href="https://www.linkedin.com/in/gabriela-souza-744a141b0/" target="_blank" rel="noreferrer">
                              <FaLinkedin size={30} />
                            </a>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
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
                  <Projects/>
                  </div>
                </div>
              </div>

            </main>
          </PageWrapper>
        </section>
      </Bubbles>
    </>
  )
}
