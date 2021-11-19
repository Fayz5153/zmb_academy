import React, { Component } from 'react';
import { ZMB } from '../context/context';
import CircularProgress from '@material-ui/core/CircularProgress';


// Image import
import axios from 'axios';
import vector from "../icons/Vector.svg";
import backgraund from "../navbar/icons/backgraund.svg";
import arrow1 from "../icons/Arrow1.svg";
import arrow2 from "../icons/Arrow2.svg";
import zmb from "../icons/zmb.jpg";
import play from "../icons/play.png";
import ReactPlayer from 'react-player'

class Maktab extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mission:[],
            who:[]
        }
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }
    componentDidMount() {
        axios.get("http://zmbacademy.uz:8080/our-mission/")
        .then((res) => {
            const mission = res.data;
            this.setState({ mission: mission });
        });
        axios.get("http://zmbacademy.uz:8080/who-are-we/")
        .then((res) => {
            setTimeout(() => {
                const who = res.data;
                this.setState({ who: who });
                console.log(this.state.who, "aaaaaaaa")
            }, 1000);
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
                                            background:`linear-gradient(150deg, rgba(9, 235, 223, 0.4) -37.75%, rgba(12, 24, 39, 0.4) 22%), url(${backgraund}), #C4C4C4`,
                                            backgroundPosition: "center",
                                            backgroundSize:"cover"
                                        }}
                                    >
                                        <div className="title">
                                            <h1>
                                                <span>Наши </span> дети заслуживают качественное образование
                                            </h1>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                Мы в ZMB верим в то, что каждый человек имеет прирожденное право к познанию окружаещего мира
                                            </h2>
                                        </div>
                                    </div>

                                    <div 
                                        className="main2"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        <div className="main_title">
                                            <div className="vector">
                                                <h1>{x.TIL().NASHA_MISSIYA}</h1>
                                                <img src={vector} alt="" />
                                            </div>
                                            <div className="stars2">
                                                {
                                                    this.state.mission.length === 0 ? "" 
                                                    :
                                                    <h3>
                                                        {
                                                            x.til === "uz" ? this.state.mission[0].title
                                                            : x.til === "ru" ? this.state.mission[0].title_ru
                                                            : this.state.mission[0].title_en
                                                        }
                                                    </h3>
                                                }    
                                            </div>
                                        </div>
                                        <div className="main2_box">
                                            <div>
                                                {
                                                    this.state.mission.length === 0 ? "" 
                                                    :
                                                    <h1 className="off_768px">
                                                        {
                                                            x.til === "uz" ? this.state.mission[0].description
                                                            : x.til === "ru" ? this.state.mission[0].description_ru
                                                            : this.state.mission[0].description_en
                                                        }
                                                    </h1>
                                                } 
                                                {
                                                    this.state.mission.length === 0 ? "" 
                                                    :
                                                    <h2>
                                                        {
                                                            x.til === "uz" ? this.state.mission[0].name
                                                            : x.til === "ru" ? this.state.mission[0].name_ru
                                                            : this.state.mission[0].name_en
                                                        }
                                                    </h2>
                                                } 
                                                {/* <h1>“Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации”</h1>
                                                <h2>Нилюфар Анвар, генеральный директор ZMB</h2> */}
                                            </div>
                                            <div>
                                                <img src={this.state.mission.length === 0 ? "" : this.state.mission[0].image} alt="" />
                                                {
                                                    this.state.mission.length === 0 ? "" 
                                                    :
                                                    <h1 className="on_768px">
                                                        {
                                                            x.til === "uz" ? this.state.mission[0].description
                                                            : x.til === "ru" ? this.state.mission[0].description_ru
                                                            : this.state.mission[0].description_en
                                                        }
                                                    </h1>
                                                }
                                                {/* <h1>“Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации”</h1> */}
                                            </div>
                                        </div>
                                    </div>

                                    {this.state.who.length === 0 
                                    ? <CircularProgress /> 
                                    : <div 
                                        className="main1"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        <div className="main_title">
                                            <img className="arrow1" src={arrow1} alt="" />
                                            <img className="arrow2" src={arrow2} alt="" />
                                            <div className="vector">
                                                {/* {
                                                    this.state.who.length === 0 ? "" 
                                                    : */}
                                                    <h1>
                                                        {
                                                            x.til === "uz" ? this.state.who[0].title
                                                            : x.til === "ru" ? this.state.who[0].title_ru
                                                            : this.state.who[0].title_en
                                                        }
                                                    </h1>
                                                {/* } */}
                                                <img src={vector} alt="" />
                                            </div>
                                                {/* {
                                                    this.state.who.length === 0 ? "" 
                                                    : */}
                                                    <h2>
                                                        {
                                                            x.til === "uz" ? this.state.who[0].description
                                                            : x.til === "ru" ? this.state.who[0].description_ru
                                                            : this.state.who[0].description_en
                                                        }
                                                    </h2>
                                                {/* } */}
                                            
                                        </div>
                                        <div className="main1_video">
                                            <ReactPlayer
                                                // url={this.state.who.length === 0 ? "" : this.state.who[0].video}
                                                url={this.state.who[0].video}
                                                light={zmb}
                                                width="100%"
                                                height="500px"
                                                playing
                                                controls
                                                playIcon={<button className="play_btn"><img src={play} alt="" /></button>}
                                            />
                                        </div>
                                    </div>
                                    }

                                </div>
                            </React.Fragment>
                        )
                    }}
                </ZMB.Consumer> 
                
            </React.Fragment>
         );
    }
}
 
export default Maktab;