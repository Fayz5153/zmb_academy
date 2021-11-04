import React, { Component } from 'react';
import { ZMB } from '../context/context';

// Image import
import vector from "../icons/Vector.svg";
import backgraund from "../navbar/icons/backgraund.svg";

class Qabul extends Component {
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
                                                <span>Приемная комиссия </span> в ZMB 
                                            </h1>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                Приемная комиссия в ZMB состоит из высококвалифицированных специалистов в сфере преподования
                                            </h2>
                                        </div>
                                    </div>
                                    
                                    <div className="main2 qabul_1">
                                        <div 
                                            className="main_title"
                                            data-aos="fade-up"
                                            data-aos-duration="1500"
                                        >
                                            <div className="vector">
                                                <h1>{x.TIL().PROTSES}</h1>
                                                <img src={vector} alt="" />
                                            </div>
                                            <h2>Поступление в нашу школу осуществляется тремя простыми шагами, при каждом шаге наши специалисты готовы помочб вам</h2>
                                        </div>
                                        <div className="protses">
                                            <div><h1>1.</h1>{x.TIL().PR1}</div>
                                            <div><h1>2.</h1>{x.TIL().PR2}</div>
                                            <div><h1>3.</h1>{x.TIL().PR3}</div>
                                            {/* <div 
                                                className="protses_1"
                                                data-aos="fade-up"
                                                data-aos-delay="50"
                                                data-aos-duration="1000">
                                                <div><h1>1</h1></div>
                                                <div>{x.TIL().PR1}</div>
                                            </div>
                                            <div 
                                                className="protses_1"
                                                data-aos="fade-up"
                                                data-aos-delay="60"
                                                data-aos-duration="1500"
                                            >
                                                <div><h1>2</h1></div>
                                                <div>{x.TIL().PR2}</div>
                                            </div>
                                            <div 
                                                className="protses_1"
                                                data-aos="fade-up"
                                                data-aos-delay="70"
                                                data-aos-duration="2000"
                                            >
                                                <div><h1>3</h1></div>
                                                <div>
                                                    <p>{x.TIL().PR3}</p>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    }}
                </ZMB.Consumer> 
                
            </React.Fragment>
         );
    }
}
 
export default Qabul;