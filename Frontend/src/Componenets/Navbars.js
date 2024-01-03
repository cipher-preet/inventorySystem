import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import RegisterPage from '../Componenets/RegisterPage';




function Navbars() {
  const token = localStorage.getItem('token');

  const handleLogout = () =>{
    localStorage.removeItem('token');
    window.location.href = "/login";

  }
  return (
    <>
   
    <Navbar expand="lg" className="bg-body-tertiary">
      
      <Container fluid>
        <Link to="/" style={{textDecoration:"none"}}><Navbar.Brand>Inventory Management</Navbar.Brand></Link> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/genrateQR' style={{textDecoration:"none"}}><Nav.Link href="genrateQR">GenerateQRcode</Nav.Link></Link>
            <Link to='/detail' style={{textDecoration:"none"}}><Nav.Link href="#action2">ScanQRcode</Nav.Link></Link>         
           </Nav>
          
        </Navbar.Collapse>

         <div>
          {token ? (
            <Link to="/"><Button variant="outline-primary" type="submit" onClick={()=> handleLogout() }>Logout</Button></Link>
          ) : (
            <>
              <Link to="/login"><Button variant="outline-primary" style={{marginRight:"10px"}} type="submit">Login</Button></Link>
              <Link to="/register"><Button variant="outline-primary" type="submit">Register</Button></Link>
            </>
          )}
        </div>
      </Container>
      
    
    </Navbar>
      
      
    </>
  );
}

export default Navbars;



