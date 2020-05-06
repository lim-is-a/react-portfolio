import React, { Component } from 'react'
import greenSweater from '../images/greenSweater.jpg'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={greenSweater} alt="Isabel in green sweater"/>
                </div>
                <div>
                    <h1>Isabel Limas</h1>
                    <h3>Full Stack Developer</h3>
                </div>
            </div>
        )
    }
}
