import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Scrollspy from 'react-scrollspy'
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
    let loc = window.location.pathname
  return (
    <nav id="main-navbar" className="navbar navbar-dark navbar-expand-md d-flex flex-row-reverse justify-content-center navigation-clean-search">
      <div className="container">
        <a className="navbar-brand" href="/" style={{width: '150px'}}><img src="/img/logo.jpg" alt="site title" style={{width: '100%', height: '100%'}} /></a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><i className="icofont-navigation-menu"></i></button>
        <div className="collapse navbar-collapse" id="navcol-1"> 
          {/* <ScrollspyNav className = "navbar-nav"
            scrollTargetIds = {["Header","About", "Services", 'News' , 'Projects','Team','Locations']}
            activeNavClass="is-active"
            scrollDuration="100">
            <ul className="navbar-nav"> */}
            <Scrollspy className="nav navbar-nav mr-auto d-flex" items={ ['#About', '#Services', '#News' , '#Projects','#Team'] } currentClassName="is-current">
              <li className="nav-item active"><a className="nav-link" href={loc == "/"?"#Header": "/"}>الرئيسيه</a></li>
              <li className="nav-item"><a className="nav-link" router="HashRouter" href={loc =="/"? "#About" : "/about"}>عن الهيئة</a></li>
              <li className="nav-item"><a className="nav-link" href={loc =="/"? "#Services" : "/"}>الخدمات</a></li>
              <li className="nav-item"><a className="nav-link" href={loc =="/"? "#News" : "/all-news"}>الأخبار</a></li>
              <li className="nav-item"><a className="nav-link" href={loc == "/"?"#Projects" : "/all-projects"}>المشاريع</a></li>
              <li className="nav-item"><a className="nav-link" href={loc == "/"?"#Team" : "/all-members"}>الهيكل الإداري</a></li>
              <li className="nav-item"><a className="nav-link" href={loc == "/"?"#Locations" : "/"}>عناوين الفروع</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">اتصل بنا</a></li>
            </Scrollspy>
            {/* </ul> */}
        </div>
      </div>
    </nav>
  )
  }
}

