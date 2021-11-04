import React, { Component } from 'react';
import { ZMB } from '../context/context';
import "../css/pages.css"

// import Accordion from "@material-ui/core/Accordion";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// image import
import backgraund from "../navbar/icons/backgraund.svg"
import vector from "../icons/Vector.svg"
import axios from 'axios';
// import arrow1 from "../icons/Arrow1.svg"
// import arrow2 from "../icons/Arrow2.svg"
// import play from "../icons/play.png"
// import poster from "../icons/poster.png"

// import video1 from "../video/video.mp4"

//const acardion = require("../json/acardion.json")

class Maktab extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //expanded: true,
            //acardion: acardion,
            mission:[]
         }
    }
    // handleChange = (panel) => (event, isExpanded) => {
    //     this.setState({
    //         expanded : isExpanded ? panel : false
    //     })
    // };
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }
    componentDidMount() {
        axios.get("http://zmbacademy.uz:8080/our-mission/")
        .then((res) => {
            const mission = res.data;
            this.setState({ mission: mission });
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

                                    {/* <div 
                                        className="main1"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        <div className="main_title">
                                            <img className="arrow1" src={arrow1} alt="" />
                                            <img className="arrow2" src={arrow2} alt="" />
                                            <div className="vector">
                                                <h1>Слова директора</h1>
                                                <img src={vector} alt="" />
                                            </div>
                                            <h2>Наш директор сердечно поздравил детей и родителей с наступлением нового учебного года в школах нашей страны</h2>
                                        </div>
                                        <div className="main1_video">
                                            <ReactPlayer
                                                url={video1}
                                                light={poster}
                                                width="100%"
                                                height="500px"
                                                playing
                                                controls
                                                playIcon={<button className="play_btn"><img src={play} alt="" /></button>}
                                            />
                                        </div>
                                    </div> */}

                                    {/* <div 
                                        className="main3"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        <div className="main_title">
                                            <div className="vector">
                                                <h1>{x.TIL().SPRAVOCHNIK}</h1>
                                                <img src={vector} alt="" />
                                            </div>
                                        </div>
                                        <div className="acardions">
                                            {this.state.acardion.map((a, index)=>{
                                                return(
                                                    <Accordion key={index} expanded={this.state.expanded === `panel${a.id}`} onChange={this.handleChange(`panel${a.id}`)}>
                                                        
                                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" >
                                                            <Typography className="acardion_title">{a.title}</Typography>
                                                        </AccordionSummary>

                                                        <AccordionDetails>
                                                            <Typography className="acardion_comment">{a.comment}</Typography>
                                                        </AccordionDetails>

                                                    </Accordion>
                                                )
                                            })}
                                        
                                        </div>
                                    </div> */}
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