import React, { Component } from 'react';
import "../css/footer.css"
import Logo from  "./icons/Logo.png"

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <footer >
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
                            <a href="#">Case Studies</a>
                            <a href="#">Research Papers</a>
                            <a href="#">Industry Trends</a>
                            <a href="#">Buyers Guides</a>
                        </div>
                        <div>
                            <h1>Follow Us</h1> <br />
                            <a href="#">YouTube</a>
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagramm</a>
                        </div>
                    </div>
                    <div className="footer_down">
                        <div className="fd_1">
                            <div>
                                <p>© 2021 <a href="#">Algorithm Gateway</a> , LLC et al. All rights reserved</p>
                            </div>
                            <div>
                                <a href="#">Terms of Service</a>
                                <a href="#">Privacy Policy </a>
                                <a href="#">Compliances</a>
                            </div>
                        </div>
                        <div>
                            <h1>American Trade Exchange, Inc. doing business as Vertbase operates in full compliance with both federal and state laws and regulations. Sequoir adopts Anti-Money Laundering (AML) and Know Your Customer (KYC) policies to prevent and mitigate possible risks and violations. Currently, Sequoir does not provide sales of virtual currency to residents from the following states: AK, CT, HI, ME, NH, NY, RI, VT, and WA State. We are in the process of reviewing and acquiring money transmitter license and bit-license requirements in those states and hope to be able to serve you in the near future.</h1>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
         );
    }
}
 
export default Footer;