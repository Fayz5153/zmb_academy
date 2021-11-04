import React, { Component, createContext } from 'react';
import { language } from "./languages"

export const ZMB = createContext();

class Mode extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            til: "ru",
            til_change: false,
            burger: false,
            search: false,
        }
    }
    
    handleburger = () =>{
        this.setState({
            burger: !this.state.burger,
            search: false
        })
    }
    burgerClose = () =>{
        this.setState({
            burger: false,
            search: false
        })
        this.scrollTop()
    }
    handlesearch = () =>{
        this.setState({
            search: !this.state.search,
            burger: false
        })
    }
    searchClose = () =>{
        this.setState({
            search: false
        })
    }
    scrollTop = () =>{
        window.scrollTo(0 ,0)
    }

    handleTil = () =>{
        this.setState({
            til_change: !this.state.til_change
        })
    }
    handlereturn = () =>{
		if (this.state.til === "uz") {
			return language.uz
		}
		if (this.state.til === "ru") {
			return language.ru
		}
		if (this.state.til === "en") {
			return language.en
		}
	}
    handleEn = () =>{
        this.setState({til:"en"})
        this.handleTil()
    }
    handleRu = () =>{
        this.setState({til:"ru"})
        this.handleTil()
    }
    handleUz = () =>{
        this.setState({til:"uz"})
        this.handleTil()
    }
    render() { 
        return ( 
            <ZMB.Provider
                value={{
                    ...this.state,
                    TIL:this.handlereturn,
                    handleEn:this.handleEn,
                    handleRu:this.handleRu,
                    handleUz:this.handleUz,
                    handleTil:this.handleTil,
                    handleburger:this.handleburger,
                    burgerClose:this.burgerClose,
                    handlesearch:this.handlesearch,
                    searchClose:this.searchClose,
                }}
            >
                {this.props.children}
            </ZMB.Provider>
         );
    }
}
 
export default Mode;