import React, { Component } from 'react'
import ProjectDetail from './ProjectDetail'

export default class ProjectList extends Component {
    render() {
        const Projects = [
            {
                title: "Connect Four: Online Game",
                description: "bla",
                image: "blah",
                link: "blaah"
            },
            {
                title: "Fitness Challenge",
                description: "bla",
                image: "blah",
                link: "blaah"
            },
        ]

        return (
            <div>
                <h2>My Projects: </h2>
                {Projects.map((project, i) => {
                    return <ProjectDetail project={project} key={i}/>
                        })}
            </div>
        )
    }
}
