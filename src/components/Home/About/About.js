import React, { Component } from 'react'
import API from '../API'
import Global from '../Global'
import './About.scss'


export default class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Result:[]
        }
    }
    componentDidMount(){
        API.getContent('/about?_format=json')
        .then((response) => {
            this.setState({Result: response.data})
        });
    }
    
    render() {
        const {Result} = this.state
        let About;
        if(Result != ''){
            About = <Global.SectionHeader title={Result[0].title[0].value} desc={Result[0].body[0].value} />
        }else{
            About = <div>loading</div>
        }

        return (
            <section className="About" id="About">
                <div className="container">
                    <div className="row">
                        <div className="about-right col-md-6 text-right">
                            {About}
                            {window.location.pathname === "/" && <Global.ReadMore path='about' title="view Organization" text="About Organization"/>}
                        </div>
                        <div className="about-left col-md-6">
                            <div className="about-img">
                                <div className="box"></div>
                                <img className="img-fluid" src="img/img8.jpeg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
