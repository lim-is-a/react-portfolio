import React, { Component } from 'react'
import greenSweater from '../images/greenSweater.jpg'


export default class AboutMe extends Component {
    render() {
        return (
            <div className="section aboutMe" id="aboutMe">
                <h2>About Me: </h2>
                <section className="flex-container">
                    <div  className="about-description">
                        <p>
                            I am a software engineer who brings passion for health and biology into the field of technology. I am passionate about solving problems and creating new technologies that help others live a better life. On my down time I like to stay active any way I can, go on outdoor adventures, and hang out with family and friends.
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
