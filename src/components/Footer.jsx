import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Footer = () => {
  return (
    <footer className='bg-black text-white' >
    <Container fluid>
      <Row>
        <Col>
        <img src={'Benz logo 2.png'} alt="" />
        <p><h3>Mercedes-Benz

THE BEST OR NOTHING.</h3>

Mercedes-Benz is dedicated to
building the world's most desirable
luxury vehicles and exceptional
customer experiences.</p>
        </Col>
        <Col><h5>VEHICLES</h5>
        <Nav>
        <Nav.Link href="/">All Vehicles</Nav.Link> 
        <Nav.Link href="/Booking">Sedans</Nav.Link>
        <Nav.Link href="/Booking">SUVs&Wagons</Nav.Link>
        <Nav.Link href="/Booking">Coupes & Convertibles</Nav.Link>
        <Nav.Link href="/Booking">Electric Vehicles</Nav.Link>
        <Nav.Link href="/Booking">Mercedes-AMG</Nav.Link>
        <Nav.Link href="/Booking">Mercedes-Maybach</Nav.Link>
        </Nav>
        
        </Col>
       <Col><h5>SHOPPING</h5>
        <Nav>
        <Nav.Link href="/Booking">Build Your Own</Nav.Link>
        <Nav.Link href="/Booking">Find a Dealer</Nav.Link>
        <Nav.Link href="/Booking">Current Offers</Nav.Link>
        <Nav.Link href="/Booking">Finance & Lease</Nav.Link>
        <Nav.Link href="/Booking">Certified Pre-Owned</Nav.Link>
        <Nav.Link href="/Booking">Accessories</Nav.Link>
        <Nav.Link href="/Booking">Mercedes me</Nav.Link>
        </Nav>
        
        </Col>
        <Col><h5>OWNERS</h5>
        <Nav>
        <Nav.Link href="/Booking">Owner Support</Nav.Link>
        <Nav.Link href="/Booking">Service & Parts</Nav.Link>
        <Nav.Link href="/Booking">Warranty</Nav.Link>
        <Nav.Link href="/Booking">Maintenance</Nav.Link>
        <Nav.Link href="/Booking">Roadside Assistance</Nav.Link>
        <Nav.Link href="/Booking">Digital Owner's Manual</Nav.Link>
      

      </Nav>
        
        </Col>
        <Col><h5>ABOUT US</h5>
        <Nav>
        <Nav.Link href="/Booking">Our Story</Nav.Link>
        <Nav.Link href="/Booking">Sustainability</Nav.Link>
        <Nav.Link href="/Booking">Innovation</Nav.Link>
        <Nav.Link href="/Booking">News & Events</Nav.Link>
        <Nav.Link href="/Booking">Careers</Nav.Link>
        <Nav.Link href="/Booking">Contact Us</Nav.Link>
    
        </Nav>
        
        </Col>
      
      </Row>

      <Row className='border-top border-secondary mt-3 py-4'>
         <Col>
         <h5>Stay updated with Mercedes-Benz</h5>
         <p>Get the latest Car collections,Luxirious Cars and New cars updates.</p>
         </Col>
         <Col>
         <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
    

<Button type='button' style={{backgroundcolor: "grey",color:'black',whitespace: 'nowrap'}}>Buy Now</Button>
    </Form>
         </Col>
         
  
      </Row>
      <Row className='border-top border-secondary mt-3 py-4'>
        <Col>&copy; {new Date().getFullYear()}  Mercedes-Benz. All  Rights Reserved.</Col>
      </Row>
    </Container>

    </footer>
  );
}

export default Footer;