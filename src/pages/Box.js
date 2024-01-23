import React from 'react'
import { useEffect, useState } from 'react'

const Box = () => {

    const [plusCount, setPlusCount] = useState(0);
    const [minusCount, setMinusCount] = useState(0);
    console.log("minusCount:", minusCount)
    const handlePlusClick = () => {
        setPlusCount(plusCount + 1)
    }

    const handleMinusClick = () => {
        setMinusCount(minusCount - 1)
    }

    useEffect(() => {
        if (plusCount === 5) {
            setPlusCount("Thank You..!")
        }
        if (minusCount === -5) {
            setMinusCount("Thank You..!")
        }
    }, [plusCount, minusCount])

    const ResetClick = () => {
        setPlusCount(0)
        setMinusCount(0)
    }

    const [count, setCount] = useState(0);
    const maxCount = 5;
    const minCount = -5;

    const handleIncrement = () => {
        if (count < maxCount) {
            setCount(count + 1);
        } else {
            alert('Thank you!');
        }
    };

    const handleDecrement = () => {
        if (count > minCount) {
            setCount(count - 1);
        } else {
            alert('Thank you!');
        }
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className='flex justify-center'>
            <div>
                <h1>useEffect Function</h1>
                <p>Plus Count :{plusCount}</p>
                <p>Minus Count :{minusCount}</p>
                <button
                    className='border border-slate-500 text-center px-1 py-1 mx-2'
                    onClick={handlePlusClick}>
                    + Click
                </button>
                <button
                    className='border border-slate-500 text-center px-1 py-1 mx-2'
                    onClick={handleMinusClick}>
                    - Click
                </button>
                <button
                    className='border border-slate-500 text-center px-1 py-1 mx-2'
                    onClick={ResetClick}>
                    Reset Count
                </button>
                <br />
                <h1>Count: {count}</h1>
                <button
                    className='border border-slate-500 text-center px-1 py-1 mx-2'
                    onClick={handleIncrement}>
                    Plus
                </button>
                <button className='border border-slate-500 text-center px-1 py-1 mx-2'
                    onClick={handleDecrement}>
                    Minus
                </button>
                <button
                    className='border border-slate-500 text-center px-1 py-1 mx-2'
                    onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Box