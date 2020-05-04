import React, { Component } from 'react'

export default class ProjectList extends Component {
    render() {
        const Projects = {
            title = "Connect Four: Online Game",
            description = "",
            image = "",
            link = ""
        }
        return (
            <div>
                <h2>My Projects: </h2>
                {Projects.map((project, i)=>{
                    return <Project project={project} key={i}/>
                })}
            </div>
        )
    }
}
