import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "@components/layout/global/master"
import SEO from "@components/seo"

// i18n import
import { useTranslation } from 'react-i18next'

import { Container, Row, Col } from 'react-bootstrap'

const MainContainer = styled(Container)`
  &&&{
    margin-top: 34px;
  }

  .tl_main_logo_title_image {
    width: 144px;
    height: 36px;
    background: url("/images/official-assets/Telegram_1x.png") 0 0 no-repeat;
    margin: 18px auto 6px;
  }

  .tl_main_logo_lead {
    font-size: 20px;
    line-height: 148%;
    max-width: 285px;
    margin: 0 auto;
    color: #8c8c8c;
    text-align: center;
    padding: 1px 0 10px;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Light", Helvetica, Arial , Verdana, sans-serif;
    font-weight: 300;
  }

  /** Media queries **/
  @media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3/2), only screen and (min--moz-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5) {
    .tl_main_logo_title_image {
      background-size: 144px 36px;
      background-image: url("/images/official-assets/Telegram_2x.png");
    }
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
