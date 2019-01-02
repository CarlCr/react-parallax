import React, {Component} from 'react';
import Header from './Header/Index';
import Section1 from './Section1/Index';
import Section2 from './Section2/Index';
import Footer from './Footer/Index';
class ParallaxApp extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Section1/>
                <Section2/>
                <Footer/>
            </div>
    );
    }
}

export default ParallaxApp;