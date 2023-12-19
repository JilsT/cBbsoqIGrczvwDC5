import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Home.css';
import image from "../Images/vector.png"
import bg1 from "../Images/graph.png"
import bg2 from "../Images/graph2.png"

const Home = () => {
    const data = [
        {
            image: "https://cdn.worldvectorlogo.com/logos/c-1.svg",
            name: "C++",
        },
        {
            image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
            name: "Javascript",
        },
        {
            image: "https://cdn.worldvectorlogo.com/logos/python-4.svg",
            name: "Python",
        },
        {
            image: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg",
            name: "NodeJS",
        },
        {
            image: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
            name: "ExpressJS",
        },
        {
            image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
            name: "MongoDB",
        },
        {
            image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
            name: "ReactJS",
        },
        {
            image: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
            name: "HTML/CSS",
        },
        {
            image: "https://cdn.worldvectorlogo.com/logos/github-icon.svg",
            name: "Github",
        },
        {
            image: "https://cdn.worldvectorlogo.com/logos/tux.svg",
            name: "Linux",
        },
        {
            image: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
            name: "Tailwind",
        },
        {
            image: "https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg",
            name: "GraphQL",
        },

    ]

    return (
        <>
            <div className="landingPage">
                <div className="home">
                    <div className="intro">
                        <h1>Hi! I'm Jils, </h1>
                        <h1>a full stack developer,</h1>
                        <p>I will be graduating in 2025 June with a major in computer science and engineering. I am particularly interested in web developments, but I hope to learn about new technologies along with the team.
                        </p>
                    </div>
                    <div >
                        <img className="banner" src={image} alt="banner" />
                    </div>
                </div>
                <div className="skillSection">
                    <div className="skillHeading">
                        <h1>
                            SkillSet
                        </h1>
                    </div>
                    <div className="skillset">

                        {data.map((skill) => (
                            <div className="cards">
                                <Card className="card" style={{ backgroundColor: "#4F709C", borderRadius: "0" }}>
                                    <img src={skill.image} alt={skill.name} />
                                    <CardContent>
                                        <p>{skill.name}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="infoSection">
                    <div className="info">
                        <img className="infoSvg" src={bg1} alt="background" />
                        <a href="/bmi">
                            <h1 className="infoContent">BMI</h1>
                        </a>
                    </div>
                    <div className="info">
                        <img className="infoSvg" src={bg2} alt="background2" />
                        <a href="https://drive.google.com/file/d/1p2ql6nEE6uHqaXn1yn9r1Uthrgp3AIht/view?usp=drive_link">
                            <h1 className="infoContent">Resume</h1>
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home;