import React, { Component } from 'react'
import Moment from 'react-moment';
import './News.scss';
import API from '../API'
import Global from '../Global'

export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Result:[]
        }
    }
    componentDidMount(){
        API.getContent('/news?_format=json')
        .then((response) => {
            this.setState({Result: response.data})
        });      
    }
    //YYYY-MM-DDTHH:MM:SS
    render() {
        const {Result} = this.state
        let ResultElement,ResultItems,start_date;
        if(window.location.pathname === "/"){
            ResultItems = Result.slice(0, 4);
        } else if(window.location.pathname === "/all-news"){
            ResultItems = Result       
        } 
        if(ResultItems.length !== 0){console.log(ResultItems[0].created[0].value.split("+")[0])}
        (ResultItems.length !== 0)
            ? ResultElement = ResultItems.map((R,index) => 
                
                <Global.NewsItem 
                key={index}
                id={R.nid[0].value}  
                link={`news/${R.nid[0].value}`} 
                img={R.field_image[0].url} 
                name={R.title[0].value} 
                desc={(R.body[0].value).substr(0, 100)} 
                date={<Moment parse="YYYY-M-D\TH:i:s" format="YYYY MMM DD">R.created[0].value.split("+")[0]</Moment>}/>
            ) 
            : ResultElement = <div>loading ... </div>
        

        return (
            <section className="news p-50" id="News">
                <div className="container">
                    <Global.SectionHeader className="text-center" title="أخبار<span> الهيئة</span>" desc="ستمارس الهيئة سلطتها عبر عدد من محاور العمل الرامية إلى تحقيق هدفها في التطوير الشامل، ويتوقع وفق الهيئات القائمة أن تتضمن مهام الهيئة" />
                    <div className="row text-right">
                        {ResultElement}                      
                    </div>
                   { window.location.pathname === "/" && <Global.ReadMore path='all-news' title="مشاهدة كل الاخبار " text="كل الأخبار"/>}
                </div>
            </section>
        )
    }
}
