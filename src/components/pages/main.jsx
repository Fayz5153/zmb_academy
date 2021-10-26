import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dateFormat from "dateformat";
import { ZMB } from '../context/context';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';

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
import zmb from "../icons/zmb.jpg"

import video1 from "../video/video.mp4"

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../css/main.css"
import axios from 'axios';

SwiperCore.use([Navigation, Autoplay]);
AOS.init();

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data1: [],
            send: false,
            phone:"",
        }
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }
    componentDidMount() {
        axios.get("http://zmbacademy.uz:8080/teachers/")
        .then((res) => {
            const data = res.data;
            this.setState({ data });
          });
        axios.get("http://zmbacademy.uz:8080/news/")
        .then((res) => {
            const data1 = res.data;
            this.setState({ data1 });
          });
    }
    handleSend = () =>{
        const x = {
            phone: this.state.phone,
        }
        this.setState({
            send: true
        })
        axios.post("http://zmbacademy.uz:8080/phone/", x).
        then((res) =>{
            setTimeout(() => {
                this.setState({
                    send: false
                })
            }, 1500);
        })
    }
    handleClose = () =>{
        this.setState({
            send: false
        })
    }
    handleSubmit(e){
        e.preventDefault();
        e.target.reset();
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
                                                <span>{x.TIL().MAIN_NT1}</span> {x.TIL().MAIN_NT2}
                                                <img className="img_smile" src={smile} alt="" />
                                            </h1>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации
                                            </h2>
                                        </div>
                                        <div className="title">
                                            <Link onClick={this.scrollTop} to="/galereya">{x.TIL().GALEREYA}</Link>
                                            <a href="#contactus">{x.TIL().CONTACT_US}</a>
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
                                                <h1>{x.TIL().KTO_MI}</h1>
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
                                                <h1>{x.TIL().NASHA_MISSIYA}</h1>
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
                                                <h1>{x.TIL().OQITUVCHILAR}</h1>
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
                                                                <img src={z.image} alt="" />
                                                            </div>
                                                            <div>
                                                                <h1>{z.first_name} {z.last_name}</h1>
                                                                <h2>
                                                                    {x.til === "uz" ? z.subject
                                                                    : x.til === "ru" ? z.subject_ru
                                                                    : z.subject_en}
                                                                </h2>
                                                                <p>
                                                                    {x.til === "uz" ? z.description.substring(0, 70)
                                                                    : x.til === "ru" ? z.description_ru.substring(0, 70)
                                                                    : z.description_en.substring(0, 70)}
                                                                    {z.description.length > 70 ? "..." : ""}
                                                                </p>
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
                                                <h1>{x.TIL().MEROPRIYATIYA}</h1>
                                                <img src={vector} alt="" />
                                            </div>
                                            <div className="stars2">
                                                <h2>Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации</h2>
                                            </div>
                                        </div>
                                        <div className="main4_grid">
                                            {this.state.data1.slice(0, 5).map((m, index)=>{
                                                return(
                                                    <div className="grid_list" key={index}>
                                                        <Link onClick={this.scrollTop} to={`/news${m.id}`} className="list_img"><img src={m.images.length === 0 ? zmb : m.images[0].image} alt="" /></Link>
                                                        <div>
                                                            <h1><Link onClick={this.scrollTop} to={`/news${m.id}`} >
                                                                {x.til === "uz" ? m.name
                                                                : x.til === "ru" ? m.name_ru
                                                                : m.name_en}
                                                            </Link></h1>
                                                            <div className="m4_date">
                                                                <div><img src={calendar} alt="" /><p>{dateFormat(m.date, "dd/mm/yyyy")}</p></div>
                                                                <div><img src={time} alt="" /><p>{dateFormat(m.date, "HH:MM")}</p></div>
                                                            </div>
                                                            <h2>
                                                                {x.til === "uz" ? m.description.substring(0, 90)
                                                                : x.til === "ru" ? m.description_ru.substring(0, 90)
                                                                : m.description_en.substring(0, 90)}
                                                                {m.description.length > 90 ? "..." : ""} 
                                                                <Link onClick={this.scrollTop} to={`/news${m.id}`}>
                                                                    {x.TIL().PODROBNO}
                                                                </Link></h2>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <Link onClick={this.scrollTop} to="/news" className="grid_list m4_all">
                                                <h1>{x.TIL().SHOW_ALL}</h1>
                                            </Link>
                                        </div>
                                    </div>

                                    <div id="contactus"></div>
                                    
                                    <form  onSubmit={this.handleSubmit.bind(this)} 
                                        className="contact_us"
                                        data-aos="flip-left"
                                        data-aos-duration="1500"
                                    >
                                        <div className="contact_h1">
                                            <h1>{x.TIL().CONTACT_US}</h1>
                                        </div>
                                        <div className="contact_form">
                                            <p>{x.TIL().CONTACT_US_INFO}</p>
                                            <input onChange={(e) => { this.setState({ phone: e.target.value });}} type="number" />
                                        </div>
                                        <div className="contact_btn">
                                            <button onClick={this.handleSend}>{x.TIL().CONTACT_US_BTN}</button>
                                        </div>
                                    </form>
                                    <Modal
                                        open={this.state.send}
                                        onClose={this.handleClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                            timeout: 500,
                                        }}
                                        className="loading"
                                    >
                                        <Fade in={this.state.send}>
                                            <div>
                                                <CircularProgress />
                                            </div>
                                        </Fade>
                                    </Modal>

                                </div>
                            </React.Fragment>
                        )
                    }}
                </ZMB.Consumer> 
                
            </React.Fragment>
        );
    }
}

export default Main;