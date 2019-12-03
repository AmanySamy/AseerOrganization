import React, { Component } from 'react'
import axios from 'axios';
import './Contact.scss'

export default class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selectedFile: null,
            isSubmitted:false,
            fileName:'',
            userName:'',
            userEmail:'',
            messageTitle:'',
            messageBody:'',
            fileID:'',
        }
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name]: [{ "value": event.target.value }],       
        });
        console.log(event.target.name,'-->',event.target.value )
    }
    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            fileName: event.target.files[0].name,
            loaded: 0,
        })     
    }
    // onClickHandler = () => {
    //     let file = this.state.selectedFile;
    //     let filename = this.state.fileName;
    //     var reader = new FileReader();
    //     reader.readAsArrayBuffer(file);
    //     reader.onload = () => {
    //         const arrayStr = reader.result;
    //         axios.post('http://asda.codabella.net/ar/file/upload/node/user_feedback/field_attachments?_format=json',
    //             arrayStr
    //             , {
    //                 headers: {
    //                     "Content-Type": "application/octet-stream",
    //                     "Accept": "application/vnd.api+json",
    
    //                     "Content-Disposition": 'file; filename="' + filename + '"',

    //                 }
    //             }
    //         )
    //         .then((response) => {
    //             console.log(response);
    //             this.setState({
    //                 fileID: [{ "target_id":response.data.fid[0].value }],       
    //             });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         }.bind(this));
    //     }
    // }
    submitLogin = (event)=>{
        event.preventDefault();
        const{userEmail,userName,messageBody,messageTitle,selectedFile,fileName} = this.state
        console.log(userName,this.state.userName);  
        var reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = () => {
            const arrayStr = reader.result;
            const url = 'http://asda.codabella.net/ar/file/upload/node/user_feedback/field_attachments?_format=json';
            const headerObj = {
                "Content-Type": "application/octet-stream",
                "Accept": "application/vnd.api+json",
                "Content-Disposition": 'file; filename="' + fileName + '"',
            }
            axios.post(url, arrayStr,{'headers': headerObj}).then((response) => {
                let contactBody = {           
                    "title": messageTitle,
                    "field_name": userName,
                    "field_email": userEmail,
                    "body": messageBody,
                    "field_attachments": [{ "target_id":response.data.fid[0].value }],
                    "type": [
                        {
                            "target_id": "user_feedback"
                        }
                    ],
                }
                const msgUrl='http://asda.codabella.net/node?_format=json'
                const h={
                    headers: {
                        "Content-Type": "application/json",
                        }
                    }
                axios.post(msgUrl,contactBody,h).then((response) => {
                    console.log(response);
                    this.setState({
                        isSubmitted:true
                    })
        
                })
                .catch(function (error) {
                    console.log(error);
                }.bind(this));
            })
            .catch(function (error) {
                console.log(error);
            }.bind(this));
        }
        
        
    }
    render() {
        const{isSubmitted}=this.state
        return (
            <section className="Contact p-50" id="Contact">
                <div className="contact-form">
                    <div className="row">
                        <div className="col-12 col-form">
                            <form method="" className="Login">
                                <h2 className="stepTitle">تواصل معنا</h2>
                                <div className="form-row">
                                    <input onChange={this.handleChange} placeholder={`ادخل الأسم *`} className="mobile-number" type="text" name="userName" />
                                </div>                   
                                <div className="form-row">
                                    <input onChange={this.handleChange} placeholder="ادخل البريد الألكتروني *" className="mobile-number" type="text" name="userEmail" />
                                </div>                   
                                <div className="form-row">
                                    <input onChange={this.handleChange} placeholder="عنوان الرسالة *" className="" type="text" name="messageTitle" />
                                    <textarea onChange={this.handleChange} name="message" id="" cols="30" rows="6" placeholder="اكتب رسالتك *" name="messageBody"></textarea>
                                </div>
                                <div className="form-row">
                                    <input type="file" name="file" placeholder="عنوان الرسالة *" onChange={this.onChangeHandler}/>
                                    {/* <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>اضف مستند</button> */}
                                </div>
                                <button onClick={this.submitLogin}>ارسل</button>
                                {isSubmitted &&  <p className="text-center success-message">تم إرسال رسالتك بنجاح <i class="icofont-like"></i></p>}
                            </form>
                           
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }
}
