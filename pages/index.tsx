import Navbar from '../components/navbar/Navbar'
import React from 'react'

export default function Home() {
  return (
    <section className='background_dark'>
      <header>
        <Navbar />
      </header>

      <main>
        <div className='container-fluid ps-lg-5 pe-lg-0'>
          <div className="d-flex align-items-center" style={{ height: 90 + 'vh', minHeight: 700 + 'px' }}>
            <div className='col-lg-5 ps-lg-5 box_name'>
              <h1 className="text_white hello_text">Hello, i'm</h1>
              <div className="animation">
                <div className="first my_name"><div>Gabriela Souza</div></div>
                <div className="second"><div>Web Developer</div></div>
              </div>
            </div>

            <div className='col-lg-7 px-0'>
              <img src="/img/header.png" className='img-fluid' alt="" />
            </div>
          </div>

          <div id='about' className='anchor pt-5 bg_skills'>
            <h2 className="text_white hello_text pt-5">About</h2>
            <div className='row'>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
            </div>
          </div>

          <div id='experiences' className='anchor pt-5 bg_skills'>
            <h2 className="text_white hello_text pt-5">Experiences</h2>
            <div className='row'>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
            </div>
          </div>

          <div id='skills' className='anchor pt-5 bg_skills'>
            <h2 className="text_white hello_text pt-5">Skills</h2>
            <div className='row'>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
            </div>
          </div>

          <div id='projects' className='anchor pt-5 bg_skills'>
            <h2 className="text_white hello_text pt-5">Projects</h2>
            <div className='row'>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="skills_card">

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
