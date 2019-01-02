import React, {Component} from 'react';
import Header from './Header/Index';
import Section1 from './Section1/Index';
class ParallaxApp extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Section1/>
            </div>
    );
    }
}

export default ParallaxApp;