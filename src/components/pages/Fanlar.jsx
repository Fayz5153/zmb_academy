import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'

// image import
import backgraund from "../navbar/icons/backgraund.svg"
import arrow1 from "../icons/Arrow1.svg"
import arrow2 from "../icons/Arrow2.svg"
import vector from "../icons/Vector.svg"
import play from "../icons/play.png"
import poster from "../icons/poster.png"
import plan_img1 from "../icons/plan_img1.png"
import plan_img2 from "../icons/plan_img2.png"

import video1 from "../video/video.mp4"

class Fanlar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="main_asos">
                    <div 
                        className="nav_title"
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        style={{
                            background:`linear-gradient(150deg, rgba(9, 235, 223, 0.4) -37.75%, rgba(12, 24, 39, 0.4) 22%), url(${backgraund}), #C4C4C4`,
                            backgroundPosition: "center",
                            backgroundSize:"cover"
                        }}
                    >
                        <div className="title">
                            <h1>
                                <span>Учебные предметы </span> в ZMB 
                            </h1>
                        </div>
                        <div className="title">
                            <h2>
                                Как одниз самых престижных частных школ в Андижане, поэтому подход к образованию целостный и успех детей наш главный приоритет
                            </h2>
                        </div>
                        <div className="title">
                            <Link to="/galereya">Фотогалерея</Link>
                            <a href="/">Связаться с нами</a>
                        </div>
                    </div>

                    <div 
                        className="main1 fanlar_1"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                    >
                        <div className="main_title">
                            <img className="arrow1" src={arrow1} alt="" />
                            <img className="arrow2" src={arrow2} alt="" />
                            <div className="vector">
                                <h1>Краткое описание</h1>
                                <img src={vector} alt="" />
                            </div>
                            <h2>Поступление в нашу школу осуществляется тремя простыми шагами, при каждом шаге наши специалисты готовы помочб вам</h2>
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
                        <div 
                            className="plan"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div>
                                <h1>Учебный план</h1>
                                <p>Студенты ZMB разнообразны как в том, что они знают, так и в том, как они учились. Наша учебная программа является интернациональной, с широтой и глубиной, характерной для самых сильных национальных и международных программ, и с упором на языки.</p>
                            </div>
                            <div>
                                <img src={plan_img1} alt="" />
                            </div>
                        </div>
                    </div>

                    <div 
                        className="main3"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <div className="main_title">
                            <div className="vector">
                                <h1>Искусство сцены</h1>
                                <img src={vector} alt="" />
                            </div>
                            <h2>Поступление в нашу школу осуществляется тремя простыми шагами, при каждом шаге наши специалисты готовы помочб вам</h2>
                        </div>
                        <div className="is_img">
                            <img src={poster} alt="" />
                        </div>
                        <div 
                            className="plan"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                        >
                            <div>
                                <h1>Краткое описание</h1>
                                <p>Студенты ZMB разнообразны как в том, что они знают, так и в том, как они учились. Наша учебная программа является интернациональной, с широтой и глубиной, характерной для самых сильных национальных и международных программ, и с упором на языки.</p>
                            </div>
                            <div>
                                <img src={plan_img2} alt="" />
                            </div>
                        </div>
                    </div>

                    <div 
                        className="main3"
                        data-aos="fade-left"
                        data-aos-duration="1500"
                    >
                        <div className="main_title">
                            <div className="vector">
                                <h1>Языкознание</h1>
                                <img src={vector} alt="" />
                            </div>
                            <h2>Поступление в нашу школу осуществляется тремя простыми шагами, при каждом шаге наши специалисты готовы помочб вам</h2>
                        </div>
                        <div className="is_img">
                            <img src={poster} alt="" />
                        </div>
                        <div 
                            className="plan"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div>
                                <h1>Краткое описание</h1>
                                <p>Студенты ZMB разнообразны как в том, что они знают, так и в том, как они учились. Наша учебная программа является интернациональной, с широтой и глубиной, характерной для самых сильных национальных и международных программ, и с упором на языки.</p>
                            </div>
                            <div>
                                <img src={plan_img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Fanlar;