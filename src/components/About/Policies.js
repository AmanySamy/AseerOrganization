import React, { Component } from 'react'
import API from '../API'
import Global from '../Global'

export default class Policies extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            Result:[]
        }
    }
    SingleFeature = (props)=>{
        return(
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                <div className="single-features">
                    <div className="features-icon"><i className={`icofont ${props.icon}`} /></div>
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                    <a href="/about" className="read-more">للمزيد <i className="icofont icofont-long-arrow-left" /></a>
                </div>
            </div>
        )
    }
    componentDidMount(){
        API.getContent('/policies?_format=json')
        .then((response) => {
            this.setState({Result: response.data})
        });
    }
    
    render() {
        const {Result} = this.state
        let About,image;
        if(Result.length !== 0){
            About = <Global.SectionHeader title={Result[0].title[0].value} desc={Result[0].body[0].value} />
            // image = Result[0].field_image[0].url
        }else{
            About = <div>loading</div>
        }

        return (
            <section className="About p-50" id="About">
                <div className="container">
                    <div className="row">
                        {About}
                    </div>
                </div>
            </section>
        )
    }
}
