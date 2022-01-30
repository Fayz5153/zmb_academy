import React, { Component } from 'react';
import axios from 'axios';
import { ZMB } from "../context/context";
import { NavLink } from 'react-router-dom';

// Style import
import "../css/footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }
    componentDidMount() {
        axios.get("http://URL/logo/")
        .then((res) => {
            const data = res.data;
            this.setState({ data: data });
        });
    }
    render() { 
        return ( 
            <React.Fragment>
                <ZMB.Consumer>
                    {(x)=>{
                        return(
                            <React.Fragment>
                                <footer onClick={x.searchClose} >
                                    <div className="footer_up">
                                        <div>
                                            <img src={this.state.data.length === 0 ? "" : this.state.data[0].img} alt="" />
                                            <div className="footer_icons1">
                                                {x.TIL().MANZIL}
                                            </div>
                                            <br />
                                            <div className="footer_icons2">
                                                <h1>info@zmbacademy.uz</h1>
                                            </div>
                                            <br />
                                            <div className="footer_icons3">
                                                <h1>{x.TIL().CONTACT_US}</h1>
                                                <h1>{this.state.data.length === 0 ? "" : this.state.data[0].phone}</h1>
                                                <h1>+998 90 202 99 94</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <h1>{x.TIL().RESOURCES}</h1> <br />
                                            <NavLink activeClassName="active" to="/maktab" onClick={x.burgerClose}>{x.TIL().N1}</NavLink>
                                            <NavLink activeClassName="active" to="/fanlar" onClick={x.burgerClose}>{x.TIL().N3}</NavLink>
                                            <NavLink activeClassName="active" to="/qabul" onClick={x.burgerClose}>{x.TIL().N4}</NavLink>
                                            <NavLink activeClassName="active" to="/news" onClick={x.burgerClose}>{x.TIL().N5}</NavLink>
                                            <NavLink activeClassName="active" to="/galereya" onClick={x.burgerClose}>{x.TIL().GALEREYA}</NavLink>
                                            <NavLink activeClassName="active" to="/maktabhayoti" onClick={x.burgerClose}>{x.TIL().N6}</NavLink>
                                        </div>

                                        <div>
                                            <h1>{x.TIL().FALLOW}</h1> <br />
                                            <a href="https://www.youtube.com/channel/UCuiSUe-42FUHHxCDju1SFjg">YouTube</a>
                                            <a href="https://www.facebook.com/ZMBUniversalAcademyANDIJAN">Facebook</a>
                                            <a href="https://t.me/ZMB_UniversalAcademy">Telegram</a>
                                            <a href="https://www.instagram.com/zmb_universalacademy/?utm_medium=copy_link">Instagramm</a>
                                        </div>
                                    </div>
                                    <div className="footer_down">
                                        <div className="fd_1">
                                            <div>
                                                <p>© 2021 <a href="/">Algorithm Gateway ,</a> </p> <p>LLC et al. All rights reserved</p>
                                            </div>
                                            <div>
                                                <a href="/">Terms of Service</a>
                                                <a href="/">Privacy Policy </a>
                                                <a href="/">Compliances</a>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </React.Fragment>
                        )
                    }}
                </ZMB.Consumer> 
                
            </React.Fragment>
         );
    }
}
 
export default Footer;