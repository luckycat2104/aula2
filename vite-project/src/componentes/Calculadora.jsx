import React, { useState } from 'react';

function Calculadora() {
    const [null1, setNull1] = useState(0);
    const [null2, setNull2] = useState(0);
    const [result, setResult] = useState("");
    
    return <>
    <h1>Calculadora React</h1>
    <input 
        type="number"
        value={null1}
        onChange={(event) => setNull1(parseFloat(event.target.value))}
    ></input>
    <input 
        type="number"
        value={null2}
        onChange={(event) => setNull2(parseFloat(event.target.value))}
    ></input>
    <div>
        <button onClick={() => setResult(null1 + null2)}>+</button>
        <button onClick={() => setResult(null1 - null2)}>-</button>
        <button onClick={() => setResult(null1 * null2)}>*</button>
        <button onClick={() => setResult(null1 / null2)}>/</button>
    </div>
    
    <p>{result}</p>
    </>;
}

export default Calculadora;