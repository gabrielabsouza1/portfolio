import React from 'react';
import style from './style.module.scss';

const Skills: React.FC<{}> = () => {

  return (
    <div id='skills' className='anchor container-fluid ps-lg-5 pe-lg-0 bg_palette1' style={{ height: 400 + 'px' }}>
      <div className='grid_layout'>
          <h2 className="text_white hello_text pt-5 pb-lg-5 pb-3">Skills</h2>
          <div className='row align-items-center'>
            <div className='row'>
              <div className='box_skill_1 col-2 p-3'>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Skills;