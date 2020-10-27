import { Link } from "gatsby"
import React from "react"

// Bootstrap imports
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

// i18n import
import { withTrans } from '../../i18n/withTrans'

const Header = ({ t, i18n }) => (
  <Container>
    <Navbar expand="lg" sticky="top">
      <Navbar.Brand as={Link} to="/">TelegramHK</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          {/* <Nav.Item>
            <Nav.Link as={Link} to="/item-name/" activeClassName="navitem-active">{t('navbar.item-name')}</Nav.Link>
          </Nav.Item> */}
        </Nav>
        <Nav className="ml-auto">
          <NavDropdown title={t('i18n.selector.label')} id="langselector">
            <NavDropdown.Item onClick={()=>i18n.changeLanguage("en")}>English</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>i18n.changeLanguage("hk")}>繁體中文 (香港)</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
)

export default withTrans(Header)