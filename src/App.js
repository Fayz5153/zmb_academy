import React, {Component} from 'react';
import Main from './components/pages/main';
import News from './components/pages/News';
import Qabul from './components/pages/Qabul';
import Maktab from './components/pages/Maktab';
import Navbar from './components/navbar/navbar';
import Mode from './components/context/context';
import Footer from './components/footer/Footer';
import Teacher from './components/pages/Teacher';
import Galereya from './components/pages/Galereya';
import { ZMB } from './components/context/context';
import News_single from "./components/pages/News_single";
import Maktab_hayoti from './components/pages/Maktab_hayoti';
import Galereya_single from './components/pages/Galereya_single';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// style import
import "./components/css/main.css"
import "./components/css/pages.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        
        return (
            <React.Fragment>
                <Mode>
                    <ZMB.Consumer>
                        {(x)=>{
                            return(
                                <React.Fragment>
                                    <Router>
                                        <Navbar/>
                                        <Switch>
                                            <Route exact path="/" component={Main}/>
                                            <Route path="/maktab" component={Maktab} />
                                            <Route path="/qabul" component={Qabul} />
                                            <Route path="/news" component={News} />
                                            <Route path="/news:id" component={News_single} />
                                            <Route path="/teacher:id" component={Teacher} />
                                            <Route path="/maktabhayoti" component={Maktab_hayoti} />
                                            <Route path="/galereya" component={Galereya} />
                                            <Route path="/galereya:id" component={Galereya_single} />
                                        </Switch>
                                        <Footer/>
                                    </Router>
                                </React.Fragment>
                            )
                        }}
                    </ZMB.Consumer>
                </Mode>
{/* 
    <ZMB.Consumer>
        {(x)=>{
            return(
                <React.Fragment>
                    
                </React.Fragment>
            )
        }}
    </ZMB.Consumer> 
*/}
            </React.Fragment>
        );
    }
}

export default App;