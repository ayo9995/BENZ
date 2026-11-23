import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar sticky='top' expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="/Home">
            <img src="2ND logo.png" alt="Logo" width={200} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>

             <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Now Showing </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Coming Soon
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Movies">Movies</Nav.Link>
            <Nav.Link href="/Booking">Booking</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
             <Nav.Link href="/Contact">Contact</Nav.Link>
           <button style={{ backgroundColor: 'grey',
             color: 'white', 
             border: 'none',
              padding: '10px 20px',
               borderRadius: '5px',
                cursor: 'pointer' }}
                 >
            <h5>Book Now</h5>            </button>  

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;