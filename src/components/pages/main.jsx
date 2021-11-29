import React, { Component } from 'react';
import AOS from 'aos';
import axios from 'axios';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
import { ZMB } from '../context/context';
import { Swiper, SwiperSlide } from "swiper/react";
import CircularProgress from '@material-ui/core/CircularProgress';
import SwiperCore, {Lazy, Navigation, Autoplay } from "swiper/core";

// Image import
import zmb from "../icons/zmb.jpg";
import time from "../icons/Time.svg";
import smile from "../icons/smile.svg";
import arrow3 from "../icons/Arrow3.svg";
import vector from "../icons/Vector.svg";
import calendar from "../icons/Calender.svg";

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
            who:[],
            data: [],
            data1: [],
            corusel: [],
            banner_m: [],
            olimpiada:[],
            olimpiada2:[],
        }
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }
    componentDidMount() {
        axios.get("http://zmbacademy.uz:8080/teachers/")
        .then((res) => {
            setTimeout(() => {
                const data = res.data;
                this.setState({ data: data });
            }, 500);
        });
        axios.get("http://zmbacademy.uz:8080/parties/")
        .then((res) => {
            setTimeout(() => {
                const data1 = res.data;
                this.setState({ data1: data1 });
            }, 500);
        });
        axios.get("http://zmbacademy.uz:8080/corusel/")
        .then((res) => {
            setTimeout(() => {
                const corusel = res.data;
                this.setState({ corusel: corusel });
            }, 500);
        });
        axios.get("http://zmbacademy.uz:8080/who-are-we/")
        .then((res) => {
            setTimeout(() => {
                const who = res.data;
                this.setState({ who: who });
            }, 500);
        });
        axios.get("http://zmbacademy.uz:8080/result-of-olympics/")
        .then((res) => {
            setTimeout(() => {
                const olimpiada = res.data;
                this.setState({ olimpiada: olimpiada });
            }, 500);
        });
        axios.get("http://zmbacademy.uz:8080/result-olympic/")
        .then((res) => {
            setTimeout(() => {
                const olimpiada2 = res.data;
                this.setState({ olimpiada2: olimpiada2 });
            }, 500);
        });
        axios.get("http://zmbacademy.uz:8080/photo-gallery/")
        .then((res) => {
            setTimeout(() => {
                const banner_m = res.data;
                this.setState({ banner_m: banner_m });
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
                                <div 
                                    onClick={x.searchClose}
                                    className="main_asos"
                                >
                                    {this.state.corusel.length === 0 ? 
                                    <div className="circule"> <CircularProgress /> </div>
                                    :
                                    <Swiper
                                        slidesPerView={1}
                                        loop={true}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false
                                        }}
                                        className="mySwiper swiper_up"
                                    >
                                        {this.state.corusel.map((m) =>{
                                            return(
                                                <SwiperSlide
                                                    className="nav_title"
                                                    style={{
                                                        background:`linear-gradient(150deg, rgba(9, 235, 223, 0.4) -37.75%, rgba(12, 24, 39, 0.4) 22%), url(${m.image}), #C4C4C4`,
                                                        backgroundPosition: "center",
                                                        backgroundSize:"cover"
                                                    }}
                                                    key={m.id.toString()}
                                                >
                                                    <div className="title">
                                                        <h1>
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
                                                </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    }

                                    {this.state.olimpiada.length === 0 ?
                                        "" :
                                    <div 
                                        className="main2"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        <div className="main_title">
                                            <div className="vector">
                                                <h1>
                                                    {
                                                        x.til === "uz" ? this.state.olimpiada[0].text
                                                        : x.til === "ru" ? this.state.olimpiada[0].text_ru
                                                        : this.state.olimpiada[0].text_en
                                                    }
                                                </h1>
                                                <img src={vector} alt="" />
                                            </div>
                                            <div className="stars2">
                                                <h2>
                                                    {
                                                        x.til === "uz" ? this.state.olimpiada[0].description
                                                        : x.til === "ru" ? this.state.olimpiada[0].description_ru
                                                        : this.state.olimpiada[0].description_en
                                                    }
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="main2_olimpiada">
                                            <div className="olimpiada_1">
                                                {this.state.olimpiada2.slice(0, 3).map((o)=>{
                                                    return(
                                                        <div>
                                                            <h1>{o.number}</h1>
                                                            <p>
                                                                {
                                                                    x.til === "uz" ? o.title
                                                                    : x.til === "ru" ? o.title_ru
                                                                    : o.title_en
                                                                }
                                                            </p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="olimpiada_img">
                                                <img src={this.state.olimpiada[0].image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    }

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
                                                {/* <h2>Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации</h2> */}
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
                                            {this.state.data.map((z) =>{
                                                
                                                return(
                                                    <SwiperSlide>
                                                        <Link onClick={this.scrollTop} to={`/teacher${z.id}`} className="main3_slider"  key={z.id.toString()}>
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
                                                {this.state.banner_m.length === 0 
                                                    ? ""
                                                    :<h2>
                                                        {
                                                            x.til === "uz" ? this.state.banner_m[0].description
                                                            : x.til === "ru" ? this.state.banner_m[0].description_ru
                                                            : this.state.banner_m[0].description_en
                                                        }
                                                    </h2>
                                                }
                                            </div>
                                        </div>
                                        <div className="main4_grid">
                                            {this.state.data1.slice(0, 5).map((m)=>{
                                                return(
                                                    <div className="grid_list" key={m.id.toString()}>
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