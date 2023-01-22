import React from 'react'

export default function Home() {
  return (
    <main className='background_dark'>
      <div className='position-relative'>
        <div className='container-fluid ps-5 pe-0'>
          <div className='row'>
            <div className='col-lg-6 position-relative' style={{zIndex: 2}}>
              <h1 className="text_white">Home</h1>
              <p className="text_white">Cache every single thing your app could ever do ahead of time, so your code never even has to run at all. hnjuasidhaiudhasbdua</p>
              <button className="text_white">Get started</button>
            </div>

             <div className='col-lg-7 px-0' style={{position: 'absolute', right: 0, top: 0, zIndex: 1}}>
              <img src="/img/header.png" className='img-fluid' alt="" />
            </div>
          </div>
        </div>
       
      </div>
    </main>
  )
}
