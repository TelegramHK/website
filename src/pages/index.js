import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout/master"
import SEO from "../components/seo"

// i18n import
import { useTranslation } from 'react-i18next'

import { Container, Row, Col } from 'react-bootstrap'

const MainContainer = styled(Container)`
  &&&{
    margin-top: 34px;
  }
`

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Home" />
      <MainContainer>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Link to="/">
              <img src="/images/official-assets/telegram_official_logo.png" height={128} alt="" style={{display: "block"}} className="mx-auto" />
              <div className="tl_main_logo_title_image" alt="Telegram"></div>
            </Link>
            <p className="tl_main_logo_lead">{t("landingpage.slogan")}</p>
          </Col>
        </Row>
      </MainContainer>
    </Layout>
  )
}

export default IndexPage
