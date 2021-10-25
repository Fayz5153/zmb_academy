import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ZMB } from '../context/context';

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
import axios from 'axios';

SwiperCore.use([Navigation, Autoplay]);

class Maktab_hayoti extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(),
            food: [],
            switch: 1,
            key:"Breakfast",
            send: false,
            phone:"",
            name:"",
            y_class:"",
            cause:"",
         }
    }
    handleswitch1 = () =>{
        this.setState({
            switch: 1,
            key: "Breakfast"
        })
    }
    handleswitch2 = () =>{
        this.setState({
            switch: 2,
            key: "Dinner"
        })
    }
    handleswitch3 = () =>{
        this.setState({
            switch: 3,
            key: "Lunch"
        })
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }
    componentDidMount() {
        axios.get("http://zmbacademy.uz:8080/food/")
        .then((res) => {
            const food = res.data;
            this.setState({ food });
          });
    }
    handleSend = () =>{
        const x = {
            phone: this.state.phone,
            name: this.state.name,
            y_class: this.state.y_class,
            cause: this.state.cause
        }
        this.setState({
            send: true
        })
        axios.post("http://zmbacademy.uz:8080/school/", x).
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
                                                <span>{x.TIL().MAKTAB_HAYOTI}</span>
                                            </h1>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                Школа является одним из самых запоминающихся моментов в жизни любого человека и мы в ZMB стараемся дарить детям незабываемые моменты каждый день
                                            </h2>
                                        </div>
                                        <div className="title">
                                            <Link onClick={this.scrollTop} to="/galereya" >Фотогалерея</Link>
                                            <a onClick={this.scrollTop} href="/">Связаться с нами</a>
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
                                                <h1>{x.TIL().KALENDAT}</h1>
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
                                                <h1>{x.TIL().FORMA}</h1>
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
                                                <h1>{x.TIL().MENYU}</h1>
                                                <img src={vector} alt="" />
                                            </div>
                                            <h2>Наш директор сердечно поздравил детей и родителей с наступлением нового учебного года в школах нашей страны</h2>
                                        </div>
                                        <div className="menyu_buttons">
                                            <button onClick={this.handleswitch1} className={this.state.switch === 1 ? "btn_act" : ""}>{x.TIL().ZAVTRAK}</button>
                                            <button onClick={this.handleswitch2} className={this.state.switch === 2 ? "btn_act" : ""}>{x.TIL().OBED}</button>
                                            <button onClick={this.handleswitch3} className={this.state.switch === 3 ? "btn_act" : ""}>{x.TIL().UJIN}</button>
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
                                                {this.state.food.map((z, index) =>{
                                                    if (z.category.toUpperCase().includes(this.state.key.toUpperCase())) {
                                                        return(
                                                            <SwiperSlide>
                                                                <div className="menyu_slayder"  key={index}>
                                                                    <div>
                                                                        <img src={z.image} alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <h1>{z.name}</h1>
                                                                        <p>{z.description.substring(0, 50)}{z.description.length > 50 ? "..." : ""}</p>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                        )
                                                    }
                                                })}
                                            </Swiper>
                                        </div>
                                    </div>

                                    <form onSubmit={this.handleSubmit.bind(this)} 
                                        className="contact_us"
                                        data-aos="fade-down"
                                        data-aos-duration="1500"
                                    >
                                        <div className="contact_h1">
                                            <h1>{x.TIL().ZAYAVKA}</h1>
                                        </div>
                                        <div className="contact_form">
                                            <p>{x.TIL().CONTACT_US_INFO}</p>
                                            <input onChange={(e) => { this.setState({ phone: e.target.value });}} type="text" />
                                        </div>
                                        <div className="contact_form">
                                            <p>{x.TIL().ZAYAVKA_NAME}</p>
                                            <input onChange={(e) => { this.setState({ name: e.target.value });}} type="text" />
                                        </div>
                                        <div className="contact_form">
                                            <p>{x.TIL().ZAYAVKA_CLAS}</p>
                                            <input onChange={(e) => { this.setState({ y_class: e.target.value });}} type="text" />
                                        </div>
                                        <div className="contact_form">
                                            <p>{x.TIL().ZAYAVKA_INFO}</p>
                                            <textarea onChange={(e) => { this.setState({ cause: e.target.value });}} name="" id="" cols="30" rows="10"></textarea>
                                        </div>
                                        <div className="contact_btn">
                                            <button onClick={this.handleSend}>{x.TIL().CONTACT_US_BTN}</button>
                                        </div>
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
                                    </form>
                                </div>
                            </React.Fragment>
                        )
                    }}
                </ZMB.Consumer> 
                
            </React.Fragment>
         );
    }
}
 
export default Maktab_hayoti;