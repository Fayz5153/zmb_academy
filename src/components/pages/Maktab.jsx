import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { ZMB } from '../context/context';
import "../css/pages.css"

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// image import
import backgraund from "../navbar/icons/backgraund.svg"
import arrow1 from "../icons/Arrow1.svg"
import arrow2 from "../icons/Arrow2.svg"
import vector from "../icons/Vector.svg"
import play from "../icons/play.png"
import poster from "../icons/poster.png"

import video1 from "../video/video.mp4"

const acardion = require("../json/acardion.json")

class Maktab extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            expanded: true,
            acardion: acardion,
         }
    }
    handleChange = (panel) => (event, isExpanded) => {
        this.setState({
            expanded : isExpanded ? panel : false
        })
    };
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
                                        data-aos="fade-down"
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
                                        <div className="title">
                                            <Link onClick={this.scrollTop} to="/galereya">{x.TIL().GALEREYA}</Link>
                                            <a onClick={this.scrollTop} href="/">{x.TIL().CONTACT_US}</a>
                                        </div>
                                    </div>

                                    <div 
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
                                    </div>

                                    <div 
                                        className="main3"
                                        data-aos="zoom-in"
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
 
export default Maktab;