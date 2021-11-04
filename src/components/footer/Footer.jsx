import React, { Component } from 'react';
import { ZMB } from "../context/context";

// Image import
import Logo from  "./icons/Logo.png";

// Style import
import "../css/footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                                            <img src={Logo} alt="" />
                                            <p>
                                                American Trade Exchange, Inc. <br /> 
                                                MSB: 31000120483650
                                            </p>
                                            <br />
                                            <p>
                                                515 Pine Street <br /> 
                                                Floor 3 <br /> 
                                                Green Bay, WI 54301
                                            </p>
                                        </div>
                                        {/* <div>
                                            <h1>Capabilities</h1> <br />
                                            <a href="#">Organization</a>
                                            <a href="#">Platforms</a>
                                            <a href="#">Inbound</a>
                                            <a href="#">Intragency</a>
                                        </div> */}
                                        <div>
                                            <h1>Price & Availability</h1> <br />
                                            <h1>The Righteous Way</h1>
                                            <h1>Company</h1>
                                            <h1>Contact Us</h1>
                                        </div>
                                        <div>
                                            <h1>Resources</h1> <br />
                                            <a href="/">Case Studies</a>
                                            <a href="/">Research Papers</a>
                                            <a href="/">Industry Trends</a>
                                            <a href="/">Buyers Guides</a>
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
                                                <p>© 2021 <a href="/">Algorithm Gateway</a> , LLC et al. All rights reserved</p>
                                            </div>
                                            <div>
                                                <a href="/">Terms of Service</a>
                                                <a href="/">Privacy Policy </a>
                                                <a href="/">Compliances</a>
                                            </div>
                                        </div>
                                        <div>
                                            {/* <h1></h1> */}
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