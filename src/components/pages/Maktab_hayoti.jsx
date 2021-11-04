import React, { Component } from 'react';
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ZMB } from '../context/context';

// image import
import backgraund from "../navbar/icons/backgraund.svg"
import vector from "../icons/Vector.svg"
import forma from "../icons/forma.png"
import axios from 'axios';

SwiperCore.use([Navigation, Autoplay]);

class Maktab_hayoti extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(),
            send: false,
            phone:"",
            name:"",
            y_class:"",
            cause:"",
         }
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
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
        axios.post("http://zmbacademy.uz:8080/school/", x)
        .then(() =>{
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
                                                <span>{x.TIL().MAKTAB_HAYOTI}</span>
                                            </h1>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                Школа является одним из самых запоминающихся моментов в жизни любого человека и мы в ZMB стараемся дарить детям незабываемые моменты каждый день
                                            </h2>
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

                                    <form onSubmit={this.handleSubmit.bind(this)} 
                                        className="contact_us"
                                        data-aos="fade-up"
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