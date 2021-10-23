import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'

// image import
import backgraund from "../navbar/icons/backgraund.svg"
import poster from "../icons/poster.png"
import vector from "../icons/Vector.svg"
import calender from "../icons/Calender.svg"
import facebook from "../icons/facebook.svg"
import messenger from "../icons/messenger.svg"
import twitter from "../icons/twitter.svg"
import photo1 from "../icons/photo1.png"
import photo2 from "../icons/photo2.png"
import photo3 from "../icons/photo3.png"
import photo4 from "../icons/photo4.png"

class Maktab extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="main_asos">
                    <div 
                        className="nav_title"
                        data-aos="fade-up-right"
                        data-aos-duration="1500"
                        style={{
                            background:`linear-gradient(150deg, rgba(9, 235, 223, 0.4) -37.75%, rgba(12, 24, 39, 0.4) 22%), url(${backgraund}), #C4C4C4`,
                            backgroundPosition: "center",
                            backgroundSize:"cover"
                        }}
                    >
                        <div className="title">
                            <h1>
                                <span>Новости </span> в ZMB 
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
                        className="single_links"
                        data-aos="flip-up"
                    >
                        <Link to="/news">Новости</Link> <p>/  Походы в горы Чарвак </p>
                    </div>

                    <div 
                        className="single_title"
                        data-aos="fade-down-right"
                        data-aos-duration="1000"
                    >
                        <h1>Поход в горы Чимган</h1>
                        <img src={vector} alt="" />
                    </div>

                    <div className="single_page">
                        <div 
                            className="date"
                            data-aos="fade-down-right"
                            data-aos-duration="1000"
                        >
                            <div>
                                <img src={calender} alt="" />
                                <h1>22 октябрь</h1>
                            </div>
                            <div>
                                <li>Поделиться</li>
                                <div className="share">
                                    <div>
                                        <a href="#"><img src={facebook} alt="" /></a>
                                        <a href="#"><img src={messenger} alt="" /></a>
                                        <a href="#"><img src={twitter} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div 
                            className="single_text"
                            data-aos="zoom-in"
                            data-aos-duration="1200"
                        >
                            <p>
                                Приемная комиссия в нашей школе состоит из десяти высоквалифицированных специалистов, которые оценивают уровень вашего ребенка на индивидуальной основе и исходя от анализа назначают подходящий учебный курс. Приемная комиссия в нашей школе состоит из десяти высоквалифицированных специалистов, которые оценивают уровень вашего ребенка на индивидуальной основе и исходя от анализа назначают подходящий учебный курс. Приемная комиссия в нашей школе состоит из десяти высоквалифицированных специалистов, которые оценивают уровень вашего ребенка на индивидуальной основе и исходя от анализа назначают подходящий учебный курс. 
                            </p>
                        </div>

                        <div 
                            className="single_img"
                            data-aos="fade-left"
                            data-aos-duration="500"
                        >
                            <img src={poster} alt="" />
                        </div>

                        <div 
                            className="single_text"
                            data-aos="zoom-in"
                            data-aos-duration="1200"
                        >
                            <p>
                                Приемная комиссия в нашей школе состоит из десяти высоквалифицированных специалистов, которые оценивают уровень вашего ребенка на индивидуальной основе и исходя от анализа назначают подходящий учебный курс. Приемная комиссия в нашей школе состоит из десяти высоквалифицированных специалистов, которые оценивают уровень вашего ребенка на индивидуальной основе и исходя от анализа назначают подходящий учебный курс. Приемная комиссия в нашей школе состоит из десяти высоквалифицированных специалистов, которые оценивают уровень вашего ребенка на индивидуальной основе и исходя от анализа назначают подходящий учебный курс. 
                            </p>
                        </div>

                        <div 
                            className="single_title"
                            data-aos="fade-right"
                            data-aos-duration="500"
                        >
                            <h1>Фотогаллерея</h1>
                            <img src={vector} alt="" />
                        </div>

                        <div 
                            className="single_photos"
                            data-aos="fade-left"
                            data-aos-duration="500"
                        >
                            <div>
                                <img src={photo1} alt="" />
                            </div>
                            <div>
                                <img src={photo2} alt="" />
                            </div>
                            <div>
                                <img src={photo3} alt="" />
                            </div>
                            <div>
                                <img src={photo4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Maktab;