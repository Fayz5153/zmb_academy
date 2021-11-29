import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ZMB } from '../context/context';
import CircularProgress from '@material-ui/core/CircularProgress';

class Galereya extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            banner:[],
         }
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }
    componentDidMount() {
        axios.get("http://zmbacademy.uz:8080/parties/")
        .then((res) => {
            const data = res.data;
            this.setState({ data: data });
        });
        axios.get("http://zmbacademy.uz:8080/photo-gallery/")
        .then((res) => {
            setTimeout(() => {
                const banner = res.data;
                this.setState({ banner: banner });
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
                                <div className="main_asos" onClick={x.searchClose}>
                                    {this.state.banner.length === 0 ?
                                        <div className="circule"><CircularProgress /></div> :
                                        
                                        <div 
                                            className="nav_title"
                                            style={{
                                                background:`linear-gradient(150deg, rgba(9, 235, 223, 0.4) -37.75%, rgba(12, 24, 39, 0.4) 22%), url(${this.state.banner[0].image}), #C4C4C4`,
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
                                    
                                    <div className="galereya">
                                        {this.state.data.map((m)=>{
                                            return(
                                                <Link to={`/galereya${m.id}`}>
                                                    <div data-aos="fade-up" data-aos-duration="1500" className="img_hover">
                                                        <img src={m.image} alt="" />
                                                        <h1>
                                                            {x.til === "uz" ? m.name
                                                            : x.til === "ru" ? m.name_ru
                                                            : m.name_en}
                                                        </h1>
                                                        <div>
                                                            <p>
                                                                {x.til === "uz" ? m.description.substring(0, 40)
                                                                : x.til === "ru" ? m.description_ru.substring(0, 40)
                                                                : m.description_en.substring(0, 40)}
                                                                {m.description.length > 40 ? "..." : ""}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })}
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
 
export default Galereya;