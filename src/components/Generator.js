import React, { useState, useEffect } from 'react';
import Image from '../images/icon-dice.svg';
import Pattern from '../images/pattern-divider-mobile.svg'

const Generator = () => {
    const [advice, setAdvice] = useState("");
    const [adviceNumber, setAdviceNumber] = useState(Math.floor(Math.random() * 401) + 1);
    /*const [error, setError] = useState(null);*/

    const fetchAdvice = async () => {
        try {
        const response = await fetch(`https://api.adviceslip.com/advice/${adviceNumber}`);
        const data = await response.json();
        data.slip === undefined ? setAdvice(data.message.text): setAdvice(data.slip.advice);
        /*setError(null);*/
    } catch (error) {
        console.error(error);
    }
}

    useEffect(()=> {
        fetchAdvice();
    }, [adviceNumber,fetchAdvice])
   

    const handleClick = async () => {
        const randomAdviceId = Math.floor(Math.random() * 401) + 1;
        setAdviceNumber(randomAdviceId);

    }

    return (
        <div id="advice-box">
            <h1>advice #{adviceNumber}</h1>
            <p id="text">{advice}</p>
            <img id="pattern" src={Pattern} alt="Pattern Divider"/>
            <button type="button" id="btn" onClick={handleClick}><img id="dice" src={Image} alt="Icon Dice"/></button>
        </div>
    )
}

export default Generator



