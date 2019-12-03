import React, { Component } from 'react'

export default class Location extends Component {
    render() {
        return (
            <section className="" id="Locations">
                    <div className="row" style={{height:'100%'}}>
                        <div className="map w-100">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.8733789985786!2d42.4983144147851!3d18.215741583180172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e3547737646195%3A0x5e9f98a02ff4294!2sEmirate%20of%20Aseer%20Province!5e0!3m2!1sen!2seg!4v1574924836516!5m2!1sen!2seg" width={'100%'} height={'100%'} frameBorder={0} style={{border: 0}} allowFullScreen />
                        </div>
                        {/* <img src="/img/contact.jpeg" alt=""/> */}
                        <div className="contact-info">
                            <div className="Address">
                                <ul className="list-unstyled text-center">
                                    <li className="list-item"><i className="icofont icofont-google-map" />1234 Street Name City, AA 99999</li>
                                    <li className="list-item"><i className="icofont icofont-twitter" />AseerAuthority@twitter.com</li>
                                    <li className="list-item"><i className="icofont icofont-google-plus" />AseerAuthority@gmail.com</li>
                                    <li className="list-item"><i className="icofont icofont-phone" />+1 (0) 000 0000 001</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
            </section>
        )
    }
}
