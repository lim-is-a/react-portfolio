import React, { Component } from 'react'

export default class ProjectDetail extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.title}</h1>
                    <img src="" alt=""/>
                    <p>{this.props.description}</p>
                    <p>{this.props.link}</p>
                </div>
            </div>
        )
    }
}
