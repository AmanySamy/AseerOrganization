import React, { Component } from 'react'
import Global from '../Global'
import API from '../../API'
import './Team.scss';

export default class Team extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Result:[],
            SingleResult:[],
        }
    }
    componentDidMount(){
        API.getContent('/organizational-structure?_format=json')
        .then((response) => {
            this.setState({Result: response.data})
        });
        API.getContent('/organizational-structure/'+ this.props.id + '?_format=json')
        .then((response) => {
            this.setState({SingleResult: response.data})
        });
    }
    render() {
        const {Result,SingleResult} = this.state
        let ResultElement,ResultItems;
        if(window.location.pathname === "/"){
            ResultItems = Result.slice(0, 4);
        } else if(window.location.pathname === "/all-members"){
            ResultItems = Result
        } else if(window.location.pathname === "/member"){
            ResultItems = SingleResult
        }
        (Result != '')
            ? ResultElement = ResultItems.map((R) => <Global.Item link={`member/${R.nid[0].value}`} img={R.field_organizational_image[0].url} name={R.title[0].value} subTitle={R.field_position[0].value.substr(0, 15)} desc={(R.field_about[0].value).substr(0, 100)}/>) 
            : ResultElement = <div>loading ... </div>
        

        return (
            <section className="Team p-50 text-center" id="Team">
                <div className="container">
                    <Global.SectionHeader className="text-center" title="الهيكل الأداري" desc="ستمارس الهيئة سلطتها عبر عدد من محاور العمل الرامية إلى تحقيق هدفها في التطوير الشامل، ويتوقع وفق الهيئات القائمة أن تتضمن مهام الهيئة" />
                    <div className="row">
                        {ResultElement}                        
                    </div>
                    { window.location.pathname === "/" && <Global.ReadMore path='all-members' title="view All Member" text="All Member"/>}
                </div>
            </section>
        )
    }
}
