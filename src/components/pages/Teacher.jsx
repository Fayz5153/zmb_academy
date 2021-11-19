import React, { Component } from 'react';
import { ZMB } from '../context/context';
import axios from 'axios';
import ReactPlayer from 'react-player'
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

// Image import
import play from "../icons/play.png";
import vector from "../icons/Vector.svg";
import backgraund from "../navbar/icons/backgraund.svg";

class Teacher extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            images:[],
            modal:false,
            img: null
         }
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }
    handleClose = () =>{
        this.setState({
            modal:false
        })
    }
    componentDidMount() {
        axios.get(`http://zmbacademy.uz:8080/teachers/${this.props.match.params.id}`)
        .then((res) => {
            const data = res.data;
            const images = res.data.imgs;
            this.setState({ data:data, images:images });
          });
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
                                                <span>{x.TIL().TEACHERS} </span>
                                            </h1>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                Как одниз самых престижных частных школ в Андижане, поэтому подход к образованию целостный и успех детей наш главный приоритет
                                            </h2>
                                        </div>
                                    </div>

                                    <div 
                                        className="single_links"
                                        data-aos="flip-up"
                                    >
                                    <h1>{this.state.data.first_name} {this.state.data.last_name}</h1>
                                    </div>

                                    <div 
                                        className="single_title"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        <h2>
                                            {x.til === "uz" ? this.state.data.subject
                                            : x.til === "ru"  ? this.state.data.subject_ru
                                            : this.state.data.subject_en}
                                        </h2>
                                        <img src={vector} alt="" />
                                    </div>

                                    <div className="single_page">
                                        {/* // ! */}
                                        <div className="singleOK">

                                            <div 
                                            className="single_photosOK"
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                            >
                                                {this.state.images.length === 0 
                                                    ? 
                                                    <div>
                                                        <h1>{x.TIL().NO_FOTO}</h1>
                                                    </div> 
                                                    :
                                                    this.state.images.map((i)=>{
                                                        return(
                                                            <div 
                                                                onClick={()=>{
                                                                    this.setState({
                                                                        img: i.image,
                                                                    })
                                                                    setTimeout(() => {
                                                                        this.setState({
                                                                            modal:true,
                                                                        })
                                                                    }, 500);
                                                                }}
                                                            >
                                                                <img src={i.image} alt="" />
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <Modal
                                                    open={this.state.modal}
                                                    onClose={this.handleClose}
                                                    closeAfterTransition
                                                    BackdropComponent={Backdrop}
                                                    BackdropProps={{
                                                        timeout: 500,
                                                    }}
                                                    className="loading"
                                                >
                                                    <Fade in={this.state.modal}>
                                                        <div className="img_modal">
                                                            <img src={this.state.img} alt="" />
                                                        </div>
                                                    </Fade>
                                                </Modal>
                                            </div>

                                            <div 
                                                className="single_text"
                                                data-aos="fade-up"
                                                data-aos-duration="1200"
                                            >
                                                <p>
                                                    {x.til === "uz" ? this.state.data.description
                                                    : x.til === "ru"  ? this.state.data.description_ru
                                                    : this.state.data.description_en}
                                                </p>
                                            </div>
                                        </div>
                                        {/* // ! */}
                                       
                                        <div 
                                            className="single_title"
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                        >
                                            <h1>{x.TIL().VIDEO}</h1>
                                            <img src={vector} alt="" />
                                        </div>

                                        <div 
                                            className="main1"
                                            data-aos="fade-up"
                                            data-aos-duration="1500"
                                        >
                                            <div className="main1_video">
                                                <ReactPlayer
                                                    url={this.state.data.video}
                                                    //light={this.state.data.video}
                                                    width="100%"
                                                    height="500px"
                                                    controls
                                                    playIcon={<button className="play_btn"><img src={play} alt="" /></button>}
                                                />
                                            </div>
                                        </div>

                                        {/* <div 
                                            className="single_title"
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                        >
                                            <h1>{x.TIL().GALEREYA}</h1>
                                            <img src={vector} alt="" />
                                        </div>

                                        <div 
                                            className="single_photos"
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                        >
                                            {this.state.images.length === 0 
                                                ? 
                                                <div>
                                                    <h1>{x.TIL().NO_FOTO}</h1>
                                                </div> 
                                                :
                                                this.state.images.map((i)=>{
                                                    return(
                                                        <div 
                                                            onClick={()=>{
                                                                this.setState({
                                                                    img: i.image,
                                                                })
                                                                setTimeout(() => {
                                                                    this.setState({
                                                                        modal:true,
                                                                    })
                                                                }, 500);
                                                            }}
                                                        >
                                                            <img src={i.image} alt="" />
                                                        </div>
                                                    )
                                                })
                                            }
                                            <Modal
                                                open={this.state.modal}
                                                onClose={this.handleClose}
                                                closeAfterTransition
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                    timeout: 500,
                                                }}
                                                className="loading"
                                            >
                                                <Fade in={this.state.modal}>
                                                    <div className="img_modal">
                                                        <img src={this.state.img} alt="" />
                                                    </div>
                                                </Fade>
                                            </Modal>
                                        </div> */}
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
 
export default Teacher;