import React, { Component } from 'react'

export default class ProjectDetail extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.project.title}</h3>
                    <img src={this.props.project.image} alt={this.props.project.image}/>
                    <p>About the app: {this.props.project.description}</p>
                    <p> 
                        Click <a href={this.props.project.link}>HERE</a> for deployed app.
                    </p>
                </div>
            </div>
        )
    }
}
