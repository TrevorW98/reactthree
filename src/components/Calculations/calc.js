import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Butt from '../Button/butt';
import Disp from '../Display/disp';

class CalculationButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstInput: "",
            secondInput: "",
            result: null,
            operator: "",
            clear: false,
            displayResult: false
        }

    }
    render() {
        return (
            <Container className="mt-5">
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Disp className="ml-3 mr-3">{this.props.firstInput}</Disp>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Disp className="ml-3 mr-3">{this.props.operator}</Disp>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Disp className="ml-3 mr-3">{this.props.secondInput}</Disp>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Disp className="ml-3 mr-3">{this.props.result}</Disp>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Butt number={1} className="ml-3 mr-3"/>
                        <Butt number={2} className="ml-3 mr-3"/>
                        <Butt number={3} className="ml-3 mr-3"/>
                        <Butt number={"+"} className="ml-3 mr-3"/>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Butt number={4} className="ml-3 mr-3"/>
                        <Butt number={5} className="ml-3 mr-3"/>
                        <Butt number={6} className="ml-3 mr-3"/>
                        <Butt number={"-"} className="ml-3 mr-3"/>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Butt number={7} className="ml-3 mr-3"/>
                        <Butt number={8} className="ml-3 mr-3"/>
                        <Butt number={9} className="ml-3 mr-3"/>
                        <Butt number={0} className="ml-3 mr-3"/>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Butt number={"/"} className="ml-3 mr-3"/>
                        <Butt number={"*"} className="ml-3 mr-3"/>
                        <Butt number={"="} className="ml-3 mr-3"/>
                        <Butt number={"C"} className="ml-3 mr-3"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default CalculationButtons;
