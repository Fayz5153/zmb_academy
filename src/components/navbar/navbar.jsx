import React, { Component } from 'react';
import axios from 'axios';
import { ZMB } from '../context/context';
import { NavLink } from 'react-router-dom';

// Image import
import uzb from "../icons/uzb.svg";
import rus from "../icons/rus.svg";
import ukd from "../icons/ukd.svg";

// Style import
import "../css/navbar.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            scroll: 0,
            data:[]
        }
    }
    componentDidMount() {
        axios.get("http://URL/logo/")
        .then((res) => {
            const data = res.data;
            this.setState({ data: data });
        });

        window.addEventListener('scroll', this.listenToScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }
    listenToScroll = () => {
        const winScroll =  document.body.scrollTop || document.documentElement.scrollTop

        this.setState({
            scroll: winScroll,
        })
    }
    render() { 
        return ( 
            <React.Fragment>
                <ZMB.Consumer>
                    {(x)=>{
                        return(
                            <React.Fragment>
                                <div className="navbar_asos">
                                    <nav className={this.state.scroll < 30 ? '' : 'nav_scrolled'}>
                                        <div>
                                            <button onClick={x.handleburger} className="burger_open">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </button>
                                        </div>
                                        <div>
                                            <a href="/" className="logo">
                                                <img src={this.state.data.length === 0 ? "" : this.state.data[0].img} alt="" />
                                            </a>
                                        </div>
                                        <div className="nav_right">
                                            <div className="til_pick">
                                                <button onClick={x.handleTil}><img src={x.TIL().FLAG} alt="" /></button>
                                                <div className={x.til_change ? "please_pick" : ""}>
                                                    {x.til === "ru" ? "" : <button onClick={x.handleRu}><img src={rus} alt="" /></button>}
                                                    {x.til === "uz" ? "" : <button onClick={x.handleUz}><img src={uzb} alt="" /></button>}
                                                    {x.til === "en" ? "" : <button onClick={x.handleEn}><img src={ukd} alt="" /></button>}
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                    <div onClick={x.handleburger} className={x.burger === true ? "tt1 toggle" : "toggle" }>
                                        <ul>
                                            <button onClick={x.handleburger} className="burger_close">
                                                <span></span><span></span>
                                            </button>
                                            <li><NavLink activeClassName="active" exact to="/" onClick={x.burgerClose}>{x.TIL().N0}</NavLink></li>
                                            <li><NavLink activeClassName="active" to="/maktab" onClick={x.burgerClose}>{x.TIL().N1}</NavLink></li>
                                            <li><NavLink activeClassName="active" to="/qabul" onClick={x.burgerClose}>{x.TIL().N4}</NavLink></li>
                                            <li><NavLink activeClassName="active" to="/news" onClick={x.burgerClose}>{x.TIL().N5}</NavLink></li>
                                            <li><NavLink activeClassName="active" to="/galereya" onClick={x.burgerClose}>{x.TIL().GALEREYA}</NavLink></li>
                                            <li><NavLink activeClassName="active" to="/maktabhayoti" onClick={x.burgerClose}>{x.TIL().N6}</NavLink></li> 
                                        </ul>
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

export default Navbar;