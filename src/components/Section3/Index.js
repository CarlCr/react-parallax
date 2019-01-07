import React, {Component} from 'react';
import {Container,Row,Col} from 'reactstrap'
import Card from './Card'
import Image1 from '../../assets/img/img2.jpg'
import Image2 from '../../assets/img/img1.jpg'
import Image3 from '../../assets/img/img3.jpg'

class Section3 extends Component {
    render() {
        return (
            <div className={'section3'}>
                <Container>
                    <Row>
                        <Col className={'col-sm-4'}>
                            <Card image={Image1} title={"Paisagens em Angola"} message={"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum"}/>
                        </Col>
                        <Col className={'col-sm-4'}>
                            <Card image={Image2} title={"Quedas em Angola"} message={"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum"}/>
                        </Col>
                        <Col className={'col-sm-4'}>
                            <Card image={Image3} title={"Quedas de Kalandula"} message={"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum"}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Section3;