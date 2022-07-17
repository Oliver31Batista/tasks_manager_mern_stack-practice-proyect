import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import routes from '../helpers/routes'

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
         <Navbar.Brand as={NavLink} to={routes.home}>Administrador de Tareas</Navbar.Brand>
         <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
         <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to={routes.projects}> Proyectos
            </Nav.Link>
            <NavDropdown title='Admin'>
              <NavDropdown.Item as={NavLink} to={routes.admin.users}>Usuarios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to={routes.login}>Iniciar Sesión</Nav.Link>
            <Nav.Link as={NavLink} to={routes.register}>Registrarse</Nav.Link>
            <Nav.Link as={NavLink} to={routes.account}>Mi Cuenta</Nav.Link>
          </Nav>
         </Navbar.Collapse>
    </Navbar>
  )
}
