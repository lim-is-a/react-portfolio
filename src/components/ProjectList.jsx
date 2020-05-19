import React, { Component } from 'react'
import ProjectDetail from './ProjectDetail'
import connect4 from '../images/connect4.png'
import fitChallenge from '../images/fitChallenge.png'
import cookbook from '../images/cookbook.png'
import earthFriendly from '../images/earthFriendly.png'

export default class ProjectList extends Component {
    render() {
        const Projects = [
            {
                title: "Connect Four: Online Game",
                description: "The Connect Four web application is an interactive two player game that was built using HTML, CSS, and JavaScript. The application is pushed to Github and deployed on AWS and Netlify",
                image: `${connect4}`,
                link: "https://master.d35is8w5c4alkl.amplifyapp.com/"
            },
            {
                title: "My Cookbook",
                description: "",
                image: `${cookbook}`,
                link: "https://my-cook-book-pr2.herokuapp.com/"
            },{
                title: "Choose Earth Friendly",
                description: "More people have been making a move to becoming earth-friendly for multiple reasons. Although it is increasing in popularity, it is still a bit challenging to go on the search for stores or restaurants that are completely earth-friendly or offer earth-friendly products. This is an app designed to facilitate the transition into this new lifestyle or simply seeking more earth-friendly resources.",
                image: `${earthFriendly}`,
                link: "https://choose-earth-friendly-pr3.herokuapp.com/"
            },
            {
                title: "Fitness Challenge",
                description: "There are a lot of people with different brands of fitness watches and each brand has their own app. You can participate in a challenge with people of similar brand, but a common issue is looking for an app where you can engage in a challenge with your family and friends with other brand fitness watches. This is a fitness challenge app where you can complete any challenge and also add your health stats for the completed challenges. You have the choice of joining an available challenge or creating your own. Anyone & Everyone can participate. Behind the scenes: this app was built using Django python web framework, postgresql database, and React for front end.",
                image: `${fitChallenge}`,
                link: "https://fitness-challenge-pr4.herokuapp.com/"
            }
        ]

        return (
            <div id="projects">
                <h2>My Projects: </h2>
                <section className="flex-container">
                    {Projects.map((project, i) => {
                        return <ProjectDetail project={project} key={i}/>
                    })}
                </section>
            </div>
        )
    }
}
