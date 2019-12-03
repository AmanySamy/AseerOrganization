import React, { Component } from 'react'
import {Animated} from "react-animated-css";

import './Header.scss'

export default class Header extends Component {
    render() {
        return (
          <header className="header-dark" id="Header">
            
            {/*== Header Background ==*/}
            <div id="header-background" className="header-background maxheader loaded">
                {/* <!-- The video --> */}
                <video autoPlay muted loop id="myVideo">
                    <source src="/img/aseer.mp4" type="video/mp4" />
                </video>           
            </div>
            <div className="hero w-100" >
                <div className="text-center welcome-text ">
                  <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <h1 className="welcom-title" >الهيئة العليا لتطوير منطقة عسير</h1>
                  </Animated>
                  <p className="welcom-desc">هيئة حكومية تأسست بأمر ملكي في عام 2018، يترأس مجلس إدارتها أمير منطقة عسير، وتهدف إلى تطوير المنطقة والمدن التابعة لها بالمملكة العربية السعودية، من كافة الجوانب .</p>
                </div>
            </div>
          </header>
        )
    }
}
