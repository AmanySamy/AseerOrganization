import React from 'react'
import './Footer.scss'
import Scrollspy from 'react-scrollspy'

export default function Footer() {
    return (
        <footer className="Footer bg-section">
          <div className="container">
            <div className="media-container-row align-center mbr-white">
              <div className="row">
                <Scrollspy className="nav navbar-nav mr-auto d-flex" items={ ['#About', '#Services', '#News' , '#Projects','#Team'] } currentClassName="is-current">
                  <li className="nav-item"><a className="nav-link" href="/">الرئيسيه</a></li>
                  <li className="nav-item"><a className="nav-link" href="/about">عن الهيئة</a></li>
                  <li className="nav-item"><a className="nav-link" href="/all-news">الأخبار</a></li>
                  <li className="nav-item"><a className="nav-link" href="/policies">سياسة الخصوصية</a></li>
                  <li className="nav-item"><a className="nav-link" href="/contact">اتصل بنا</a></li>
                </Scrollspy>
              </div>
              <div className="row">
                <div className="social-list w-100">
                  <ul className="list-unstyled text-right d-flex flex-row m-auto">
                    <li className="list-item"><i className="icofont icofont-google-map" /></li>
                    <li className="list-item"><i className="icofont icofont-twitter" /></li>
                    <li className="list-item"><i className="icofont icofont-google-plus" /></li>
                    <li className="list-item"><i className="icofont icofont-phone" /></li>
                  </ul>
                </div>
              </div>
              <div className="row row-copirayt">
                <p className="copyright">الهيئة العامة لتطوير منطقة عسير © 2019</p>
              </div>
            </div>
          </div>
       </footer>
    )
}
