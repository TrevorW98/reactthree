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
            displayResult: false,
            nextCalc: false
        }
    }
    incrementNum = (addTo) => {
        if (this.state.displayResult !== true) {
            this.setState({ firstInput: this.state.firstInput += addTo })
        } else {
            this.setState({ secondInput: this.state.secondInput += addTo })
        }
    }
    setOperator = (newOperator) => {
        this.setState({ displayResult: true })
        this.setState({ operator: newOperator })
    }
    mathMethod = () => {
        switch (this.state.operator) {
            case "+":
                this.setState({firstInput: parseInt(this.state.firstInput) + parseInt(this.state.secondInput)})
                this.setState({secondInput: "", operator: ""})
                break;
            case "-":
                this.setState({firstInput: parseInt(this.state.firstInput) - parseInt(this.state.secondInput)})
                this.setState({secondInput: "", operator: ""})
                break;
            case "/":
                this.setState({firstInput: parseInt(this.state.firstInput) / parseInt(this.state.secondInput)})
                this.setState({secondInput: "", operator: ""})
                break;
            case "*":
                this.setState({firstInput: parseInt(this.state.firstInput) * parseInt(this.state.secondInput)})
                this.setState({secondInput: "", operator: ""})
                break;
            default:
                this.setState({ result: null, firstInput: "", secondInput: "", operator: "", clear: false, displayResult: false })
                break;
        }
    }
    clearMethod = () => {
        this.setState({
            result: null,
            firstInput: "",
            secondInput: "",
            operator: "",
            clear: false,
            displayResult: false
        })

    }
    render() {
        return (
            <Container className="mt-5">
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Disp message={this.state.firstInput} />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Disp message={this.state.operator} />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Disp message={this.state.secondInput} />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Disp message={this.state.result} />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Butt number={1} onClick={this.incrementNum} />
                        <Butt number={2} onClick={this.incrementNum} />
                        <Butt number={3} onClick={this.incrementNum} />
                        <Butt number={"+"} onClick={this.setOperator} />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Butt number={4} onClick={this.incrementNum} />
                        <Butt number={5} onClick={this.incrementNum} />
                        <Butt number={6} onClick={this.incrementNum} />
                        <Butt number={"-"} onClick={this.setOperator} />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Butt number={7} onClick={this.incrementNum} />
                        <Butt number={8} onClick={this.incrementNum} />
                        <Butt number={9} onClick={this.incrementNum} />
                        <Butt number={0} onClick={this.incrementNum} />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Butt number={"/"} onClick={this.setOperator} />
                        <Butt number={"*"} onClick={this.setOperator} />
                        <Butt number={"="} onClick={this.mathMethod} />
                        <Butt number={"C"} onClick={this.clearMethod} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default CalculationButtons;
