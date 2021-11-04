import React, { Component } from 'react';
import AOS from 'aos';
import axios from 'axios';
import dateFormat from "dateformat";
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { ZMB } from '../context/context';
import { Swiper, SwiperSlide } from "swiper/react";
import CircularProgress from '@material-ui/core/CircularProgress';
import SwiperCore, {Lazy, Navigation, Autoplay } from "swiper/core";

// Image import
import zmb from "../icons/zmb.jpg";
import play from "../icons/play.png";
import time from "../icons/Time.svg";
import smile from "../icons/smile.svg";
import arrow1 from "../icons/Arrow1.svg";
import arrow2 from "../icons/Arrow2.svg";
import arrow3 from "../icons/Arrow3.svg";
import vector from "../icons/Vector.svg";
import calendar from "../icons/Calender.svg";
import backgraund from "../navbar/icons/backgraund.svg";

// Import styles
import "../css/main.css";
import 'aos/dist/aos.css';
import "swiper/swiper.min.css";
import "swiper/components/lazy/lazy.min.css";
import "swiper/components/navigation/navigation.min.css";


SwiperCore.use([Lazy, Navigation, Autoplay]);
AOS.init();

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data1: [],
            corusel: [],
            who:[]
        }
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }
    componentDidMount() {
        axios.get("http://zmbacademy.uz:8080/teachers/")
        .then((res) => {
            const data = res.data;
            this.setState({ data: data });
        });
        axios.get("http://zmbacademy.uz:8080/parties/")
        .then((res) => {
            const data1 = res.data;
            this.setState({ data1: data1 });
        });
        axios.get("http://zmbacademy.uz:8080/corusel/")
        .then((res) => {
            const data2 = res.data;
            this.setState({ corusel: data2 });
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
                                <div 
                                    onClick={x.searchClose}
                                    className="main_asos"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                >
                                    {this.state.corusel.length === 0 ? 
                                    <div 
                                        className="nav_title"
                                        style={{
                                            background:`linear-gradient(150deg, rgba(9, 235, 223, 0.4) -37.75%, rgba(12, 24, 39, 0.4) 22%), url(${backgraund}), #C4C4C4`,
                                            backgroundPosition: "center",
                                            backgroundSize:"cover"
                                        }}
                                    >
                                        <div className="title">
                                            <h1>
                                                {x.TIL().MAIN_NT2}
                                                <img className="img_smile" src={smile} alt="" />
                                            </h1>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации
                                            </h2>
                                        </div>
                                    </div> :
                                    <Swiper
                                        slidesPerView={1}
                                        loop={true}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false
                                        }}
                                        className="mySwiper"
                                    >
                                        {this.state.corusel.map((m, index) =>{
                                            return(
                                                <SwiperSlide
                                                    className="nav_title"
                                                    style={{
                                                        background:`linear-gradient(150deg, rgba(9, 235, 223, 0.4) -37.75%, rgba(12, 24, 39, 0.4) 22%), url(${m.image}), #C4C4C4`,
                                                        backgroundPosition: "center",
                                                        backgroundSize:"cover"
                                                    }}
                                                    key={index}
                                                >
                                                    {/* <div> */}
                                                        <div className="title">
                                                            <h1>
                                                                {/* <span>{x.TIL().MAIN_NT1}</span> {x.TIL().MAIN_NT2} */}
                                                                {
                                                                    x.til === "uz" ? m.title
                                                                    : x.til === "ru" ? m.title_ru
                                                                    : m.title_en
                                                                }
                                                                <img className="img_smile" src={smile} alt="" />
                                                            </h1>
                                                        </div>
                                                        <div className="title">
                                                            <h2>
                                                                {x.til === "uz" ? m.description
                                                                : x.til === "ru" ? m.description_ru
                                                                : m.description_en}
                                                            </h2>
                                                        </div>
                                                    {/* </div> */}
                                                </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    }
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

                                    <div 
                                        className="main2"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        <div className="main_title">
                                            <div className="vector">
                                                <h1>{x.TIL().OLIMPIADA}</h1>
                                                <img src={vector} alt="" />
                                            </div>
                                            <div className="stars2">
                                                <h3>Через к тернии к звездам мы можем учиться новому и полезному вместе!</h3>
                                            </div>
                                        </div>
                                        <div className="main2_olimpiada">

                                        </div>
                                    </div>

                                    <div 
                                        className="main3"
                                        data-aos="fade-up"
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
                                                        <Link onClick={this.scrollTop} to={`/teacher${z.id}`} className="main3_slider"  key={index}>
                                                            <div>
                                                                <img src={z.imgs.length === 0 ? zmb : z.imgs[0].image} alt="" />
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
                                                        </Link>
                                                        </SwiperSlide>
                                                    )
                                                })}

                                            </Swiper>
                                        </div>
                                    </div>

                                    <div 
                                        className="main4"
                                        data-aos="fade-up"
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
                                                        <Link onClick={this.scrollTop} to={`/galereya${m.id}`} className="list_img"><img src={m.image.length === 0 ? zmb : m.image} alt="" /></Link>
                                                        <div>
                                                            <h1><Link onClick={this.scrollTop} to={`/galereya${m.id}`} >
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
                                                                {m.description.length > 90 ? "..." : " "} 
                                                                <Link onClick={this.scrollTop} to={`/galereya${m.id}`}>
                                                                    {x.TIL().PODROBNO}
                                                                </Link></h2>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <Link onClick={this.scrollTop} to="/galereya" className="grid_list m4_all">
                                                <h1>{x.TIL().SHOW_ALL}</h1>
                                            </Link>
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

export default Main;