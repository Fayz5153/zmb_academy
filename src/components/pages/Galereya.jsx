import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ZMB } from '../context/context';

// image import
import galereya from "../icons/galereya.png"

class Galereya extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }
    componentDidMount() {
        axios.get("http://zmbacademy.uz:8080/parties/")
        .then((res) => {
            const data = res.data;
            this.setState({ data: data });
        });
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
                                            background:`linear-gradient(125.91deg, rgba(9, 235, 223, 0.72) -27.75%, rgba(12, 24, 39, 0.72) 32%), url(${galereya}), #C4C4C4`,
                                            backgroundPosition: "center",
                                            backgroundSize:"cover"
                                        }}
                                    >
                                        <div className="title">
                                            <h1>
                                                <span>{x.TIL().GALEREYA}</span> ZMB
                                            </h1>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                Как одниз самых престижных частных школ в Андижане, поэтому подход к образованию целостный и успех детей наш главный приоритет
                                            </h2>
                                        </div>
                                    </div>
                                    
                                    <div className="galereya">
                                        {this.state.data.map((m)=>{
                                            return(
                                                <Link to={`/galereya${m.id}`}>
                                                    <div data-aos="fade-up" data-aos-duration="1500" className="img_hover">
                                                        <img src={m.image} alt="" />
                                                        <h1>
                                                            {x.til === "uz" ? m.name
                                                            : x.til === "ru" ? m.name_ru
                                                            : m.name_en}
                                                        </h1>
                                                        <div>
                                                            <p>
                                                                {x.til === "uz" ? m.description.substring(0, 40)
                                                                : x.til === "ru" ? m.description_ru.substring(0, 40)
                                                                : m.description_en.substring(0, 40)}
                                                                {m.description.length > 40 ? "..." : ""}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })}
                                        {/* <div data-aos="fade-up" data-aos-duration="1500"><img src={foto1} alt="" /><h1>Учеба и правила награждения</h1></div>
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
                                        <div data-aos="fade-up" data-aos-duration="1500"><img src={foto2} alt="" /><h1>Учеба и правила награждения</h1></div> */}
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