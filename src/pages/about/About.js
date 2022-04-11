import React from 'react'
import { Container,Info,StyleImg } from './AboutStyles.js'
import codingsvg from "../../assets/coding.svg"

const About = () => {
    return (
        <Container>
            <StyleImg src={codingsvg} alt="" />
            <h1>About Solfware Developer <span>Cem</span></h1>
            <Info>
                <h2 >Hi, I'am Cem</h2>
                <h3>I’m currently learning Full-Stack Development Languages.</h3>
                <h4>
                    
                    I know JS, ReactJS, Django, NodeJS, MongoDB,SQL, Python, AWS Services.
                </h4>
                <h2>
                    <a href="mailto:cemispirli08@gmail.com">Send email</a> :
                    cemispirli08@gmail.com
                </h2> 
            </Info>            
        </Container>     
    )
}

export default About