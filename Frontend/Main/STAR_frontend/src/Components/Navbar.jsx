import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/incedologo.png';
import Avatar from './Avatar/Avatar';
import Logout from './Logout/Logout';

function NavScrollExample({resouceName}) {
    return (
        <Navbar bg="dark" expand="md">
            <Container fluid>
                <Navbar.Brand href="/home"><img className='logo' src={Logo} alt=''></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: 'auto' }}
                        navbarScroll
                    >
                    </Nav>
                    <Logout resouceName={resouceName}/>
                    <Avatar/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;