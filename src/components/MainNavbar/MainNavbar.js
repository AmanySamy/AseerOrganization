import React, {Component} from 'react';
import ScrollspyNav from "react-scrollspy-nav";
import './MainNavbar.scss'



export default class MainNavbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    window.addEventListener('scroll', this.AdjustHeader);
  }
  
  AdjustHeader = () => {
    let navbar = document.getElementById('main-navbar')
    if(window.pageYOffset > 60) {
      if (!navbar.classList.contains("fixed-top")) {
        navbar.classList.add("fixed-top");
      }
    }else {
      navbar.classList.remove("fixed-top");
    }
  }
 
  
  render() {
  return (
    <nav id="main-navbar" className="navbar navbar-dark navbar-expand-md d-flex flex-row-reverse justify-content-center navigation-clean-search">
      <div className="container">
        <a className="navbar-brand" href="/" style={{width: '150px'}}><img src="/img/logo.jpg" alt="site title" style={{width: '100%', height: '100%'}} /></a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navcol-1"> 
          <ScrollspyNav className = "navbar-nav"
            scrollTargetIds = {["Header","About", "Services", 'News' , 'Projects','Team','Locations']}
            activeNavClass="is-active"
            scrollDuration="100">
            <ul className="navbar-nav">
              <li className="nav-item active"><a className="nav-link" href="#Header">الرئيسيه</a></li>
              <li className="nav-item"><a className="nav-link" href="#About">عن الهيئة</a></li>
              <li className="nav-item"><a className="nav-link" href="#Services">الخدمات</a></li>
              <li className="nav-item"><a className="nav-link" href="#News">الأخبار</a></li>
              <li className="nav-item"><a className="nav-link" href="#Projects">المشاريع</a></li>
              <li className="nav-item"><a className="nav-link" href="#Team">الهيكل الإداري</a></li>
              <li className="nav-item"><a className="nav-link" href="#Locations">عناوين الفروع</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">اتصل بنا</a></li>
            </ul>
          </ScrollspyNav>
        </div>
      </div>
    </nav>
  )
  }
}

