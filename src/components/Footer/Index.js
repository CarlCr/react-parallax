import React, {Component} from 'react';
import {Container,Row,Col} from 'reactstrap'
class Footer extends Component {
    render() {
        return (
            <div className={'footer-site'}>
                <Container>
                    <Row>
                        <Col className={'col-xs-12'}>
                            <p className={'lead text-center'}>
                                Copyright (c) 2019 Carlos Garcia
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
    );
    }
}

export default Footer;