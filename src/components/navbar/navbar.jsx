import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../css/navbar.css"
import Logo from "./icons/Logo.svg"
import search from "./icons/Search.svg"
import search1 from "./icons/Search1.svg"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            burger: false,
            search: false,
            scroll: 0,
         }
    }
    handleburger = () =>{
        this.setState({
            burger: !this.state.burger,
            search: false
        })
    }
    handlesearch = () =>{
        this.setState({
            search: !this.state.search,
            burger: false
        })
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
                <div className="navbar_asos">
                    <nav className={this.state.scroll < 30 ? '' : 'nav_scrolled'}>
                        <button onClick={this.handleburger} className="burger_open">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <a href="/" className="logo">
                            <img src={Logo} alt="" />
                        </a>
                        <button onClick={this.handlesearch} className="search_btn">
                            <img src={search} alt="" />
                        </button>
                    </nav>
                    <div onClick={this.handleburger} className={this.state.burger === true ? "tt1 toggle" : "toggle" }>
                        <ul>
                            <button onClick={this.handleburger} className="burger_close">
                                <span></span><span></span>
                            </button>
                            <li><NavLink activeClassName="active" to="/maktab" onClick={this.handleburger}>Наша школа</NavLink></li>
                            <li><NavLink activeClassName="active" to="/oquvyili" onClick={this.handleburger}>Учебный год</NavLink></li>
                            <li><NavLink activeClassName="active" to="/fanlar" onClick={this.handleburger}>Учебные предметы</NavLink></li>
                            <li><NavLink activeClassName="active" to="/qabul" onClick={this.handleburger}>Поступление</NavLink></li>
                            <li><NavLink activeClassName="active" to="/news" onClick={this.handleburger}>Новости</NavLink></li>
                            <li><NavLink activeClassName="active" to="/maktabhayoti" onClick={this.handleburger}>Школьная жизнь</NavLink></li> 
                        </ul>
                        </div>
                    <div className="search" style={this.state.search === true ? {height: "80px"} : {height: "0px"} }>
                        <img src={search1} alt="" />
                        <input type="search" placeholder="Поиск по вебсайту" name="" id="" />
                        <button onClick={this.handlesearch} className="close_btn">
                            <span></span><span></span>
                        </button>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}

export default Navbar;