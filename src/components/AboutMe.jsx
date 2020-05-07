import React, { Component } from 'react'
import greenSweater from '../images/greenSweater.jpg'


export default class AboutMe extends Component {
    render() {
        const styles = {
            mainStyle: {
                display: 'flex',
            },
            style: {
                display: 'inline-block',
                margin: '5em',
            },
            center: {
                paddingTop: '24rem',
            }
        }
        return (
            <div>
                <section style={styles.mainStyle}>
                    <div style={styles.style}>
                        <img src={greenSweater} alt="Isabel in green sweater" />
                    </div>
                    <div style={styles.style, styles.center}>
                        <h1>About Me: </h1>
                        <p>
                            I am a dedicated software engineer that would love to bring my passion for health and biology into the field of technology. Learning and working with new technologies is something I enjoy and would love to work in a collaborative environment with others who share similar interests.
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}
