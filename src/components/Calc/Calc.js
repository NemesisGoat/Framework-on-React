import React from "react";
import Calculator from "../../modules/calculator/Calculator";

class Calc extends React.Component {
    constructor(props) {
        super(props);

        this.aRef = React.createRef();
        this.bRef = React.createRef();
        this.cRef = React.createRef();
    }

    operandHandler(operand) {
        const calc = new Calculator();
        const a = calc.getValue(this.aRef.current.value);
        const b = calc.getValue(this.aRef.current.value);
        const result = calc[operand](a, b);
        this.cRef.current.value = result.toString();
        if (this.cRef.current.value.includes('NaN')) {
            this.cRef.current.value = 'Да я не могу блин';
        }
    }

    getValueHandler = () => {
        const calc = new Calculator;
        let x = document.getElementById('point').value;
        let polynomial = document.getElementById('c').value;
        document.getElementById('value').value = calc.getValueAtPoint(polynomial, x);
    }

    addEventListeners() {

        const buttons = document.querySelectorAll('.operand');
        buttons.forEach(button =>
            button.addEventListener(
                'click',
                (event) => this.operandHandler(event)
            )
        );
        document.getElementById('getValueButton')
            .addEventListener(
                'click', 
                () => this.getValueHandler());

    }

    render() {
        return (<div>
            <div className="titleBlock">
                <h1 className="title" id="partOne">Calcu</h1>
                <h1 className="title" id="partTwo">lator</h1>
            </div>
            <div className="inputBlock">
                <textarea ref={this.aRef} placeholder="a" className="input"></textarea>
                <textarea ref={this.bRef} placeholder="b" className="input"></textarea>
                <textarea ref={this.cRef} placeholder="result" className="input"></textarea>
                <div className='operandBlock'>
                    <button className="operand" onClick={() => this.operandHandler("add")}>+</button>
                    <button className="operand" onClick={() => this.operandHandler("sub")}>-</button>
                    <button className="operand" onClick={() => this.operandHandler("mult")}>*</button>
                    <button className="operand" onClick={() => this.operandHandler("div")}>/</button>
                    <button className="operand" onClick={() => this.operandHandler("prod")}>scal</button>
                    <button className="operand" onClick={() => this.operandHandler("pow")}>^</button>
                </div>
                <input id="point" placeholder="Найти значение в точке" className="input"></input>
                <button id='getValueButton' className="findButton">Искать</button>
                <div></div>
                <input id="value" placeholder="Значение" className="input"></input>
                <div className="operands">
                </div>
            </div>
        </div>)
    }
}

export default Calc;