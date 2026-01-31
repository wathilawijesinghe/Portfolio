import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Wathila Wijesinghe,</span> frontend developer based in Sri Lanka.</h1>
            <p>I’m a passionate Frontend Developer with a strong interest in creating modern, responsive, and user-friendly web applications. I specialize in React and enjoy building clean interfaces with smooth interactions. I’m always eager to learn new technologies and improve my skills while turning creative ideas into real-world solutions.</p>

            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero