import React, { Component } from 'react'
import greenSweater from '../images/greenSweater.jpg'


export default class AboutMe extends Component {
    render() {
        return (
            <div className="section me">
                <h2>About Me: </h2>
                <section className="about-section">
                    <div  className="about-description">
                        <p>
                            I am a dedicated software engineer that would love to bring my passion for health and biology into the field of technology. Learning and working with new technologies is something I enjoy and would love to work in a collaborative environment with others who share similar interests.
                        </p>
                    </div>
                    <div className="myPic">
                        <img src={greenSweater} alt="Isabel in green sweater"/>
                    </div>
                </section>
            </div>
        )
    }
}
