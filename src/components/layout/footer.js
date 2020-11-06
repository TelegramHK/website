import { Link } from 'gatsby'
import React from 'react'
import styled from "styled-components"

// i18n import
import { withTrans } from '../../i18n/withTrans'

const StyledFooter = styled.footer`
  &&& {
    border-top: 1px solid #e8e8e8;
    min-width: 900px;
    max-width: 1140px;
    margin: 10px auto 0;
    padding: 28px 0 34px !important;
  }
  .footer_mobile {
    display: none;
  }
  .footer_columns_wrap {
    padding-left: 0;
    padding: 0 55px;
    margin: 0;
  }
  .footer_column {
    float: left;
    padding-right: 78px;
  }
  .footer_column_telegram {
    width: 290px;
    padding-right: 50px;
  }
  .footer_column:last-child {
    padding-right: 0;
  }
  .footer_column:first-child {
    padding-left: 0;
  }
  .footer_column h5 {
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 9px;
  }
  .footer_column h5 a {
    color: inherit;
  }
  .footer_column ul,
  .footer_column ul li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .footer_column ul li {
    font-size: 14px;
    line-height: 23px;
  }
  .footer_privacy_description {
    padding-top: 3px;
    font-size: 13px;
    line-height: 160%;
  }
  .footer_privacy_description p {
    margin-bottom: 6px;
  }
  .footer_telegram_description {
    font-size: 12px;
    margin-top: 1em;
    text-align: justify;
  }

  @media (max-width: 992px) {
    &&& {
      padding: 16px 0;
      border-top: 1px solid #e8e8e8;
      min-width: 90%;
      max-width: 95%;
    }
    .footer_desktop {
      display: none;
    }
    .footer_mobile {
      display: block;
    }
    .footer_columns_wrap {
      text-align: center;
      padding: 0;
    }
    .footer_column {
      display: inline-block;
      float: none;
      width: auto;
      padding: 0 8px;
      h5 {
        color: #08c;
        font-size: 12px;
        font-weight: normal;
        text-transform: uppercase;
        margin: 0;
      }
    }
  }
`

const Footer = ({ t, i18n }) => (
  <StyledFooter className="footer mt-auto py-3">
    <div className="footer_columns_wrap footer_desktop">
      <div className="footer_column footer_column_telegram">
        <h5>{t('footer.description.header')}</h5>
        <p className="footer_telegram_description">{t('footer.description.text')}</p>
      </div>
      <div className="footer_column">
        <h5>{t('footer.sitemap.header')}</h5>
        <ul>
          <li>
            <Link to="/apps">{t('navbar.apps')}</Link>
          </li>
          <li>
            <Link to="/blog">{t('navbar.blog')}</Link>
          </li>
          <li>
            <Link to="/faq">{t('navbar.faq')}</Link>
          </li>
        </ul>
      </div>
      <div className="footer_column">
        <h5>{t('footer.external.header')}</h5>
        <ul>
          <li>
            <a href={t('footer.external.relatedlinks.0.link')}>{t('footer.external.relatedlinks.0.text')}</a>
          </li>
          <li>
            <a href={t('footer.external.relatedlinks.1.link')}>{t('footer.external.relatedlinks.1.text')}</a>
          </li>
          <li>
            <a href={t('footer.external.relatedlinks.2.link')}>{t('footer.external.relatedlinks.2.text')}</a>
          </li>
        </ul>
      </div>
      <div className="footer_column footer_column_platform">
        <h5>
          <a href="https://telegram.org/">{t('footer.officials.header')}</a>
        </h5>
        <ul>
          <li>
            <a href="https://core.telegram.org/api">{t('footer.officials.api_docs')}</a>
          </li>
          <li>
            <a href="https://translations.telegram.org/">{t('footer.officials.i18n_platform')}</a>
          </li>
          <li>
            <a href="https://instantview.telegram.org/">{t('footer.officials.iv_platform')}</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer_columns_wrap clearfix footer_mobile">
      <div className="footer_column">
        <h5>
          <Link to="/apps">{t('navbar.apps')}</Link>
        </h5>
      </div>
      <div className="footer_column">
        <h5>
          <Link to="/blog">{t('navbar.blog')}</Link>
        </h5>
      </div>
      <div className="footer_column">
        <h5>
          <Link to="/faq">{t('navbar.faq')}</Link>
        </h5>
      </div>
      {` | `}
      <div className="footer_column">
        <h5>
          <a href="https://t.me/tlgrmhk_ch">{t('footer.mobile.tgchannel_name')}</a>
        </h5>
      </div>
    </div>
  </StyledFooter>
)

export default withTrans(Footer)