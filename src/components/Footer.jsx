import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Footer = () => {
  return (
  <footer className='bg-black text-white' style={{ padding: '3rem 4rem' }}>
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
        <Nav.Link href="/sedans">Sedans</Nav.Link>
        <Nav.Link href="/suvswagons">SUVs&Wagons</Nav.Link>
        <Nav.Link href="/coupesconvertibles">Coupes & Convertibles</Nav.Link>
        <Nav.Link href="/electricvehicles">Electric Vehicles</Nav.Link>
        <Nav.Link href="/mercedesamg">Mercedes-AMG</Nav.Link>
        <Nav.Link href="/mercedesmaybach">Mercedes-Maybach</Nav.Link>
        </Nav>
        
        </Col>
       <Col><h5>SHOPPING</h5>
        <Nav>
        <Nav.Link href="/buildyourown">Build Your Own</Nav.Link>
        <Nav.Link href="/findadealer">Find a Dealer</Nav.Link>
        <Nav.Link href="/currentoffers">Current Offers</Nav.Link>
        <Nav.Link href="/financelease">Finance & Lease</Nav.Link>
        <Nav.Link href="/certifiedpreowned">Certified Pre-Owned</Nav.Link>
 
        </Nav>
        
        </Col>
        <Col><h5>OWNERS</h5>
        <Nav>
        <Nav.Link href="/ownersupport">Owner Support</Nav.Link>
        <Nav.Link href="/serviceparts">Service&Parts</Nav.Link>
        <Nav.Link href="/warranty">Warranty</Nav.Link>
        <Nav.Link href="/maintenance">Maintenance</Nav.Link>
      
      

      </Nav>
        
        </Col>
    <Col><h5>ABOUT US</h5>
        <Nav>
        <Nav.Link href="/ourstory">Our Story</Nav.Link>
        <Nav.Link href="/careers">Careers</Nav.Link>
        <Nav.Link href="/pressmedia">Press&Media</Nav.Link>
     
        <Nav.Link href="/contactus">Contact Us</Nav.Link>
    
        </Nav>
        
        </Col>

         <Col><h5>FOLLOW</h5>
        <Nav>
        <Nav.Link href="https://www.facebook.com" target='_blank'>Facebook</Nav.Link>
        <Nav.Link href="/Booking">Instagram</Nav.Link>
        <Nav.Link href="/Booking">Press&Media</Nav.Link>
        <Nav.Link href="/Booking">X (twitter)</Nav.Link>
        <Nav.Link href="/Booking">Youtube</Nav.Link>
        
    
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