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
        API.getContent('/about?_format=json')
        .then((response) => {
            this.setState({Result: response.data})
        });
    }
    
    render() {
        const {Result} = this.state
        let About,image;
        if(Result.length !== 0){
            About = <Global.SectionHeader title={Result[0].title[0].value} desc={`${Result[0].body[0].value.substr(0, 300)} ...`} />
            image = Result[0].field_image[0].url
        }else{
            About = <div>loading</div>
        }

        return (
            <section className="About" id="About">
                <div className="about-features">
                    <div className="row">
                        <Global.SingleFeature icon="icofont-money" title="تطوير إقتصادي" desc="عسير تمتلك مقومات كبيرة للاستثمار، وتعمل الهيئة على تقديم التسهيلات للمستثمرين وتذليل جميع العقبات لتحقيق الأهداف التي تحملها جوانب من الخطة الاستراتيجية للمنطقة ضمن الخطة الطموحة للوطن"/>
                        <Global.SingleFeature icon="icofont-tree-alt" title="تطوير بيئي" desc="وصف امير منطقة عسير الامير تركي بن طلال بن عبد العزيز عسير بأم البيئات بين مناطق المملكة لجمعها بين الصحراء والسهل والجبل والبحر واليابسة والغابات والقيعان وقال  كل ذلك دفعنا لجعل البيئة العامرة ركنا من اركان استراتيجية عسير التي سترى النور قريبا "/>
                        <Global.SingleFeature icon="icofont-building-alt" title="تطوير عمراني" desc="اطلقت الهيئة مشروع الكود العمراني الذي يهدف الى خلق منظومة شاملة تبرز هوية المنطقة التي تستلهم تفاصيلها من عمارتها الاصلية وتنوع تضاريسها من خلال تحديد لوائح وتشريعات عمرانية لضمان نجاح تطبيقاتها لمنع حدوث التلوث البصري حاليا ومستقبلا"/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="about-right col-md-6 text-right">
                            {About}
                            {window.location.pathname === "/" && <Global.ReadMore path='about' title="المزيد عن الهيئة" text="اقرأ المزيد"/>}
                        </div>
                        <div className="about-left col-md-6">
                        <div className="about-img">
                            <div className="about-layer-one">
                                <div className="box-gradient"></div>
                                {/* <img src="img/about/about-bottom-layer.jpg" alt="" /> */}
                            </div>
                            <div className="about-layer-two">
                                <img src={image} alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

