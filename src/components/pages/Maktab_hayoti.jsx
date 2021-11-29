import React, { Component } from 'react';
import { ZMB } from '../context/context';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import CircularProgress from '@material-ui/core/CircularProgress';

// Image import
import axios from 'axios';
import vector from "../icons/Vector.svg";

SwiperCore.use([Navigation, Autoplay]);

class Maktab_hayoti extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(),
            send: false,
            name:"",
            phone:"",
            cause:"",
            y_class:"",
            banner:[],
            uniform:[],
         }
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }
    componentDidMount() {
        axios.get("http://zmbacademy.uz:8080/school-uniform/")
        .then((res) => {
            setTimeout(() => {
                const uniform = res.data;
                this.setState({ uniform: uniform });
            }, 500);
        });
        axios.get("http://zmbacademy.uz:8080/life-of-school/")
        .then((res) => {
            setTimeout(() => {
                const banner = res.data;
                this.setState({ banner: banner });
            }, 500);
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
                                    {this.state.banner.length === 0 ?
                                        <div className="circule"><CircularProgress /></div> :
                                        
                                        <div 
                                            className="nav_title"
                                            style={{
                                                background:`linear-gradient(150deg, rgba(9, 235, 223, 0.4) -37.75%, rgba(12, 24, 39, 0.4) 22%), url(${this.state.banner[0].img}), #C4C4C4`,
                                                backgroundPosition: "center",
                                                backgroundSize:"cover"
                                            }}
                                        >
                                            <div className="title">
                                                <h1>
                                                    {
                                                        x.til === "uz" ? this.state.banner[0].text
                                                        : x.til === "ru" ? this.state.banner[0].text_ru
                                                        : this.state.banner[0].text_en
                                                    }
                                                </h1>
                                            </div>
                                            <div className="title">
                                                <h2>
                                                    {
                                                        x.til === "uz" ? this.state.banner[0].description
                                                        : x.til === "ru" ? this.state.banner[0].description_ru
                                                        : this.state.banner[0].description_en
                                                    }
                                                </h2>
                                            </div>
                                        </div>
                                    }

                                    {this.state.uniform.length === 0 ?
                                        "" :
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
                                            <h2>
                                                {
                                                    x.til === "uz" ? this.state.uniform[0].description
                                                    : x.til === "ru" ? this.state.uniform[0].description_ru
                                                    : this.state.uniform[0].description_en
                                                }
                                            </h2>
                                        </div>
                                        <div className="forma">
                                            <div className="boys">
                                                <div className="boys1">
                                                    {
                                                        x.til === "uz" ? this.state.uniform[0].left_title1
                                                        : x.til === "ru" ? this.state.uniform[0].left_title1_ru
                                                        : this.state.uniform[0].left_title1_en
                                                    }
                                                </div>
                                                <div>
                                                    {
                                                        x.til === "uz" ? this.state.uniform[0].left_title2
                                                        : x.til === "ru" ? this.state.uniform[0].left_title2_ru
                                                        : this.state.uniform[0].left_title2_en
                                                    }
                                                </div>
                                                <div className="boys2">
                                                    {
                                                        x.til === "uz" ? this.state.uniform[0].left_title3
                                                        : x.til === "ru" ? this.state.uniform[0].left_title3_ru
                                                        : this.state.uniform[0].left_title3_en
                                                    }
                                                </div>
                                            </div>

                                            <div className="forma_img">
                                                <img src={this.state.uniform[0].image_uniform} alt="" />
                                            </div>
                                            
                                            <div className="girls">
                                                <div className="girls1">
                                                    {
                                                        x.til === "uz" ? this.state.uniform[0].right_title1
                                                        : x.til === "ru" ? this.state.uniform[0].right_title1_ru
                                                        : this.state.uniform[0].right_title1_en
                                                    }
                                                </div>
                                                <div>
                                                    {
                                                        x.til === "uz" ? this.state.uniform[0].right_title2
                                                        : x.til === "ru" ? this.state.uniform[0].right_title2_ru
                                                        : this.state.uniform[0].right_title2_en
                                                    }
                                                </div>
                                                <div className="girls2">
                                                    {
                                                        x.til === "uz" ? this.state.uniform[0].right_title3
                                                        : x.til === "ru" ? this.state.uniform[0].right_title3_ru
                                                        : this.state.uniform[0].right_title3_en
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    }

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