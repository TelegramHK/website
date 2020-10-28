import { Link } from 'gatsby'
import React from 'react'
import styled from "styled-components"

const StyledFooter = styled.footer`
  &&& {
    border-top: 1px solid #e8e8e8;
    min-width: 900px;
    max-width: 1140px;
    margin: 0 auto;
    padding: 28px 0 34px;
  }
  .footer_mobile {
    display: none;
  }
  .footer_columns_wrap {
    padding-left: 0;
    padding: 0 0 0 55px;
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
      padding: 16px 0 16px;
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

const Footer = () => (
  <StyledFooter className="footer mt-auto py-3">
    <div className="footer_columns_wrap footer_desktop">
      <div className="footer_column footer_column_telegram">
        <h5>Telegram (非官方) 香港支援小組</h5>
        <p className="footer_telegram_description">
          成立於 2016 年 9 月 1 日，《支援小組》便致力爲香港區的 Telegram
          使用者提供支援服務，解答用戶疑難、普及中文化等工作。
        </p>
      </div>
      <div className="footer_column">
        <h5>網站地圖</h5>
        <ul>
          <li>
            <Link to="/faq">常見問題</Link>
          </li>
          <li>
            <Link to="/blog">新聞稿</Link>
          </li>
          <li>
            <Link to="/apps">Apps</Link>
          </li>
        </ul>
      </div>
      <div className="footer_column">
        <h5>
          <Link to="/apps#mobile-apps">相關連結</Link>
        </h5>
        <ul>
          <li>
            <a href="https://telegram.how">【臺灣】Telegram 中文支援站</a>
          </li>
          <li>
            <a href="https://www.telegram.url.tw/tDocs/">
              【臺灣】Telegram 教學文件
            </a>
          </li>
          <li>
            <a href="https://zh.wikipedia.org/zh-hk/Telegram">維基百科條目頁</a>
          </li>
        </ul>
      </div>
      <div className="footer_column footer_column_platform">
        <h5>
          <a href="https://telegram.org/">官方網站</a>
        </h5>
        <ul>
          <li>
            <a href="https://core.telegram.org/api">API 界面</a>
          </li>
          <li>
            <a href="https://translations.telegram.org/">翻譯平臺</a>
          </li>
          <li>
            <a href="https://instantview.telegram.org/">Instant View</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer_columns_wrap clearfix footer_mobile">
      <div className="footer_column">
        <h5>
          <Link to="/faq">常見問題</Link>
        </h5>
      </div>
      <div className="footer_column">
        <h5>
          <Link to="/blog">Blog</Link>
        </h5>
      </div>
      <div className="footer_column">
        <h5>
          <Link to="/apps">Apps</Link>
        </h5>
      </div>
      <div className="footer_column">
        <h5>
          <a href="https://t.me/tlgrmhk_ch">
            Telegram (非官方) 香港支援頻道
          </a>
        </h5>
      </div>
    </div>
  </StyledFooter>
)

export default Footer