import React, { Component } from 'react'
import Global from '../Global'
import API from '../API'
import './Team.scss';

export default class Team extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Result:[]
        }
    }
    componentDidMount(){
        API.getContent('/organizational-structure?_format=json')
        .then((response) => {
            this.setState({Result: response.data})
        });
    }
    render() {
        const {Result} = this.state
        let ResultElement,ResultItems;
        if(window.location.pathname === "/"){
            ResultItems = Result.slice(0, 3);
        } else if(window.location.pathname === "/all-members"){
            // let team = document.getElementById('team')
            // team.classList.add("amany");
      
            ResultItems = Result
        }
        (ResultItems.length !== 0)
            ? ResultElement = ResultItems.map((R,index) => 
            <Global.Item 
            key={index}
            id={R.nid[0].value} 
            link={`member/${R.nid[0].value}`} 
            img={R.field_image[0].url} 
            name={R.title[0].value} 
            subTitle={R.field_position[0].value.substr(0, 40)} 
            desc={(R.body[0].value).substr(0, 100)+" ..."}
            grid="item-col col-sm-6 col-lg-4 "/>) 
            : ResultElement = <div>loading ... </div>
        

        return (
            <section className="Team p-50 bg-section text-center" id="team" ref="TeamSection">
                <div className="container">
                    <Global.SectionHeader className="text-center" title="الهيكل <span>الأداري</span>" desc="ستمارس الهيئة سلطتها عبر عدد من محاور العمل الرامية إلى تحقيق هدفها في التطوير الشامل، ويتوقع وفق الهيئات القائمة أن تتضمن مهام الهيئة" />
                    <div className="row">
                        {ResultElement}                        
                    </div>
                    { window.location.pathname === "/" && <Global.ReadMore path='all-members' title="رؤية جميع الأعضاء" text="كل الأعضاء"/>}
                </div>
            </section>
        )
    }
}
