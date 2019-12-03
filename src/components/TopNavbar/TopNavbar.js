import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import './TopNavbar.scss'

export default class TopNavbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            lang:[]
        }
    }
    
    handleSelectChange(event){
        const { options, selectedIndex } = event.target;
        localStorage.setItem(event.target.name,options[selectedIndex].getAttribute("value"))
              
    }
    render() {
        return (
            <nav className="navbar navigation-clean-search" style={{color: '#faab16',width: '85%', margin: 'auto', padding: '10px 0px'}}>
                <div className="container">
                    <div className="row w-100">
                        <div className="col-sm-6 d-flex">
                            <div className="mail">
                                <i className="fa fa-envelope"></i>
                                <span>mail@mail.com</span>
                            </div>
                            <div className="phone">
                                <i className="fa fa-phone"></i>
                                <span>011011552310</span>
                            </div>
                        </div>
                        <div className="col-sm-6 d-flex" id="navcol-1" style={{margin: 'auto'}}>
                            <form target="_self" className="form-inline mr-auto" style={{margin: '0px', width: 'max-content'}}>
                                <div className="form-group" style={{backgroundColor: '#4d5448'}}><label htmlFor="search-field"><i className="fa fa-search" /></label><input type="search" name="search" className="form-control search-field" id="search-field" /></div>
                            </form>
                            <ul className="nav navbar-nav d-flex flex-row" style={{padding: '0px'}}>
                                
                                
                            </ul>
                            {/* <select name="lang" class="selectpicker" data-width="fit"  onChange={this.handleSelectChange}>
                                <option value="ar"  data-content='<NavLink to="/ar" className="nav-link active">عربي</NavLink>'>ar</option>
                                <option value="en" data-content='<NavLink to="/en" className="nav-link">ُEnglish</NavLink>'></option>
                            </select> */}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
