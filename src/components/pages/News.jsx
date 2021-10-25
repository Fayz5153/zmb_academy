import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ZMB } from '../context/context';

// image import
import backgraund from "../navbar/icons/backgraund.svg"
import calendar from "../icons/Calender.svg"
import vector from "../icons/Vector.svg"
import faded from "../music/Faded.mp3"

const data1 = require("../json/data1.json")

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data1: data1
        }
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
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
                                        data-aos="zoom-in"
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
                                            </h1>
                                        </div>
                                        <div className="title">
                                            <h2>
                                                Качественное образование должно быть доступным для всех людей, внезависимости от финансовой ситуации
                                            </h2>
                                        </div>
                                        <div className="title">
                                            <Link onClick={this.scrollTop} to="/galereya">Фотогалерея</Link>
                                            <a onClick={this.scrollTop} href="/">Связаться с нами</a>
                                        </div>
                                    </div>

                                    <div 
                                        className="main4 mtop-0"
                                        data-aos="zoom-in-up"
                                        data-aos-duration="1500"
                                    >
                                        <div className="main_title">
                                            <div className="vector">
                                                <h1>Новости</h1>
                                                <img src={vector} alt="" />
                                            </div>
                                        </div>
                                        <div className="main4_grid">
                                            {this.state.data1.map((m, index)=>{
                                                return(
                                                    <div className="grid_list" key={index}>
                                                        <Link onClick={this.scrollTop} to={`/news${m.id}`} className="list_img"><img src={m.img} alt="" /></Link>
                                                        <div>
                                                            <h1><Link onClick={this.scrollTop} to={`/news${m.id}`} >{m.name}</Link></h1>
                                                            <div className="m4_date">
                                                                <div><img src={calendar} alt="" /><p>{m.date}</p></div>
                                                                <div></div>
                                                            </div>
                                                            <h2>{m.comment.substring(0, 90)}{m.comment.length > 90 ? "..." : ""} <Link onClick={this.scrollTop} to={`/news${m.id}`}>Подробнее</Link></h2>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div 
                                        className="main2"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                    >
                                        <div className="main_title">
                                            <div className="vector">
                                                <h1>Радио школы</h1>
                                                <img src={vector} alt="" />
                                            </div>
                                            <h2>Поступление в нашу школу осуществляется тремя простыми шагами, при каждом шаге наши специалисты готовы помоч вам</h2>
                                        </div>
                                        <div className="audio">
                                            <div>
                                                <audio src={faded} controls></audio>
                                            </div>
                                            <div>
                                                <h1>ZMB FM</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div 
                                        className="main4"
                                        data-aos="fade-right"
                                        data-aos-duration="1500"
                                    >
                                        <div className="main_title">
                                            <div className="vector">
                                                <h1>Новости</h1>
                                                <img src={vector} alt="" />
                                            </div>
                                        </div>
                                        <div className="main4_grid">
                                            {this.state.data1.map((m, index)=>{
                                                return(
                                                    <div className="grid_list" key={index}>
                                                        <Link onClick={this.scrollTop} to={`/news${m.id}`} className="list_img"><img src={m.img} alt="" /></Link>
                                                        <div>
                                                            <h1><Link onClick={this.scrollTop} to={`/news${m.id}`} >{m.name}</Link></h1>
                                                            <div className="m4_date">
                                                                <div><img src={calendar} alt="" /><p>{m.date}</p></div>
                                                                <div></div>
                                                            </div>
                                                            <h2>{m.comment.substring(0, 90)}{m.comment.length > 90 ? "..." : ""} <Link onClick={this.scrollTop} to={`/news${m.id}`}>Подробнее</Link></h2>
                                                        </div>
                                                    </div>
                                                )
                                            })}
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
 
export default News;