import React, { Component } from 'react'
import './News.scss';
import API from '../API'
import Global from '../Global'

export default class SingleNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SingleResult:[]
        }
    }

    componentDidMount() {
        console.log(this.props.id);
        API.getContent('/news/'+ this.props.id + '?_format=json')
        .then((response) => {
            this.setState({SingleResult: response.data})
            console.log(response.data);
        });
        
    }
    render() {
        const {SingleResult} = this.state
        let ResultElement;
        (SingleResult.length !== 0)
            ? ResultElement = SingleResult.map((R) => <Global.Item id={R.nid[0].value}  link={`news/${R.nid[0].value}`} img={R.field_image[0].url} name={R.title[0].value} desc={(R.body[0].value).substr(0, 100)}/>) 
            : ResultElement = <div>loading ... </div>
        

        return (
            <section className="news p-50" id="News">
                <div className="container">
                    <div className="row text-right">
                        {ResultElement}                      
                    </div>
                   
                </div>
            </section>
        )
    }
}

