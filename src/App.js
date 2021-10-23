import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';
import Main from './components/pages/main';
import Maktab from './components/pages/Maktab';
import Oquv_yili from './components/pages/Oquv_yili';
import Fanlar from './components/pages/Fanlar';
import Qabul from './components/pages/Qabul';
import News from './components/pages/News';
import News_single from "./components/pages/News_single"
import Masofadan_oqish from './components/pages/Masofadan_oqish';
import Galereya from './components/pages/Galereya';
import Maktab_hayoti from './components/pages/Maktab_hayoti';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/maktab" component={Maktab} />
                        <Route path="/oquvyili" component={Oquv_yili} />
                        <Route path="/fanlar" component={Fanlar} />
                        <Route path="/qabul" component={Qabul} />
                        <Route path="/news" component={News} />
                        <Route path="/news:id" component={News_single} />
                        <Route path="/maktabhayoti" component={Maktab_hayoti} />
                        <Route path="/galereya" component={Galereya} />
                    </Switch>
                    <Footer/>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
