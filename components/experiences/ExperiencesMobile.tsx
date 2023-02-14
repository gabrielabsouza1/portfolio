import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { GoTriangleDown } from '@react-icons/all-files/go/GoTriangleDown';
import style from './style.module.scss'

export default function ExperiencesMobile() {
    return (
        <div className="mt-5">
            <Accordion className={`mb-4 background_dark ${style.before_none}`} style={{ borderRadius: 7 + 'px', overflow: 'hidden' }}>
                <AccordionSummary
                    expandIcon={<GoTriangleDown fill='#eb176b' size={'35px'} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='background_dark'
                >
                    <div className="text_pink cursor_pointer my-3">
                        <h3 className='mb-0 f_600'>Leadster</h3>
                    </div>
                </AccordionSummary>
                <AccordionDetails className='background_dark'>
                    <h3 className='f_size_16em text_white mb-2'>Front End Developer</h3>
                    <p className='text_white f_size_18'>Jan 2022 - currently</p>
                    <p className='text_white f_size_18 f_600'>Brazil</p>
                    <p className='text_white f_size_18 l_height_45'>
                        ● Adding and maintaining website pages
                        <br />
                        ● Website maintenance with HTML, CSS, Javascript
                        <br />
                        ● Data transition from HTML/CSS to ReactJs and NextJs
                        <br />
                        ● Improving Core Web Vitals Score
                    </p>
                </AccordionDetails>
            </Accordion>

            <Accordion className={`mb-4 background_dark ${style.before_none}`} style={{ borderRadius: 7 + 'px', overflow: 'hidden' }}>
                <AccordionSummary
                    expandIcon={<GoTriangleDown fill='#eb176b' size={'35px'} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='background_dark'
                >
                    <div className="text_pink cursor_pointer my-3">
                        <h3 className='mb-0 f_600'>Casa do Nobreak</h3>
                    </div>
                </AccordionSummary>
                <AccordionDetails className='background_dark'>
                    <h3 className='f_size_16em text_white mb-2'>Costumer Service / Sales</h3>
                    <p className='text_white f_size_18'>Dec 2020 - Jan 2022</p>
                    <p className='text_white f_size_18 f_600'>Brazil</p>
                    <p className='text_white f_size_18 l_height_45'>
                        ● Sales techniques
                        <br />
                        ● Customer Service
                        <br />
                        ● Website maintenance with HTML e CSS
                    </p>
                </AccordionDetails>
            </Accordion>

            <Accordion className={`mb-4 background_dark ${style.before_none}`} style={{ borderRadius: 7 + 'px', overflow: 'hidden' }}>
                <AccordionSummary
                    expandIcon={<GoTriangleDown fill='#eb176b' size={'35px'} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='background_dark'
                >
                    <div className="text_pink cursor_pointer my-3">
                        <h3 className='mb-0 f_600'>Santi Pizzeria</h3>
                    </div>
                </AccordionSummary>
                <AccordionDetails className='background_dark'>
                    <h3 className='f_size_24em text_white mb-2'>Kitchen Staff</h3>
                    <p className='text_white f_size_18'>May 2019 - Dec 2020</p>
                    <p className='text_white f_size_18 f_600'>Brazil</p>
                    <p className='text_white f_size_18 l_height_45'>
                        ● Customer Service focused on providing an excellent experience for the client
                        <br />
                        ● Good team work skills
                    </p>
                </AccordionDetails>
            </Accordion>
        </div >
    )
}