import React, { Component } from 'react';
import axios from 'axios';
import { ZMB } from '../context/context';
import CircularProgress from '@material-ui/core/CircularProgress';

// Image import
import vector from "../icons/Vector.svg";

class Qabul extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            banner:[],
         }
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }
    componentDidMount() {
        axios.get("http://URL/acceptance/")
        .then((res) => {
            setTimeout(() => {
                const data = res.data;
                this.setState({ data: data });
            }, 500);
        });
        axios.get("http://URL/main-description/")
        .then((res) => {
            setTimeout(() => {
                const banner = res.data;
                this.setState({ banner: banner });
            }, 500);
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
                                    {this.state.banner.length === 0 ?
                                        <div className="circule"><CircularProgress /></div> :
                                        
                                        <div 
                                            className="nav_title"
                                            style={{
                                                background:`linear-gradient(150deg, rgba(9, 235, 223, 0.4) -37.75%, rgba(12, 24, 39, 0.4) 22%), url(${this.state.banner[0].img}), #C4C4C4`,
                                                backgroundPosition: "center",
                                                backgroundSize:"cover"
                                            }}
                                        >
                                            <div className="title">
                                                <h1>
                                                    {
                                                        x.til === "uz" ? this.state.banner[0].title
                                                        : x.til === "ru" ? this.state.banner[0].title_ru
                                                        : this.state.banner[0].title_en
                                                    }
                                                </h1>
                                            </div>
                                            <div className="title">
                                                <h2>
                                                    {
                                                        x.til === "uz" ? this.state.banner[0].description
                                                        : x.til === "ru" ? this.state.banner[0].description_ru
                                                        : this.state.banner[0].description_en
                                                    }
                                                </h2>
                                            </div>
                                        </div>
                                    }
                                    
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
                                        </div>
                                        <div className="covid_19">
                                            {this.state.data.map ((data)=>{
                                                return(
                                                    <div className="covid" key={data.id.toString()}>
                                                        <div className="covid_main">
                                                            <div data-aos="fade-up">
                                                                <img src={data.image} alt="" />
                                                            </div>
                                                            <div data-aos="fade-up">
                                                                <p>
                                                                {
                                                                    x.til === "uz" ? data.text
                                                                    : x.til === "ru" ? data.text_ru
                                                                    : data.text_en
                                                                }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
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