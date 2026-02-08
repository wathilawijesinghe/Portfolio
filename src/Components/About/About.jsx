import React from "react"
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m Wathila Wijesinghe, a passionate Fullstack developer based in Sri Lanka. I enjoy creating modern, responsive, and visually appealing web applications with a strong focus on user experience. I love turning ideas into interactive digital products using clean code and thoughtful design.</p>
                        <p>I specialize in building interfaces with React.js, JavaScript, HTML, and CSS, and I’m always eager to learn new technologies and improve my skills. I enjoy solving problems, experimenting with creative designs, and continuously growing as a developer to deliver high-quality and user-friendly solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About