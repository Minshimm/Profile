import React, { useState } from 'react';
import { MDBSwitch } from 'mdb-react-ui-kit';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header({ theme, toggleTheme }) {
  const [showBasic, setShowBasic] = useState(false); // State for toggling collapse

  // Dynamic navbar background color based on theme
  const navbarStyle = {
    backgroundColor: theme === 'dark' ? 'transparent' : 'rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%', 
    zIndex: '1000', 
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  };

  return (
    <div>
      <MDBNavbar expand='lg' light style={navbarStyle}>
        <MDBContainer fluid>
          {/* Navbar Toggler */}
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded={showBasic}
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)} // Toggler will now update the state
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>

          {/* Collapse when showBasic is true */}
          <MDBCollapse show={showBasic} navbar>
            {/* Align the nav items to the right */}
            <MDBNavbarNav className='mb-2 mb-lg-0' style={{ marginLeft: '700px' }}>
              <MDBNavbarItem active>
                <Link to={'/'}>
                  <MDBNavbarLink aria-current='page' href='#' className={`text-${theme === 'dark' ? 'light' : 'dark'}`}>
                    <i className="fa-solid fa-house"> Home</i>
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to={'/projects'}>
                  <MDBNavbarLink href='#' className={`text-${theme === 'dark' ? 'light' : 'dark'}`}>
                    <i className="fa-solid fa-display"> Projects</i>
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to={'/contact'}>
                  <MDBNavbarLink href='#' className={`text-${theme === 'dark' ? 'light' : 'dark'}`}>
                    <i className="fa-solid fa-phone"> Contact</i>
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              {/* Button or link to toggle light/dark mode */}
              <MDBNavbarItem>
                <MDBNavbarLink
                  href='#'
                  onClick={toggleTheme}
                  className={`text-${theme === 'dark' ? 'light' : 'dark'}`}
                >
                  {theme === 'light' ? (
                    <i className="fa-solid fa-moon"> Dark Mode</i>
                  ) : (
                    <i className="fa-solid fa-sun"> Light Mode</i>
                  )}
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;
