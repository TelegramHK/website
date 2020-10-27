import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

// Bootstrap imports
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

// i18n import
import { withTrans } from '../../i18n/withTrans'

// Navbar styling
const TelegramHeaderNav = styled(Navbar)`
  &&& {
    border-bottom: 1px solid #e8e8e8;
    margin: 0 0 13px;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.13);
  }

  @media(max-width: 993px){
    &&& {
      padding: .55rem 1rem ;
    }
  }

  .navitem-active{
    padding-bottom: .1rem;
    box-shadow: inset 0 -3px 0 0 #179cde;
  }

  .nav-item a.nav-link, .nav-item.show a.nav-link {
    color: #08c;
    padding: .89rem;
    box-shadow: none;
    transition:
      box-shadow .34s cubic-bezier(.165, .84, .44, 1),
      color .34s cubic-bezier(.165, .84, .44, 1);
  }

  .nav-item a.nav-link:hover {
    color: #1ab3ff;
    box-shadow: inset 0 -3px 0 0 #179cde;
    transition:
      box-shadow .34s cubic-bezier(.165, .84, .44, 1),
      color .34s cubic-bezier(.165, .84, .44, 1);
  }
`

const Header = ({ t, i18n }) => (
  <TelegramHeaderNav expand="lg" sticky="top">
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
)

export default withTrans(Header)