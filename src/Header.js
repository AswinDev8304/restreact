import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    
    <Navbar  className="bg-primary">
      <Container>
        <Navbar.Brand href="#"><h3 className='text-warning fs-3'> <i className="fa-solid fa-bowl-food"></i>&nbsp; New Taste</h3></Navbar.Brand>
      </Container>
    </Navbar>
 
  )
}

export default Header