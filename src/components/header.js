import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Container, Navbar, Nav } from 'react-bootstrap'

import logo from "../images/my-logo.jpg"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link to="/" activeClassName="active">
            <img src={logo} alt={siteTitle} className="logoMaxWidth" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ml-auto">
            <ul className="navbar-nav">
              <li><Link to="/page-2" activeClassName="active" className="nav-link">Page 2</Link></li>
              <li><Link to="/page-3" activeClassName="active" className="nav-link">Page 3</Link></li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
