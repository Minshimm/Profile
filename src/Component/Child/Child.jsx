import React from 'react'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBTabsItem
  } from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom';

  function Child({ jsonData }) { // Destructure props to access jsonData fields
    const { name, pic, quotes } = jsonData; // Destructure the jsonData to get the necessary fields
  
    return (
      <div className='d-flex justify-content-center my-5 text-dark'>
        <MDBCard style={{ maxWidth: '700px' }}>
          <MDBRow className='g-0'>
            <MDBCol md='4'>
              <MDBCardImage src={pic} alt={name} fluid />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody>
                <MDBCardTitle>{name}</MDBCardTitle>
                <MDBCardText>{quotes}</MDBCardText>
                <MDBCardText>
                <Link to={'/contact'}>
                 <button className='btn btn-primary my-3 '>Contact Me</button>
                </Link>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
    );
  }
  
  export default Child;