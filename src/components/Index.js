import React, {Component} from 'react';
import Header from './Header/Index';
import Section1 from './Section1/Index';
import Section2 from './Section2/Index';
import Section3 from './Section3/Index';
import Section4 from './Section4/Index';
import Footer from './Footer/Index';
class ParallaxApp extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Footer/>
            </div>
    );
    }
}

export default ParallaxApp;