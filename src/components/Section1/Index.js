import React, {Component} from 'react';
import {Container, Row,Col,Button} from 'reactstrap'
class Section1 extends Component {
    render() {
        return (
            <div className={'section1'}>
                <Container>
                    <Row>
                        <Col className={'col-xs-12'}>
                            <h2 className={'text-center'}>Welcome To Parallax Page View With React And Bootstrap</h2>
                            <p className={'lead text-center'}>Cum sociis natoque penatibus et magnis dis.</p>
                            <p className={'text-center'}>
                                <Button className={'btn btn-danger'}>See more</Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Section1;