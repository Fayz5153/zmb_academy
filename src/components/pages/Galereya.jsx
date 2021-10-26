import React, { Component } from 'react';
import { ZMB } from '../context/context';

// image import
import galereya from "../icons/galereya.png"
import foto1 from "../icons/foto1.png"
import foto2 from "../icons/foto2.png"

class Galereya extends Component {
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
                                <div className="main_asos">
                                    <div 
                                        className="nav_title"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                        style={{
                                            background:`linear-gradient(125.91deg, rgba(9, 235, 223, 0.72) -27.75%, rgba(12, 24, 39, 0.72) 32%), url(${galereya}), #C4C4C4`,
                                            backgroundPosition: "center",
                                            backgroundSize:"cover"
                                        }}
                                    >
                                        <div className="title">
                                            <h1>
                                                <span>Фотогаллерея</span> ZMB
                                            </h1>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                Как одниз самых престижных частных школ в Андижане, поэтому подход к образованию целостный и успех детей наш главный приоритет
                                            </h2>
                                        </div>
                                    </div>
                                    
                                    <div className="galereya">
                                        <div data-aos="fade-up" data-aos-duration="1500"><img src={foto1} alt="" /><h1>Учеба и правила награждения</h1></div>
                                        <div data-aos="fade-up" data-aos-duration="1500"><img src={foto2} alt="" /><h1>Учеба и правила награждения</h1></div>
                                        <div data-aos="fade-up" data-aos-duration="1500"><img src={foto1} alt="" /><h1>Учеба и правила награждения</h1></div>
                                        <div data-aos="fade-up" data-aos-duration="1500"><img src={foto2} alt="" /><h1>Учеба и правила награждения</h1></div>
                                        <div data-aos="fade-up" data-aos-duration="1500"><img src={foto1} alt="" /><h1>Учеба и правила награждения</h1></div>
                                        <div data-aos="fade-up" data-aos-duration="1500"><img src={foto2} alt="" /><h1>Учеба и правила награждения</h1></div>
                                        <div data-aos="fade-up" data-aos-duration="1500"><img src={foto1} alt="" /><h1>Учеба и правила награждения</h1></div>
                                        <div data-aos="fade-up" data-aos-duration="1500"><img src={foto2} alt="" /><h1>Учеба и правила награждения</h1></div>
                                        <div data-aos="fade-up" data-aos-duration="1500"><img src={foto1} alt="" /><h1>Учеба и правила награждения</h1></div>
                                        <div data-aos="fade-up" data-aos-duration="1500"><img src={foto2} alt="" /><h1>Учеба и правила награждения</h1></div>
                                        <div data-aos="fade-up" data-aos-duration="1500"><img src={foto1} alt="" /><h1>Учеба и правила награждения</h1></div>
                                        <div data-aos="fade-up" data-aos-duration="1500"><img src={foto2} alt="" /><h1>Учеба и правила награждения</h1></div>
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
 
export default Galereya;