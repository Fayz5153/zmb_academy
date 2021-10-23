import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";

import "react-datepicker/dist/react-datepicker.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// image import
import backgraund from "../navbar/icons/backgraund.svg"
import vector from "../icons/Vector.svg"
import arrow1 from "../icons/Arrow1.svg"
import arrow2 from "../icons/Arrow2.svg"
import calendar from "../icons/Calendar.svg"
import forma from "../icons/forma.png"

const data_menyu = require("../json/data_menyu.json")

SwiperCore.use([Navigation, Autoplay]);

class Maktab_hayoti extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(),
            data_menyu: data_menyu,
            switch: 1,
            key:"завтрак"
         }
    }
    handleswitch1 = () =>{
        this.setState({
            switch: 1,
            key: "завтрак"
        })
    }
    handleswitch2 = () =>{
        this.setState({
            switch: 2,
            key: "обед"
        })
    }
    handleswitch3 = () =>{
        this.setState({
            switch: 3,
            key: "ужин"
        })
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="main_asos">
                    <div 
                        className="nav_title"
                        data-aos="fade-down-right"
                        data-aos-duration="1500"
                        style={{
                            background:`linear-gradient(150deg, rgba(9, 235, 223, 0.4) -37.75%, rgba(12, 24, 39, 0.4) 22%), url(${backgraund}), #C4C4C4`,
                            backgroundPosition: "center",
                            backgroundSize:"cover"
                        }}
                    >
                        <div className="title">
                            <h1>
                                <span>Школьная жизнь</span>
                            </h1>
                        </div>
                        <div className="title">
                            <h2>
                                Школа является одним из самых запоминающихся моментов в жизни любого человека и мы в ZMB стараемся дарить детям незабываемые моменты каждый день
                            </h2>
                        </div>
                        <div className="title">
                            <Link to="/galereya" >Фотогалерея</Link>
                            <a href="/">Связаться с нами</a>
                        </div>
                    </div>

                    <div 
                        className="main1"
                        data-aos="fade-down-right"
                        data-aos-duration="1500"
                    >
                        <div className="main_title">
                            <img className="arrow1" src={arrow1} alt="" />
                            <img className="arrow2" src={arrow2} alt="" />
                            <div className="vector">
                                <h1>Школьный календарь</h1>
                                <img src={vector} alt="" />
                            </div>
                        </div>
                        <div className="kalendar">
                            <DatePicker
                                selected={this.state.date}
                                onChange={(date) => this.setState({date: date})}
                                inline
                            />
                        </div>

                        <div className="date_results">
                            <div className="result">
                                <div>
                                    <img src={calendar} alt="" />
                                    <p>22-Октябрь</p>
                                </div>
                                <div>
                                    <h1>Приемная комиссия</h1>
                                    <h2>Наш директор сердечно поздравил детей и родителей с наступлением нового учебного года в школах нашей страны</h2>
                                </div>
                            </div>

                            <div className="result">
                                <div>
                                    <img src={calendar} alt="" />
                                    <p>22-Октябрь</p>
                                </div>
                                <div>
                                    <h1>Приемная комиссия</h1>
                                    <h2>Наш директор сердечно поздравил детей и родителей с наступлением нового учебного года в школах нашей страны</h2>
                                </div>
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
                                <h1>Школьная форма</h1>
                                <img src={vector} alt="" />
                            </div>
                            <h2>Наш директор сердечно поздравил детей и родителей с наступлением нового учебного года в школах нашей страны</h2>
                        </div>
                        <div className="forma">
                            <div className="boys">
                                <div className="boys1">
                                    Обязательная белая рубашка
                                </div>
                                <div>
                                    Классические брюки
                                </div>
                                <div className="boys2">
                                    Черные туфли
                                </div>
                            </div>

                            <div className="forma_img">
                                <img src={forma} alt="" />
                            </div>
                            
                            <div className="girls">
                                <div className="girls1">
                                    Обязательная белая рубашка
                                </div>
                                <div>
                                    Юбка до колень
                                </div>
                                <div className="girls2">
                                    Черные туфли
                                </div>
                            </div>
                        </div>
                    </div>

                    <div 
                        className="main3"
                        data-aos="fade-down-left"
                        data-aos-duration="1500"
                    >
                        <div className="main_title">
                            <div className="vector">
                                <h1>Школьное меню</h1>
                                <img src={vector} alt="" />
                            </div>
                            <h2>Наш директор сердечно поздравил детей и родителей с наступлением нового учебного года в школах нашей страны</h2>
                        </div>
                        <div className="menyu_buttons">
                            <button onClick={this.handleswitch1} className={this.state.switch === 1 ? "btn_act" : ""}>Завтрак</button>
                            <button onClick={this.handleswitch2} className={this.state.switch === 2 ? "btn_act" : ""}>Обед</button>
                            <button onClick={this.handleswitch3} className={this.state.switch === 3 ? "btn_act" : ""}>Ужин</button>
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
                                        slidesPerView: 2
                                    },
                                    '768': {
                                        slidesPerView: 2
                                    },
                                    '1024': {
                                        slidesPerView: 3
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
                                {this.state.data_menyu.map((z, index) =>{
                                    if (z.category.toUpperCase().includes(this.state.key.toUpperCase())) {
                                        return(
                                            <SwiperSlide>
                                                <div className="menyu_slayder"  key={index}>
                                                    <div>
                                                        <img src={z.img} alt="" />
                                                    </div>
                                                    <div>
                                                        <h1>{z.name}</h1>
                                                        <p>{z.comment.substring(0, 50)}{z.comment.length > 50 ? "..." : ""}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }
                                    // return(
                                    //     <SwiperSlide>
                                    //         <div className="menyu_slayder"  key={index}>
                                    //             <div>
                                    //                 <img src={z.img} alt="" />
                                    //             </div>
                                    //             <div>
                                    //                 <h1>{z.name}</h1>
                                    //                 <p>{z.comment.substring(0, 50)}{z.comment.length > 50 ? "..." : ""}</p>
                                    //             </div>
                                    //         </div>
                                    //     </SwiperSlide>
                                    // )
                                })}
                            </Swiper>
                        </div>
                        {/* <div className="main3_swiper">
                            <Swiper
                                slidesPerView={3}
                                loop={true}
                                navigation={true}
                                centeredSlides={true}
                                // autoplay={{
                                //     delay: 2000,
                                //     disableOnInteraction: false
                                // }}
                                breakpoints={{
                                    '425': {
                                        slidesPerView: 1
                                    },
                                    '640': {
                                        slidesPerView: 2
                                    },
                                    '768': {
                                        slidesPerView: 2
                                    },
                                    '1024': {
                                        slidesPerView: 3
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
                                {this.state.data_menu.map((z, index) =>{
                                    return(
                                        <SwiperSlide>
                                            <div className="menyu_slayder"  key={index}>
                                                <div>
                                                    <img src={z.img} alt="" />
                                                </div>
                                                <div>
                                                    <h1>{z.name}</h1>
                                                    <p>{z.comment.substring(0, 50)}{z.comment.length > 50 ? "..." : ""}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div> */}
                    </div>

                    <div 
                        className="contact_us"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                    >
                        <div className="contact_h1">
                            <h1>Заявка о прогуле школы</h1>
                        </div>
                        <div className="contact_form">
                            <p>Ваш телефон номера</p>
                            <input type="text" />
                        </div>
                        <div className="contact_form">
                            <p>Ваша имя и фамилия</p>
                            <input type="text" />
                        </div>
                        <div className="contact_form">
                            <p>Ваш класс</p>
                            <input type="text" />
                        </div>
                        <div className="contact_form">
                            <p>Причина прогула</p>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
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
 
export default Maktab_hayoti;