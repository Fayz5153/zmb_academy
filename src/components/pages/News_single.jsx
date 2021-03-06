import React, { Component } from 'react';
import axios from 'axios';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
import { ZMB } from '../context/context';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { 
    FacebookShareButton,
    FacebookMessengerShareButton,
    TwitterShareButton,
} from "react-share";

// Image import
import vector from "../icons/Vector.svg";
import twitter from "../icons/twitter.svg";
import calender from "../icons/Calender.svg";
import facebook from "../icons/facebook.svg";
import messenger from "../icons/messenger.svg";

class News_single extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            images:[],
            modal:false,
            img: null
         }
    }
    handleClose = () =>{
        this.setState({
            modal:false
        })
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }
    componentDidMount() {
        axios.get(`http://URL/news/${this.props.match.params.id}`)
        .then((res) => {
            const data = res.data;
            const images = res.data.images
            this.setState({ data:data, images:images });
          });
    }

    render(props) { 
            console.log(this.state.img)
        return ( 
            <React.Fragment>
                <ZMB.Consumer>
                    {(x)=>{
                        return(
                            <React.Fragment>
                                <div className="main_asos" onClick={x.searchClose}>
                                    <div className="single_top"></div>

                                    <div 
                                        className="single_links"
                                        data-aos="flip-up"
                                    >
                                        <Link to="/news">{x.TIL().N5}</Link> 
                                            <p>/ 
                                                {x.til === "uz" ? this.state.data.name
                                                : x.til === "ru"  ? this.state.data.name_ru
                                                : this.state.data.name_en} 
                                            </p>
                                    </div>

                                    <div 
                                        className="single_title"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        <h1>
                                            {x.til === "uz" ? this.state.data.name
                                            : x.til === "ru"  ? this.state.data.name_ru
                                            : this.state.data.name_en}
                                        </h1>
                                        <img src={vector} alt="" />
                                    </div>

                                    <div className="single_page">
                                        <div 
                                            className="date"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                        >
                                            <div>
                                                <img src={calender} alt="" />
                                                <h1>{dateFormat(this.state.data.date, "dd/mm/yyyy")}</h1>
                                            </div>
                                            <div>
                                                <li>{x.TIL().SHARE}</li>
                                                <div className="share">
                                                    <div>
                                                        <FacebookShareButton
                                                            url={`http://zmbacademy.uz:8080/news/${this.props.match.params.id}`}
                                                            className="Demo__some-network__share-button"
                                                        >
                                                            <img src={facebook} alt="" />
                                                        </FacebookShareButton>
                                                        <FacebookMessengerShareButton
                                                            url={`http://zmbacademy.uz:8080/news/${this.props.match.params.id}`}
                                                            className="Demo__some-network__share-button"
                                                        >
                                                            <img src={messenger} alt="" />
                                                        </FacebookMessengerShareButton>
                                                        <TwitterShareButton
                                                            url={`http://zmbacademy.uz:8080/news/${this.props.match.params.id}`}
                                                            className="Demo__some-network__share-button"
                                                        >
                                                            <img src={twitter} alt="" />
                                                        </TwitterShareButton>
                                                    </div>
                                                </div>
                                            </div>
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

                                        <div 
                                            className="single_title"
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                        >
                                            <h1>????????????????????????</h1>
                                            <img src={vector} alt="" />
                                        </div>

                                        <div 
                                            className="single_photos"
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                        >
                                            {this.state.images.map((i)=>{
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
                                            })}
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
 
export default News_single;