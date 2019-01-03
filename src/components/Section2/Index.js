import React, {Component} from 'react';
import {Container,Row,Col} from 'reactstrap'

class Section2 extends Component {
    render() {
        return (
            <div className={'section2'}>
                <Container>
                    <Row>
                        <Col className={'col-xs-12'}>
                            <h1 className={'text-center'}>Hi, this is the first Section</h1>
                            <p className={'text-center'}>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Section2;