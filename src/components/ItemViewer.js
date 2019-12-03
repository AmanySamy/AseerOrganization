import React, { Component } from 'react'
import API from './API'
import Global from './Global'



export default class SingleNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SingleResult:[]
        }
    }

    componentDidMount() {
        console.log(this.props.url);
        API.getContent(this.props.url + '?_format=json')
        .then((response) => {
            this.setState({SingleResult: response.data})
            console.log(response.data);
        });
        
    }
    render() {
        const {SingleResult} = this.state
        let ResultElement;
        (SingleResult.length !== 0)
            ? ResultElement = SingleResult.map((R) => 
                <Global.Item 
                id={R.nid[0].value}  
                link={this.props.url} 
                img={R.field_image[0].url} 
                name={R.title[0].value} 
                desc={(R.body[0].value)}
                grid="col-12 item-col item-viewer"/>) 
            : ResultElement = <div>loading ... </div>
        
        let Feature = 
            <div className="container about-features">
                <div className="row">
                    <Global.SingleFeature icon="icofont-money" title="تطوير إقتصادي" desc="عسير تمتلك مقومات كبيرة للاستثمار، وتعمل الهيئة على تقديم التسهيلات للمستثمرين وتذليل جميع العقبات لتحقيق الأهداف التي تحملها جوانب من الخطة الاستراتيجية للمنطقة ضمن الخطة الطموحة للوطن"/>
                    <Global.SingleFeature icon="icofont-tree-alt" title="تطوير بيئي" desc="وصف امير منطقة عسير الامير تركي بن طلال بن عبد العزيز عسير بأم البيئات بين مناطق المملكة لجمعها بين الصحراء والسهل والجبل والبحر واليابسة والغابات والقيعان وقال  كل ذلك دفعنا لجعل البيئة العامرة ركنا من اركان استراتيجية عسير التي سترى النور قريبا "/>
                    <Global.SingleFeature icon="icofont-building-alt" title="تطوير عمراني" desc="اطلقت الهيئة مشروع الكود العمراني الذي يهدف الى خلق منظومة شاملة تبرز هوية المنطقة التي تستلهم تفاصيلها من عمارتها الاصلية وتنوع تضاريسها من خلال تحديد لوائح وتشريعات عمرانية مصحوبة بالية عمل فعالة لضمان نجاح تطبيقاتها لمنع حدوث التلوث البصري حاليا ومستقبلا"/>
                </div>
            </div>
        

        return (
            <section className="Item-viewer p-50">
                {window.location.pathname === "/about" && Feature}
                <div className="container">
                    <div className="row text-right">
                        {ResultElement}                     

                    </div>
                   
                </div>
            </section>
        )
    }
}

