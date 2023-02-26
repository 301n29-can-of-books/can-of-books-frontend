import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='justify-content-start'>
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
        <NavItem>{this.props.auth0.isAuthenticated && <Link to="/profile" className="nav-link">Profile</Link>}</NavItem>
        <NavItem>{this.props.auth0.isAuthenticated ? <Logout/> : <Login/>}</NavItem>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
