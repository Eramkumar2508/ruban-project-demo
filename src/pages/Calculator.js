import React, { useEffect, useState } from 'react'

const Calculator = () => {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/', '*', '+', '-'];

    const updateCalc = value => {

        if (
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
            return;
        }
        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button className='Button' onClick={() => updateCalc(i.toString())} key={i}>
                    {i}
                </button>
            )
        }
        return digits;
    }

    const deleteLast = () => {
        if (calc == '') {
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    return (
        <div className='App'>
            <div className='calculator'>
                <br />
                <div className='display'>
                    {result ? <span className='displaySpan'>({result})</span> : ''}
                    {calc || "0"}
                </div>
                {/* <br /> */}
                <div className='operators'>
                    <button className='operatorsButton' onClick={() => updateCalc('+')}>+</button>
                    <button className='operatorsButton' onClick={() => updateCalc('-')}>-</button>
                    <button className='operatorsButton' onClick={() => updateCalc('*')}>x</button>
                    <button className='operatorsButton' onClick={() => updateCalc('/')}>%</button>
                    <br />
                    <button onClick={deleteLast}
                        className='deleteButton'
                    >DELETE</button>
                </div>
                {/* <br /> */}
                <div className=''>{createDigits()}
                    {/* </div> */}
                    {/* <br /> */}
                    {/* <div className='digits'> */}

                    <button className='Button'
                        onClick={() => updateCalc('0')}>0</button>
                    <button className='Button'
                        onClick={() => updateCalc('.')}>.</button>
                    <button className='digitsButton'
                        onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator