import React, { Component } from 'react'
import greenSweater from '../images/greenSweater.jpg'


export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <section>
                    <div>
                        <img src={greenSweater} alt="Isabel in green sweater" />
                    </div>
                    <h1>About Me: </h1>
                    <p>
                        I am a dedicated software engineer that would love to bring my passion for health and biology into the field of technology. Learning and working with new technologies is something I enjoy and would love to work in a collaborative environment with others who share similar interests.
                    </p>
                </section>
            </div>
        )
    }
}
