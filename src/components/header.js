import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function header(){
    return(
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand>
                Show Finder
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default header