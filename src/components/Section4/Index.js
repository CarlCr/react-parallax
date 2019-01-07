import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap'
class Section4 extends Component {
    render() {
        return (
            <div className={'section4'}>
                <Container>
                    <Row>
                        <Col className={'col-xs-12'}>
                            <h1 className={'text-center'}>Get More Info</h1>
                            <p className={'lead text-center'}>
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                                Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Section4;