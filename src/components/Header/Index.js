import React, {Component} from 'react';
import Navbar from './Navbar';
import {Container, Row,Col,Button} from 'reactstrap'
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className={'header-site'}>
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
            </div>
    );
    }
}

export default Header;