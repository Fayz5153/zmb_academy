import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// images imports
import arrow1 from "../icons/Arrow1.svg"
import arrow2 from "../icons/Arrow2.svg"
import arrow3 from "../icons/Arrow3.svg"
import vector from "../icons/Vector.svg"
import play from "../icons/play.png"
import poster from "../icons/poster.png"
import pic from "../icons/pic.jpg"
import calendar from "../icons/Calender.svg"
import time from "../icons/Time.svg"
import smile from "../icons/smile.svg"
import backgraund from "../navbar/icons/backgraund.svg"

import video1 from "../video/video.mp4"
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../css/main.css"

const data = require("../json/data.json")
const data1 = require("../json/data1.json")

SwiperCore.use([Navigation, Autoplay]);
AOS.init();

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            data1: data1
        }
    }
    render() {
        return (
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
                                <span>ZMB</span> - место где вашему ребёнку понравится
                                <img className="img_smile" src={smile} alt="" />
                            </h1>
                        </div>
                        <div className="title">
                            <h2>
                                Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации
                            </h2>
                        </div>
                        <div className="title">
                            <Link to="/galereya">Фотогалерея</Link>
                            <a href="#contactus">Связаться с нами</a>
                        </div>
                    </div>
                    <div 
                        className="main1"
                        data-aos="fade-left"
                        data-aos-duration="1500"
                    >
                        <div className="main_title">
                            <img className="arrow1" src={arrow1} alt="" />
                            <img className="arrow2" src={arrow2} alt="" />
                            <div className="vector">
                                <h1>Кто мы</h1>
                                <img src={vector} alt="" />
                            </div>
                            <h2>ZMB являеется уникальным образовательным учреждением в Андижане, направленный к улучшению школьного образование</h2>
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
                        className="main2"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        <div className="main_title">
                            <div className="vector">
                                <h1>Наша миссия</h1>
                                <img src={vector} alt="" />
                            </div>
                            <div className="stars2">
                                <h3>Через к тернии к звездам мы можем учиться новому и полезному вместе!</h3>
                            </div>
                        </div>
                        <div className="main2_box">
                            <div>
                                <h1 className="off_768px">“Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации”</h1>
                                <h2>Нилюфар Анвар, генеральный директор ZMB</h2>
                            </div>
                            <div>
                                <img src={pic} alt="" />
                                <h1 className="on_768px">“Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации”</h1>
                            </div>
                        </div>
                    </div>

                    <div 
                        className="main3"
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                    >
                        <div className="main_title">
                            <img className="arrow3" src={arrow3} alt="" />
                            <div className="vector">
                                <h1>Наши учителя</h1>
                                <img src={vector} alt="" />
                            </div>
                            <div className="stars2">
                                <h2>Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации</h2>
                            </div>
                        </div>
                        <div className="main3_swiper">
                        <Swiper
                            slidesPerView={3}
                            loop={true}
                            navigation={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                '10': {
                                    slidesPerView: 1
                                  },
                                '425': {
                                    slidesPerView: 1
                                  },
                                '640': {
                                    slidesPerView: 1
                                  },
                                  '768': {
                                    slidesPerView: 2
                                  },
                                  '1024': {
                                    slidesPerView: 2
                                  },
                                  '1362': {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                  },
                                  '1440': {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                  },
                                  '1920': {
                                    slidesPerView: 3
                                  }
                              }}
                            className="mySwiper"
                        >
                            {this.state.data.map((z, index) =>{
                                
                                return(
                                    <SwiperSlide>
                                        <div className="main3_slider"  key={index}>
                                            <div>
                                                <img src={z.img} alt="" />
                                            </div>
                                            <div>
                                                <h1>{z.name}</h1>
                                                <h2>{z.role}</h2>
                                                <p>{z.comment.substring(0, 70)}{z.comment.length > 70 ? "..." : ""}</p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>
                    </div>

                    <div 
                        className="main4"
                        data-aos="fade-up-right"
                        data-aos-duration="1500"
                    >
                        <div className="main_title">
                            <div className="vector">
                                <h1>Мероприятия</h1>
                                <img src={vector} alt="" />
                            </div>
                            <div className="stars2">
                                <h2>Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации</h2>
                            </div>
                        </div>
                        <div className="main4_grid">
                            {this.state.data1.map((m, index)=>{
                                return(
                                    <div className="grid_list" key={index}>
                                        <Link to={`/news${m.id}`} className="list_img"><img src={m.img} alt="" /></Link>
                                        <div>
                                            <h1><Link to={`/news${m.id}`} >{m.name}</Link></h1>
                                            <div className="m4_date">
                                                <div><img src={calendar} alt="" /><p>{m.date}</p></div>
                                                <div><img src={time} alt="" /><p>{m.time}</p></div>
                                            </div>
                                            <h2>{m.comment.substring(0, 90)}{m.comment.length > 90 ? "..." : ""} <Link to={`/news${m.id}`}>Подробнее</Link></h2>
                                        </div>
                                    </div>
                                )
                            })}
                            <Link to="/news" className="grid_list m4_all">
                                <h1>Показать все</h1>
                            </Link>
                        </div>
                    </div>
                            <div  id="contactus"></div>
                    <div 
                        className="contact_us"
                        data-aos="flip-left"
                        data-aos-duration="1500"
                    >
                        <div className="contact_h1">
                            <h1>Связаться с нами</h1>
                        </div>
                        <div className="contact_form">
                            <p>Ваш телефон номера</p>
                            <input type="number" />
                        </div>
                        <div className="contact_btn">
                            <button>Оставить номер телефона</button>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Main;