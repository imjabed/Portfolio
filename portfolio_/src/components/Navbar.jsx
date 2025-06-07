import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return(
        <>
        <Navbar  style={{ backgroundColor: '#121624'}}>
            <Container className="py-2 d-flex justify-content-around align-items-center" >
                <Navbar.Brand as={Link} to="/" style={{color:'white'}}>Md Abu Jabed</Navbar.Brand>
                <Nav style={{gap:'100px'}}>
                <Nav.Link as={Link} to="/" style={{color: 'white', fontSize: '16px', transition: 'all 0.3s ease'}} 
                    onMouseOver={(e) => {e.target.style.color = '#66ccff'; e.target.style.fontSize = '15px'; }}
                    onMouseOut={(e) => {e.target.style.color = 'white'; e.target.style.fontSize = '16px'; }}>
                
                Home</Nav.Link>

                <Nav.Link as={Link} to="/projects" style={{color: 'white', fontSize: '16px', transition: 'all 0.3s ease'}} 
                    onMouseOver={(e) => {e.target.style.color = '#66ccff'; e.target.style.fontSize = '15px'; }}
                    onMouseOut={(e) => {e.target.style.color = 'white'; e.target.style.fontSize = '16px'; }} >
                
                Projects</Nav.Link>
                
                <Nav.Link as={Link} to="/aboutme" style={{color: 'white', fontSize: '16px', transition: 'all 0.3s ease'}} 
                    onMouseOver={(e) => {e.target.style.color = '#66ccff'; e.target.style.fontSize = '15px'; }}
                    onMouseOut={(e) => {e.target.style.color = 'white'; e.target.style.fontSize = '16px'; }}>
                About me</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default MyNavbar;