import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Global extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ar : {
                AboutHeader:"عن الهيئة",
                More:"اقرأ المزيد"
            },
            en : {
                AboutHeader:"About Header",
                More:"About Organization"
            }
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
    SectionHeader = (props) => {
        return (
            <div className="row">
                <div className="col-12 section-header">
                    <h3 className="section-title" dangerouslySetInnerHTML={{ __html: props.title}}></h3>
                    <p className="section-desc" dangerouslySetInnerHTML= {{ __html: props.desc}} ></p>
                </div>
            </div>
        )
    }
    ReadMore = (props) => {
        return(
            <div className="row">
            <div className="col-12">
                <div className="button button-icon"><NavLink className="more" to={props.path} title={props.title}>{props.text}</NavLink></div>
            </div>
        </div>
        )
    }
    Item = (props) => {
        return (
            <div className={props.grid}>
                <div className="item">
                    <h3 className="name"> 
                        <NavLink exact={true} id={props.id}  to={props.link}>{props.name}</NavLink>
                    </h3>
                    <div className="item-img">
                        <img src={`${props.img}`} className="img-fluid" alt={props.name} />
                    </div>
                    {props.subTitle !== '' && <h4 className="sub-title"  dangerouslySetInnerHTML={{__html:props.subTitle}}></h4> }
                    <p className="description" dangerouslySetInnerHTML={{__html:props.desc}}></p>
                </div>
            </div>
        )
    }
    ProjectItem = (props) => {
        return (
            <div className="col-sm-6 col-lg-4 item-col">
                <div className="item">
                    <div className="item-img">
                        <img src={`${props.img}`} className="img-fluid" alt={props.name} />
                    </div>
                    <h3 className="name"> 
                        <NavLink exact={true} id={props.id} to={props.link}>{props.name}</NavLink>
                    </h3>
                    {props.subTitle !== '' && <h4 className="sub-title">{props.subTitle} </h4> }
                    <p className="description">{props.desc}</p>
                    {/* <NavLink className="read-more" exact={true} id={props.id}  to={props.link}>أقرأ المزيد</NavLink> */}
                </div>
            </div>
        )
    }
    NewsItem = (props) => {
        return (
            <div className="col-sm-6 col-lg-3 item-col">
                <div className="single-blog wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
                    <div className="post-thumb">
                        <img src={`${props.img}`} className="img-fluid" alt={props.name} />
                    </div>
                    <div className="post-details">
                    <div className="post-meta">
                    <p><a href="#"><i className="icofont icofont-user-alt-3" /> By Admin</a><a href="#"><i className="icofont icofont-calendar" /> {props.date}</a></p>
                    </div>
                    <h3>
                        <NavLink exact={true} id={props.id}  to={props.link}>{props.name}</NavLink>
                    </h3>
                    <p className="description" dangerouslySetInnerHTML={{__html:props.desc}}></p>
                    {/* <a href="#" className="read-more"><NavLink exact={true} id={props.id}  to={props.link}>للمزيد</NavLink> <i className="icofont icofont-long-arrow-right" /></a> */}
                    </div>
            </div>
            </div>
        )
    }

}
export default (new Global())
