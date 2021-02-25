import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationLink = styled.p`
  font-weight: bold;
  margin: 0;
`;

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
      <Navbar.Brand as={Link} to='/'>Super Store</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='ml-auto'>
          <Nav.Link active='' eventKey='1' as={Link} to='/'>
            <NavigationLink>Home</NavigationLink>
          </Nav.Link>
          <Nav.Link active='' eventKey='2' as={Link} to='/deals'>
            <NavigationLink>Deals</NavigationLink>
          </Nav.Link>
          <Nav.Link active='' eventKey='3' as={Link} to='/cart'>
            <NavigationLink>Cart</NavigationLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
