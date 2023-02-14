import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/incedologo.png';
import Avatar from './Avatar/Avatar';
import Logout from './Logout/Logout';

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
                    <Avatar/>
                    <Logout/>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;