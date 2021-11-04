import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../css/navbar.css"
import Logo from "./icons/Logo.svg"
import search from "./icons/Search.svg"
import search1 from "./icons/Search1.svg"
import { ZMB } from '../context/context';
import uzb from "../icons/uzb.svg"
import rus from "../icons/rus.svg"
import usa from "../icons/usa.svg"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            scroll: 0,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
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
                                                <img src={Logo} alt="" />
                                            </a>
                                        </div>
                                        <div className="nav_right">
                                            <div className="til_pick">
                                                <button onClick={x.handleTil}><img src={x.TIL().FLAG} alt="" /></button>
                                                <div className={x.til_change ? "please_pick" : ""}>
                                                    {x.til === "ru" ? "" : <button onClick={x.handleRu}><img src={rus} alt="" /></button>}
                                                    {x.til === "uz" ? "" : <button onClick={x.handleUz}><img src={uzb} alt="" /></button>}
                                                    {x.til === "en" ? "" : <button onClick={x.handleEn}><img src={usa} alt="" /></button>}
                                                </div>
                                            </div>
                                            <button onClick={x.handlesearch} className="search_btn">
                                                <img src={search} alt="" />
                                            </button>
                                        </div>
                                    </nav>
                                    <div onClick={x.handleburger} className={x.burger === true ? "tt1 toggle" : "toggle" }>
                                        <ul>
                                            <button onClick={x.handleburger} className="burger_close">
                                                <span></span><span></span>
                                            </button>
                                            <li><NavLink activeClassName="active" to="/maktab" onClick={x.burgerClose}>{x.TIL().N1}</NavLink></li>
                                            {/* <li><NavLink activeClassName="active" to="/oquvyili" onClick={x.burgerClose}>{x.TIL().N2}</NavLink></li> */}
                                            <li><NavLink activeClassName="active" to="/fanlar" onClick={x.burgerClose}>{x.TIL().N3}</NavLink></li>
                                            <li><NavLink activeClassName="active" to="/qabul" onClick={x.burgerClose}>{x.TIL().N4}</NavLink></li>
                                            <li><NavLink activeClassName="active" to="/news" onClick={x.burgerClose}>{x.TIL().N5}</NavLink></li>
                                            <li><NavLink activeClassName="active" to="/galereya" onClick={x.burgerClose}>{x.TIL().GALEREYA}</NavLink></li>
                                            <li><NavLink activeClassName="active" to="/maktabhayoti" onClick={x.burgerClose}>{x.TIL().N6}</NavLink></li> 
                                            <li><NavLink activeClassName="active" to="/covid" onClick={x.burgerClose}>{x.TIL().N7}</NavLink></li> 
                                        </ul>
                                    </div>
                                    <div className="search" style={x.search === true ? {height: "60px"} : {height: "0px"} }>
                                        <img src={search1} alt="" />
                                        <input type="search" placeholder={x.TIL().POISK} name="" id="" />
                                        <button onClick={x.handlesearch} className="close_btn">
                                            <span></span><span></span>
                                        </button>
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