import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Blockchain.jpg";
import projImg2 from "../assets/img/Jotpad.jpg";
import projImg3 from "../assets/img/Newsapp.jpg";
import projImg4 from "../assets/img/SatelliteImage.jpg";
import projImg5 from "../assets/img/projImg5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Projects = () => {

  const [CurrTab, setCurrTab] = useState("Projects");
  const projects = [
    {
      title: "Hashcode Ecommerce",
      description: "Built a high-performance Ecommerce website with NEXT.JS and integrated multiple APIs.",
      imgUrl: projImg5,
    },
    {
      title: "Blockchain Warranty System",
      description: "Blockchain Based warranty using the NFT's and Smart Contract.",
      imgUrl: projImg1,
    },
    {
      title: "Jotpad",
      description: "Your Notes secured and safe on the Cloud",
      imgUrl: projImg2,
    },
    {
      title: "Satellite Image Analysis",
      description: "Satellite image analysis to classify the contents of the satellite image.",
      imgUrl: projImg4,
    },
    {
      title: "News Bites",
      description: "Your daily news free and secure alternative",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{CurrTab}</h2>
                <br/>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link style = {{cursor : "pointer"}} eventKey="first" onClick={()=>setCurrTab("Projects")}>Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link style = {{cursor : "pointer"}} eventKey="second" onClick={()=>setCurrTab("Internships/Experience")}>Internships/Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link style = {{cursor : "pointer"}} eventKey="third" onClick={()=>setCurrTab("Profile Links")}>Profile Links</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>These are some of the projects that I created while on my journey of learning new and exciting techstack. The list is infinite and keep growing as I keep Learning 😎😎😎</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                      <Card className="bg-dark text-white">
                        <Card.Body>
                          <Card.Title>Full Stack Developer</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">TechPose Private Limited</Card.Subtitle>
                          <p>
                          ◦ Collaborated with a cross-functional team on Online Donation Website. Wrote and refactored the Backend REST Api’s of the Application to improve their functionality and readability.
                          </p>
                          <p>
                          ◦ Wrote 5+ components from scratch to delight the user and deliver functionality elegantly and efficiently and debugged 10+ existing components for functionality.
                          </p>
                          <Card.Link href="#">Completion Letter</Card.Link>
                        </Card.Body>
                      </Card>
                      </Row>
                      <br/>
                      <Row>
                      <Card className="bg-dark text-white">
                        <Card.Body>
                          <Card.Title>Salesforce Developer Internship</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Smart Internz</Card.Subtitle>
                          <p>
                          ◦ Learned about the Salesforce Platform, Tools and services provided by it and it's real world applications and usecases through the modules.
                          </p>
                          <Card.Link href="#">Completion Letter</Card.Link>
                        </Card.Body>
                      </Card>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                      <Card style={{ width: '18rem' }} className="bg-dark text-white mx-3 my-1">
                        <Card.Body>
                          <Card.Title>LeetCode Profile</Card.Title>
                          <Button variant="primary" onClick={()=>{window.open('https://leetcode.com/Ksheetiz_24/','_blank')}}>Link</Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: '18rem' }} className="bg-dark text-white my-1">
                        <Card.Body>
                          <Card.Title>CodeChef Profile</Card.Title>
                          <Button variant="primary" onClick={()=>{window.open('https://www.codechef.com/users/ksheetiz','_blank')}}>Link</Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: '18rem' }} className="bg-dark text-white mx-3 my-1">
                        <Card.Body>
                          <Card.Title>GeeksForGeeks Profile</Card.Title>
                          <Button variant="primary" onClick={()=>{window.open('https://auth.geeksforgeeks.org/user/ksheetiz43/practice','_blank')}}>Link</Button>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: '18rem' }} className="bg-dark text-white my-1">
                        <Card.Body>
                          <Card.Title>Github Profile</Card.Title>
                          <Button variant="primary" onClick={()=>{window.open('https://github.com/ksheetiz','_blank')}}>Link</Button>
                        </Card.Body>
                      </Card>
                      </Row>  
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
