import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container fluid className="mx-0 px-sm-5"  >
          <Navbar.Brand as={Link} to='/' >Weather Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link href="https://github.com/abdulrahman1905/weather-dashboard">GitHub</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header
