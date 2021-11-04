import React, { Component } from 'react';
import { ZMB } from '../context/context';
import vector from "../icons/Vector.svg"

// Image import
import covid from "../icons/covid.jpg";
import covid_1 from "../icons/covid_1.svg";
import covid_2 from "../icons/covid_2.svg";
import covid_3 from "../icons/covid_3.svg";
import covid_4 from "../icons/covid_4.svg";

class Covid_19 extends Component {
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
                                            background:`linear-gradient(150deg, rgba(9, 235, 223, 0.4) -37.75%, rgba(12, 24, 39, 0.4) 22%), url(${covid}), #C4C4C4`,
                                            backgroundPosition: "center",
                                            backgroundSize:"cover"
                                        }}
                                    >
                                        <div className="title">
                                            <h1>
                                                <span>{x.TIL().N7}</span>
                                            </h1>
                                        </div>
                                        <div className="title">
                                            {/* <h2></h2> */}
                                        </div>
                                        {/* <div className="title">
                                            <Link onClick={this.scrollTop} to="/galereya">{x.TIL().GALEREYA}</Link>
                                            <a onClick={this.scrollTop} href="/">{x.TIL().CONTACT_US}</a>
                                        </div> */}
                                    </div>

                                    <div 
                                        className="single_title"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        <h1>{x.TIL().COVID}</h1>
                                        <img src={vector} alt="" />
                                    </div>

                                    <div className="covid_19">

                                        <div className="covid">
                                            <h1>{x.TIL().COVID_1}</h1>
                                            <div className="covid_main">
                                                <div data-aos="fade-up">
                                                    <h2>{x.TIL().COVID_1_1}</h2>
                                                    <p>{x.TIL().COVID_1_2}</p>
                                                </div>
                                                <div data-aos="fade-up">
                                                    <img src={covid_1} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="covid">
                                            <div className="covid_main">
                                                <div data-aos="fade-up">
                                                    <h2>{x.TIL().COVID_2_1}</h2>
                                                    {x.TIL().COVID_2_2}
                                                </div>
                                                <div data-aos="fade-up">
                                                    <img src={covid_2} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="covid">
                                            <h1>{x.TIL().COVID_3}</h1>
                                            <div className="covid_main">
                                                <div data-aos="fade-up">
                                                    <h2>{x.TIL().COVID_3_1}</h2>
                                                    {x.TIL().COVID_3_2}
                                                </div>
                                                <div data-aos="fade-up">
                                                    <img src={covid_3} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="covid">
                                            <div className="covid_main">
                                                <div data-aos="fade-up">
                                                    <h2>{x.TIL().COVID_4_1}</h2>
                                                    <p>{x.TIL().COVID_4_2}</p>
                                                </div>
                                                <div data-aos="fade-up">
                                                    <img src={covid_4} alt="" />
                                                </div>
                                            </div>
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
 
export default Covid_19;