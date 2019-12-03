import React, { Component } from 'react'
import './Projects.scss';
import API from '../API'
import Global from '../Global'

export default class Projects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Result:[]
        }
    }
    componentDidMount(){
        API.getContent('/achievements?_format=json')
        .then((response) => {
            this.setState({Result: response.data})
        });
    }
    render() {
        const {Result} = this.state
        let ResultElement,ResultItems;
        if(window.location.pathname === "/"){
            ResultItems = Result.slice(0, 3 );
        } else if(window.location.pathname === "/all-projects"){
            ResultItems = Result
        }
        console.log(ResultItems)
        if(ResultItems.length !== 0){
            ResultElement = ResultItems.map((R,index) => 
                <Global.ProjectItem 
                key={index}
                id={R.nid[0].value} 
                link={`project/${R.nid[0].value}`} 
                img={R.field_image[0].url} 
                name={R.title[0].value} 
                desc={(R.body[0].value).substr(0, 100)}>
                </Global.ProjectItem>
            ) 
        }else{ 
            ResultElement = <div>loading ... </div>
        }
        

        return (
            <section className="projects p-50" id="Projects">
                <div className="container">
                    <Global.SectionHeader className="text-center" title="إنجازات<span> الهيئة</span>" desc="ستمارس الهيئة سلطتها عبر عدد من محاور العمل الرامية إلى تحقيق هدفها في التطوير الشامل، ويتوقع وفق الهيئات القائمة أن تتضمن مهام الهيئة" />
                    <div className="row text-right">
                        {ResultElement}                      
                   </div>
                   { window.location.pathname === "/" && <Global.ReadMore path='all-projects' title="رؤية جميع المشاريع" text="كل المشاريع"/>}
                </div>
            </section>
        )
    }
}
