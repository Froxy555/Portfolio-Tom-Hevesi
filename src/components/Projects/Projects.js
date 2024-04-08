import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import petshop from "../../Assets/Projects/petshop.png";
import todo from "../../Assets/Projects/todo.png";
import codeforces from "../../Assets/Projects/codeforces.png";
import flask from "../../Assets/Projects/flask.png";
import linktree from "../../Assets/Projects/linktree.png";
import info from "../../Assets/Projects/info.png";
import expense from "../../Assets/Projects/expense.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects <strong className="purple"> </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Weather page made with React.js, which shows today's daily weather, today's statistics and 7-day weather forecast. You can enter the location manually, but your position can also be retrieved automatically from the browser."
              ghLink="https://github.com/Froxy555/React-Weather_Tom-Hevesi"
              demoLink="https://weather-tom-hevesi.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="A website where you can enter your income and expenses and analyze them statistically (max, min, atlag, etc.)"
              ghLink="https://github.com/Froxy555/Expense-Tracker"
              demoLink="https://expense-tracker-one-theta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flask}
              isBlog={false}
              title="Notes App"
              description="Website made with Python Flask, where you can add/delete notes by logging in/registering."
              ghLink="https://github.com/Froxy555/Python-Flask-ToDowithLogin/tree/main"
              demoLink="http://froxy555.pythonanywhere.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petshop}
              isBlog={false}
              title="Pet Webshop"
              description="A webshop designed for school project work, which deals with selling animals and providing services."
              ghLink="https://github.com/Froxy555/LilDuck-Pet-Shop"
              demoLink="https://lil-duck-pet-shop.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDo app"
              description="A page where you can write reminders, daily tasks, which can then be ticked off when completed. "
              ghLink="https://github.com/Froxy555/ToDo-React-Froxy555"
              demoLink="https://todo-froxy555.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linktree}
              isBlog={false}
              title="LinkTree"
              description="I didn't like the theme of any of the link sharing sites, so I made one for myself."
              ghLink="https://github.com/Froxy555/LinkTree"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={info}
              isBlog={false}
              title="Graduation IT tasks"
              description="Solutions of advanced information tasks from the past years"
              ghLink="https://github.com/Froxy555/informatika-erettsegi-python"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeforces}
              isBlog={true}
              title="C++ works"
              description="Different types of C++ tasks with solutions"
              ghLink="https://codeforces.com/submissions/Froxy555"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
