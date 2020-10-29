import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ErrorWrapper = styled.div`
  height: 100%;
  width: 100%;
`

const BackgroundImage = styled.div`
  background: url(${({ imageSrc }) => imageSrc}) center center;
  background-size: cover;
  height: inherit;
  position: absolute;
  width: inherit;

  &::after {
    background: rgba(80, 80, 80, 0.7);
    content: "";
    height: inherit;
    position: absolute;
    width: inherit;
  }
`

const ContentWrapper = styled.div`
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: Montserrat, sans-serif;
  height: inherit;
  justify-content: center;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  width: inherit;
`

const Title = styled.h1`
  font-size: 110px;
  font-weight: 900;
  margin: 0;
  letter-spacing: 3px;
`

const Description = styled.h2`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
`

const HomeLink = styled(Link)`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 0 3px #ffffff, inset 0 0 0 2px rgb(103, 103, 103);
  color: rgb(103, 103, 103);
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  margin-top: 15px;
  padding: 8px 30px;
  text-decoration: none;
  text-transform: inherit;

  :visited {
    color: rgb(103, 103, 103);
  }

  :active,
  :hover {
    background-color: rgb(103, 103, 103);
    color: #ffffff;
  }
`

const Footer = styled.div`
  font-size: 9px;
  color: rgba(255, 255, 255, 0.72);
  background: rgba(0, 0, 0, 0.55);
  width: 100%;
  height: 2.1rem;
  line-height: 2.1rem;
  text-align: right;
  position: absolute;
  bottom: 0;
`

const NotFoundPage = () => (
  <ErrorWrapper>
    <BackgroundImage imageSrc="/images/404soon.jpg" />

    <ContentWrapper>
      <Title>404</Title>
      {/* Todo: Add i18n */}
      <Description>
        「在晚星墜落—— 徬徨午夜...」
        <br />
        讓我們帶你歸家吧！ 齊上齊落 :)
      </Description>
      {/* Todo: Redirect to corresponding language home page */}
      <HomeLink to="/">Home</HomeLink>
    </ContentWrapper>

    <Footer>
      圖片取自香港蘋果日報，於 2019 年 8 月 23
      日在獅子山高空拍攝&nbsp;&nbsp;&nbsp;
    </Footer>
  </ErrorWrapper>
)

export default NotFoundPage