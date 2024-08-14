import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";

import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Airmeter"
              description="Airmeter is a smart billing app integrated with Sonoff devices for energy management in multi-tenant homes. It features real-time energy tracking, secure payments, dynamic cost calculation, and compatibility with multiple hardware manufacturers."
              ghLink="https://github.com/krypton4149/Airmeter"
              demoLink="Airmeter/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AnimeFlex"
              description="AnimeFlex is a React-based platform for streaming anime, offering a user-friendly interface with seamless navigation. It integrates with external APIs to provide a vast library of anime series and movies, enabling users to search, watch, and manage their favorite shows."
              ghLink="https://github.com/krypton4149/AnimeFlex"
              demoLink="https://anime-flex-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Phonefy"
              description="An e-commerce platform for smartphones, built with React.js, offering a seamless shopping experience. It includes features like product search, detailed product pages, a shopping cart, secure checkout, and user authentication."
              ghLink="https://github.com/krypton4149/Editor.io"
              demoLink="https://phonefy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Yidpod"
              description="Yidpod is a comprehensive platform designed to connect podcasters with their audience. It includes features like podcast hosting, episode scheduling, listener engagement tools, and analytics to help creators grow their audience."
              demoLink="https://yidpod.com/"
            />
          </Col>

          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={emotion}
    isBlog={false}
    title="Sound Work Solution"
    description="Sound Work Solution is a comprehensive platform designed for managing and enhancing audio production projects. It offers tools for sound editing, mixing, and project management, tailored for professionals in the music and audio industry."
    demoLink="https://soundworksolution.com/"
  />
</Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
