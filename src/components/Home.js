import React, { Component } from 'react'
import './Home.scss'

import About from './About/About'
import Services from './Services/Services'
import Team from './Team/Team'
import Projects from './Projects/Projects'
import News from './News/News'
// import Contact from './Contact/Contact'
import Location from './Contact/Location'

export default class Home extends Component {
    render() {
        return (
            <div className="Home">               
                <About />
                <Services />
                <News />
                <Projects />
                <Team />
                <Location />
            </div>
        )
    }
}
