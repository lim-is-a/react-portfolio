import React, { Component } from 'react'

export default class ProjectDetail extends Component {
    render() {
        return (
            <div className="project">
                <section >
                    <a href={this.props.project.link}>
                        <span>
                            <h3>{this.props.project.title}</h3>
                            <img src={this.props.project.image} alt={this.props.project.image} width="100%"/>
                        </span>
                    </a>
                </section>
                <section>
                    <p>About the app: {this.props.project.description}</p>
                </section>
            </div>
        )
    }
}
