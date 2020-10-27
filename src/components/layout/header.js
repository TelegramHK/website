import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

// Bootstrap imports
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

// i18n import
import { withTrans } from '../../i18n/withTrans'

// Navbar styling
const TelegramHeaderNav = styled(Navbar)`
  .nav-item a.nav-link {
    color: #08c;
  }

  .nav-item a.nav-link:hover {
    color: #1ab3ff;
  }
`

const OuterNavContainer = styled(Container)`
  &&& {
    border-bottom: 1px solid #e8e8e8;
    margin: 0 0 13px;
  }
`

const Header = ({ t, i18n }) => (
  <OuterNavContainer fluid>
    <TelegramHeaderNav expand="lg" sticky="top" fluid>
      <Container>
        <Navbar.Brand as={Link} to="/">TelegramHK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Item>
              <Nav.Link as={Link} to="/apps/" activeClassName="navitem-active">{t('navbar.apps')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/blog/" activeClassName="navitem-active">{t('navbar.blog')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/faq/" activeClassName="navitem-active">{t('navbar.faq')}</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown title={t('i18n.selector.label')} id="langselector">
              <NavDropdown.Item onClick={()=>i18n.changeLanguage("en")}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>i18n.changeLanguage("hk")}>繁體中文 (香港)</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </TelegramHeaderNav>
  </OuterNavContainer>
)

export default withTrans(Header)