import React, {Component} from 'react';
import {Container,Row,Col} from 'reactstrap'
import Card from './Card'
import Image1 from '../../assets/img/img2.jpg'
import Image2 from '../../assets/img/img1.jpg'
import Image3 from '../../assets/img/img3.jpg'

class Section1 extends Component {
    render() {
        return (
            <div className={'section1'}>
                <Container>
                    <Row>
                        <Col className={'col-xs-12'}>
                            <h1 className={'text-center'}>Hi, this is the first Section</h1>
                            <p className={'text-center'}>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={'col-sm-4'}>
                            <Card image={Image1} title={"Mercedes Benz"} message={"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum"}/>
                        </Col>
                        <Col className={'col-sm-4'}>
                            <Card image={Image2} title={"Mercedes Benz"} message={"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum"}/>
                        </Col>
                        <Col className={'col-sm-4'}>
                            <Card image={Image3} title={"Mercedes Benz"} message={"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum"}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Section1;