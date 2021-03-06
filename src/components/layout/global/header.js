import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

// Bootstrap imports
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

// i18n import
import { useTranslation } from 'react-i18next'

// Navbar styling
const TelegramHeaderNav = styled(Navbar)`
  &&& {
    flex-shrink: 0;
    border-bottom: 1px solid #e8e8e8;
    margin: 0;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.13);
  }

  @media(max-width: 993px){
    &&& {
      padding: .55rem 1rem ;
    }
  }

  .dropdown-toggle::after{
    border: none; // important override to bootstrap styling
  }

  .nav-item > a.nav-link,
  .nav-item.show > a.nav-link,
  .nav-item > a.nav-link:focus,
  .nav-item > a.nav-link:hover {
    color: #08c;
    padding: .89rem;
    position: relative;
  }

  .nav-item > a:after{
    display: block;
    height: 3px;
    background: #179cde;
    position: absolute;
    border-radius: 2px 2px 0 0;
    content: "";
    left: 4px;
    right: 4px;
    opacity: 0;
    bottom: 0;
    transition:
      opacity .2s cubic-bezier(.165, .84, .44, 1),
      transform .2s cubic-bezier(.165, .84, .44, 1);
    transform-origin: bottom;;
    transform: scaleX(0.3) scaleY(0);
  }

  .nav-item > a.navitem-active:after,
  .nav-item.show > a:after,
  .nav-item > a:hover:after {
    opacity: 1;
    transform: scaleX(1.0) scaleY(1.0);
  }

  .nav-item.dropdown .dropdown-menu {
    left: -5.3125em;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3/2), only screen and (min--moz-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5) {
    .nav-item.dropdown .dropdown-menu {
      left: -5.03em;
    }
  }
`

const Header = () => {
  const { t, i18n } = useTranslation()

  return (
    <TelegramHeaderNav collapseOnSelect={true} expand="lg" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Item>
              <Nav.Link as={Link} to="/" activeClassName="navitem-active">{t('navbar.index')}</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link as={Link} to="/apps" activeClassName="navitem-active">{t('navbar.apps')}</Nav.Link>
            </Nav.Item> */}
            {/* <Nav.Item>
              <Nav.Link as={Link} to="/blog" activeClassName="navitem-active">{t('navbar.blog')}</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link as={Link} to="/faq" activeClassName="navitem-active">{t('navbar.faq')}</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown title={t('i18n.selector.label')}>
              <NavDropdown.Item onClick={()=>i18n.changeLanguage("en")}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>i18n.changeLanguage("hk")}>繁體中文 (香港)</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </TelegramHeaderNav>
  )
}

export default Header