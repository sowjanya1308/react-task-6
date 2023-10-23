import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () =>{
    return (
        <section id = "intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className='introName'>Sowjanya</span> <br />Front End Developer</span>
                <p className='introPara'>I am a skilled front end developer with knowledge of html, css, js, react and ui/ux designs.</p>
                <Link><button className="btn"><img src = {btnImg} alt = "Hire Me"/>Hire Me</button></Link>
            </div> 
            
        </section>
    )
}

export default Intro;