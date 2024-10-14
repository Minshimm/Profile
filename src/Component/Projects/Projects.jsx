import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBBtn,
  MDBCardHeader,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

function Projects() {
  // Define the project data in state
  const [projects] = useState([
    {
      title: 'Food Delivery Site',
      description: 'DailyMeals Site is used to order food and reach at your door.',
      link: ' https://minshimm.github.io/Dailymeals/',
    },
    {
      title: 'Furniture Site',
      description: 'Wood Home Site is used to order for any furniture',
      link: ' https://minshimm.github.io/Furnituresite/',
    },
    {
      title: 'Online Book Site',
      description: 'Readers cafe is used to ordering Books. Here available any type Books also.',
      link: ' https://minshimm.github.io/Booksite/',
    },
    {
      title: 'Online Plant Site',
      description: 'Plantsomanis is a online plant nursey.',
      link: 'https://minshimm.github.io/plant/',
    },
    {
      title: 'AMTM Site',
      description: 'This site used for pet care.',
      link: ' https://minshimm.github.io/AMTM/',
    },
    {
      title: 'Event Management Site',
      description: 'Harsham site is used to book any Events.',
      link: ' https://minshimm.github.io/Harsham-EventManagement/',
    },
  ]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-light bg-dark" style={{marginTop:'100px'}}>My Projects</h2>
      <MDBRow>
        {projects.map((project, index) => (
          <MDBCol md="6" lg="4" className="mb-4" key={index}>
            <MDBCard>
              <MDBCardHeader className='text-primary fw-bolder'>{project.title}</MDBCardHeader>
              <MDBCardBody>
                <MDBCardText>{project.description}</MDBCardText>
                <MDBBtn href={project.link} target="_blank">
                  View Project
                </MDBBtn>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Project {index + 1}</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
}

export default Projects;