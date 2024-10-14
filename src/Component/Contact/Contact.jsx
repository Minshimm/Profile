import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
function Contact() {
  return (
    <div>
        <div className='row' style={{marginTop:'100px', marginBottom:'100px'}}>
            <div className='col-4'></div>
            <div className='col-4'>
              <form className='border shadow mt-5 px-3 me-3 text-center my-5 bg-light' >
              <h3 className='mt-3 text-dark'>Contact Me</h3>
              <MDBInput label="Name" className='my-3' type="text" />
              <MDBInput label="Email" className='my-3' type="text" />
              <MDBInput label="Message" className='my-3' type="text" />
              <button className='btn btn-primary my-3 '>Connect</button>
             </form>
           </div>
           <div className='col-4'></div>
        </div>
    </div>
  )
}

export default Contact