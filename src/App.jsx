// ----- FIRST CODE ---

// learn import and using function js on react.js and link between every react componen

import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Food from './Food/Food.jsx'
import Card from './Card/Card.jsx'

// ----- SECOND CODE -----

// HOW TO STYLE REACT COMPONENT WITH CSS
// (not including external frameworks or preprocessor)

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

// ----- EXTERNAL -----

import Button from './Button/Button.jsx'

// ----- THIRD CODE -----

// props = read-only properties that are shared between components.
// A parent component can send data to a child components.
// <Component key = value/>

import Student from "./Student/Student.jsx";

// ----- FORTH CODE -----

// Conditional Rendering

import UserGreeting from "./UserGreeting/UserGreeting.jsx"

// ----- FIVE CODE -----

// render list

import List from "./List/List.jsx";

// ----- SIX CODE -----

// click event = An interaction when a user clicks on a specific element.
// we can respond to click by passing
// a callback to the onClick event handler

import ButtonOuch from "./Button/ButtonOuch.jsx";
// import Card from "./Card.jsx";

// ----- SEVEN CODE -----

// React hook = Special function that allows function components
// to use React features without writing class components 
// (useState, useEffect, useContext, useReducer, useCallback, and more)

// useState() = A React hook that allows the creation of a stateful variable 
// and a setter function to update its value in the virtual DOM
// [name, setName]

import Counter from "./Counter/Counter.jsx";

// ----- EIGHT CODE -----

// onChange = event handler used primarily with form elements 
// ex. <input>, <textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes

import MyComponent from "./MyComponent/MyComponent.jsx";

// ----- NINE CODE -----
// ----- COLOR PICKER PROGRAM -----

import ColorPicker from "./ColorPicker/ColorPicker.jsx" 

// ----- TEN CODE -----

// updater function = A function passed as an argument to setState() usually
// ex. setYear(y => y + 1)
// Allow for safe updates based on the previous state
// Used with multiple state updates and asynchronous functions
// Good practice to use updater functions

// import Counter from "./Counter/Counter.jsx";

// ----- ELEVEN CODE -----

// import MyComponent from "./MyComponent.jsx"

// ----- TWELVE CODE -----
// ----- TO DO LIST PROGRAM CODE -----

import ToDoList from "./ToDoList/ToDoList.jsx";

// ----- THIRTEEN CODE -----
// ----- USE EFFECT HOOK PROGRAM CODE -----

// useEffect () = React Hook that tells React DO SOME CODE (pick one):
// This component re-renders
// This component mounts
// The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})           // Runs after every re-render
// 2. useEffect(() => {}, [])       // Runs only on mount
// 3. useEffect(() => {}, [value])  // Runs on mount + when value changes

// USES

// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

// import MyComponent from "./MyComponent.jsx";

// ----- THIRTEEN CODE -----
// ----- DIGITAL CLOCK PROGRAM CODE -----

import DigitalClock from "./DigitalClock/DigitalClock.jsx";

// ----- FIVETEEN CODE -----
// ----- Learn useContent() -----

import ComponentA from "./Component/ComponentA.jsx";
import React, {useState, useEffect, useRef} from "react";

// ----- SIX TEEN CODE -----

// import MyComponent from "./MyComponent.jsx";
// import ComponentA from "./Component/ComponentA.jsx";

// ----- SEVEN TEEN CODE -----

import Stopwatch from "./Stopwatch/Stopwatch.jsx";

// IMPORT STYLE
import './index.css';

function App(){

    // Data for List
    
    const fruits =  [{id: 1, name: "apple", calories: 95}, 
                     {id: 2, name: "orange", calories: 45}, 
                     {id: 3, name: "banana", calories: 105}, 
                     {id: 4, name: "coconut", calories: 159}, 
                     {id: 5, name: "pineapple", calories: 37}];

    const vegetables =  [{id: 6, name: "potatoes", calories: 110}, 
                         {id: 7, name: "celery", calories: 15}, 
                         {id: 8, name: "carrots", calories: 25}, 
                         {id: 9, name: "corn", calories: 63}, 
                         {id: 10, name: "broccoli", calories: 50}];

    // ----- Render -----

    return(
        <>  
            {/* ----- FIRST CODE --- */}
            <Header/>
            <Card/>
            <Food/>

            {/* ----- SECOND CODE -----*/}
            <Button/>
            
            {/* ----- THIRD CODE -----*/}
            <>
                <Student name = "Spongebob" age = {30} isStudent = {true}/>
                <Student name = "Patrick" age = {42} isStudent = {false}/>
                <Student name = "Squidward" age = {50} isStudent = {false}/>
                <Student name = "Sandy" age = {20} isStudent = {true}/>
                <Student /> {/* default student */}
            </>
            
            {/* ----- FORTH CODE ----- */}
            <UserGreeting isLoggedIn = {true} username = "Yobel Codot"/>

            {/* ----- FIVE CODE -----*/}
            {/* List */}
            <>
                {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
                {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>} 
            </>
            
            {/* ----- SIX CODE -----*/}
            <ButtonOuch/>

            {/* ----- SEVEN CODE -----*/}
            <Counter/>

            {/* ----- EIGHT CODE -----*/}
            {/* <MyComponent/> */}s

            {/* ----- NINE CODE -----*/}
            <ColorPicker/>

            {/* ----- TEN CODE -----*/}
            {/* <Counter/> */}

            {/* ----- ELEVENT CODE -----*/}
            {/* <MyComponent/> */}

            {/* ----- TWELVE CODE -----*/}
            <ToDoList/>

            {/* ----- THIRTEEN CODE -----*/}
            <DigitalClock/>

            {/* ----- THIRTEEN CODE -----*/}
            <ComponentA/>

            {/* ----- FOURTEEN CODE -----*/}
            <></>

            {/* ----- FIVETEEN CODE -----*/}
            <Stopwatch/>

            {/* THIS IS FOOTER */}
            <Footer/>
        </>
    );
}

export default App
