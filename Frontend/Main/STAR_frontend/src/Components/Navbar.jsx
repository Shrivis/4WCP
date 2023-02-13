import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/incedologo.png'

function NavScrollExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><img className='logo' src={Logo}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">All Expenses</Nav.Link>
                    </Nav>
                    <Form className="d-flex" >

                        <h5 style={{
                            marginRight:"10px",
                            marginTop:"7px"
                        }}>Avatar</h5>
                        <Image src='https://ychef.files.bbci.co.uk/976x549/p0dnxrcv.jpg' roundedCircle={true} style={{
                            width: "37px",
                            heigth: "auto",
                            objectFit: "cover"
                        }} />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;