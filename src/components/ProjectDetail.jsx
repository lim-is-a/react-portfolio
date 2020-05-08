import React, { Component } from 'react'

export default class ProjectDetail extends Component {
    render() {
        return (
            <div className="project">
                <section >
                    <h3>{this.props.project.title}</h3>
                    <p>About the app: {this.props.project.description}</p>
                </section>
                <section>
                    <img src={this.props.project.image} alt={this.props.project.image} width="100%"/>
                    <p>
                        Click <a href={this.props.project.link}>HERE</a> for deployed app.
                    </p>
                </section>
            </div>
        )
    }
}
