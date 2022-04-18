import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Header.css';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <div>
                <Navbar className='nav-container'
                    collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Life Maker Sohag</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="/blog">blog</Nav.Link>
                                <Nav.Link href="/checkout">Checkout</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link className='me-4 pe-4' href="home#services">Services</Nav.Link>
                                <Nav.Link className='ps-4' href="/aboutme">About Me</Nav.Link>
                                {user ? <button className='light btn btn-link' onClick={handleLogOut}>Log Out</button> : <Nav.Link eventKey={2} href="/login">Login</Nav.Link>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;