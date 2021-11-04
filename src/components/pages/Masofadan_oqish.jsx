import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ZMB } from '../context/context';

// image import
import backgraund from "../navbar/icons/backgraund.svg"

class Masofadan_oqish extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }
    render() { 
        return ( 
            <React.Fragment>
                <ZMB.Consumer>
                    {(x)=>{
                        return(
                            <React.Fragment>
                                <div className="main_asos" onClick={x.searchClose}>
                                    <div 
                                        className="nav_title"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                        style={{
                                            background:`linear-gradient(150deg, rgba(9, 235, 223, 0.4) -37.75%, rgba(12, 24, 39, 0.4) 22%), url(${backgraund}), #C4C4C4`,
                                            backgroundPosition: "center",
                                            backgroundSize:"cover"
                                        }}
                                    >
                                        <div className="title">
                                            <h1>
                                                <span>ZMB</span> - место где вашему ребёнку понравится
                                            </h1>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации
                                            </h2>
                                        </div>
                                    </div>
                                    {/* //////////// */}
                                    <h1>masofaldan oqish</h1>
                                </div>
                            </React.Fragment>
                        )
                    }}
                </ZMB.Consumer> 
                
            </React.Fragment>
         );
    }
}
 
export default Masofadan_oqish;