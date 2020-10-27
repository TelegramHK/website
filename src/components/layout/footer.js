
import { Link } from 'gatsby'
import React from 'react'

const Footer = () => (
  <footer className="footer mt-auto py-3">
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
  </footer>
)

export default Footer