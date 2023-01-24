# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](src/images/Screenshot%202023-01-24%20at%2014-19-15%20Advice%20generator.png)

### Links

- Live Site URL: [live site URL here](https://advice-randomly-generated.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This is a small project to practice working with React and fetching data from an API. I'm really proud of the component created with react:


```jsx
import React, { useState, useEffect } from 'react';
import Image from '../images/icon-dice.svg';
import Pattern from '../images/pattern-divider-mobile.svg'

const Generator = () => {
    const [advice, setAdvice] = useState("");
    const [adviceNumber, setAdviceNumber] = useState(Math.floor(Math.random() * 401) + 1);
    const [error, setError] = useState(null);

    const fetchAdvice = async () => {
        try {
        const response = await fetch(`https://api.adviceslip.com/advice/${adviceNumber}`);
        const data = await response.json();
        setAdvice(data.slip.advice);
        setError(null);
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

```
### Continued development

I'm looking forward to improve working with React.

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=1561s) - This helped me to better understand React.
- [Example resource 2](https://www.youtube.com/watch?v=Oive66jrwBs) - This is helped me to understand how Fetch API works.

## Author

- Frontend Mentor - [@Alberto-12](https://www.frontendmentor.io/profile/Alberto-12)

## Acknowledgments

I'm very thankful for my mentor [Tresure Kabareebe](https://github.com/trekab) that guided me through the process.

