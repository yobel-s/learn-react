// ----- FIRST CODE -----

// import React, {useState} from 'react';
// 
// function MyComponent(){
// 
//     // we use a destructuring a two elements and create a stateful variable for a name an
//     const [name, setName] = useState("Guest"); // use state function return an array with two 
//         elements a variable and a setter function
//     // add age variable and increment it
//     const [age, setAge] = useState(0);
//     // add boolean
//     const [isEmployed, setIsEmployed] = useState(false);
// 
//     const updateName = () => {
//         setName("Spongebob"); // when you use the setter function of stateful variable it will trigger 
//         a render of the virtual Dom 
//     }
//     const updateAge = () => {
//         setAge(age + 1);  
//     }
//         const toggleEmployedStatus = () => {
//         setIsEmployed(!isEmployed); // when you use the setter function of stateful variable it will trigger a 
//         render of the virtual Dom 
//     }
// 
//     return( <div>
//                 <p>Name: {name}</p>
//                 <button onClick={updateName}>Set Name</button>
// 
//                 <p>Age: {age}</p>
//                 <button onClick={updateAge}>Increment Age</button>
// 
//                 <p>is Employed: {isEmployed ? "Yes" : "No"} </p>
//                 <button onClick={toggleEmployedStatus}>Yes or No</button>
//             </div>);
// }
// 
// export default MyComponent

// ----- SECOND CODE -----

// onChange = real time changes immediately in value

// import {useState} from 'react';
// 
// function MyComponent(){
// 
//     const [name, setName] = useState("");
//     const [quantity, setQuantity] = useState(1);
//     const [comment, setComment] = useState("");
//     const [payment, setPayment] = useState("");
//     const [shipping, setShipping] = useState("");
// 
//     function handleNameChange (event){
//         setName(event.target.value);
//     }
// 
//     function handleQuantityChange (event){
//         setQuantity(event.target.value);
//     }
// 
//     function handleCommentChange (event){
//         setComment(event.target.value);
//     }
// 
//     function handlePaymnentChange (event){
//         setPayment(event.target.value);
//     }
// 
//     function handleShippingChange (event){
//         setShipping(event.target.value);
//     }
// 
//     return (<div>
//                 <input value={name} onChange={handleNameChange}/>
//                 <p>Name: {name}</p>
// 
//                 <input value={quantity} onChange={handleQuantityChange} type="number"/>
//                 <p>Quantity: {quantity}</p>
// 
//                 <textarea value={comment} onChange={handleCommentChange}
//                 placeholder="Enter delivery instruction"/>
//                 <p>Comment: {comment}</p>
// 
//                 <select name="" id="" value={payment} onChange={handlePaymnentChange}>
//                     <option value="">Select an option</option>
//                     <option value="Visa">Visa</option>
//                     <option value="Mastercard">Mastercard</option>
//                     <option value="Giftcard">Giftcard</option> 
//                 </select>
//                 <p>Payment: {payment}</p>
//                 
//                 <label>
//                     <input type="radio" value="Pick up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
//                     Pick Up
//                 </label>
//                 <label>
//                     <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
//                     Delivery
//                 </label>
//                 <p>Shipping: {shipping}</p>                
//             </div>);
// }
// export default MyComponent

// ----- THIRD CODE -----

// import React, {useState} from "react";
// 
// function MyComponent(){
// 
//     const [car, setCar] = useState({year: 2024, 
//                                     make: "Ford", 
//                                     model: "Mustang"});  
//                                     
//     function handleYearChange(event){
//         
//         setCar(car => ({...car, year: event.target.value}));
//     }
//     function handleMakeChange(event){
// 
//         setCar(c => ({...c, make: event.target.value}));
//     }
//     function handleModelChange(event){
// 
//         setCar(c => ({...c, model: event.target.value}));
//     }
// 
//     return(<div>
//                 <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
// 
//                 <input type="number" value={car.year} onChange={handleYearChange}/><br />
//                 <input type="text" value={car.make} onChange={handleMakeChange}/><br />
//                 <input type="text" value={car.model} onChange={handleModelChange}/>
//             </div>);
// }
// export default MyComponent

// ----- FORTH CODE -----

// import React, {useState} from "react";
// 
// function MyComponent(){
// 
//     const[foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
// 
//     function handleAddFood(){
// 
//         const newFood = document.getElementById("foodInput").value;
//         document.getElementById("foodInput").value = "";
// 
//         setFoods(foods => [...foods, newFood]);
//     }   
// 
//     function handleRemoveFood(index){
//         
//         setFoods(foods.filter((_element, index) => index !== index));
//     }
// 
//     return (<div>
//                 <h2>List of food</h2>
//                 <ul>
//                     {foods.map((food, index) => 
//                     <li key={index} onClick={() => handleRemoveFood (index)}>
//                         {food}
//                     </li>)}
//                 </ul>
//                 <input type="text" id="foodInput" placeholder="Enter food name"/>
//                 <button onClick={handleAddFood}>Add Food</button>
//             </div>);
// }
// 
// export default MyComponent;

// ----- FIVE CODE -----

// import React, {useState} from "react";

// function MyComponent(){
// 
//     const [cars, setCars] = useState([]);
//     const [carYear, setCarYear] = useState(new Date().getFullYear());
//     const [carMake, setCarMake] = useState("");
//     const [carModel, setCarModel] = useState("");
// 
//     function handleAddCar(){
// 
//         const newCar = {year: carYear, 
//                         make: carMake, 
//                         model: carModel};
//         
//         setCars(cars => [...cars, newCar]);
// 
//         setCarYear(new Date().getFullYear());
//         setCarMake("");
//         setCarModel("");
//     }
// 
//     function handleRemoveCar(index){
//         setCars(c => c.filter((_, i) => i !== index));
//     }    
// 
//     function handleYearChange(event){
//         setCarYear(event.target.value);
//     }
// 
//     function handleMakeChange(event){
//         setCarMake(event.target.value);
//     }
// 
//     function handleModelChange(event){
//         setCarModel(event.target.value);
//     }
// 
//     return(<div>
//                 <h2>List of Car Objects</h2>
//                 <ul>
//                     {cars.map((car, index) => 
//                     <li key={index} onClick={() => handleRemoveCar(index)}>
//                         {car.year} {car.make} {car.model}
//                     </li>)}
//                 </ul>
// 
//                 <input type="number" value={carYear} onChange={handleYearChange}/><br />
//                 <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/><br />
//                 <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/><br />
//                 <button onClick={handleAddCar}>Add Car</button>
//             </div>)
// }
// export default MyComponent;

// ----- SIX CODE -----
// ----- USE EFFECT HOOK PROGRAM CODE -----

// import React, {useState, useEffect} from "react";
// 
// function MyComponent(){
// 
//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState("green");
// 
//     // useEffect(function, [depedencies])
//     useEffect(() => {
//         document.title = `Count: ${count} ${color}`;
// 
//         return () => {
//             // clean up code
//         }
//     }, [count, color]); // this add dont render title every time we count
// 
//     function addCount(){
//         setCount(c => c + 1);
//     }
// 
//     function substractCount(){
//         setCount(c => c - 1);
//     }
// 
//     function changeColor(){
//         setColor(c => c === "green" ? "red" : "green");
//     }
// 
//     return(<>
//         <p style={{color : color}}>Count: {count}</p>
//         <button onClick={addCount}>Add</button>
//         <button onClick={substractCount}>Substract</button>
//         <button onClick={changeColor}>Change Color</button>
//     </>);
// }
// 
// export default MyComponent;

// ----- ANOTHER EXAMPLE -----

// import React, {useState, useEffect} from "react";
// 
// function MyComponent(){
// 
//     const [width, setWidth] = useState(window.innerWidth);
//     const [height, setHeight] = useState(window.innerHeight);
// 
//     useEffect(() => {
//         window.addEventListener("resize", handleResize);
//         console.log("EVENT LISTENER ADDED");
// 
//         return () => {
//             window.removeEventListener("resize", handleResize);
//             console.log("EVENT LISTENER REMOVED");
//         }
// 
//     }, []);
// 
//     useEffect(() => {
//         document.title = `Size ${width} x ${height}`;
//     }, [width, height]);
// 
//     function handleResize(){
//         setWidth(window.innerWidth);
//         setHeight(window.innerHeight);
//     }
// 
//     return (<>
//         <p>Window Width: {width}px</p>
//         <p>Window Height: {height}px</p>
//     </>);
// }
// 
// export default MyComponent;

// ----- SEVEN EXAMPLE -----

// useState() = Re-renders the component when the state value changes.

// useRef()   = "Use Reference" Does not cause re-renders when its value changes.
// When you want a component to "remember" some information,
// but you dont want that information to trigger new renders.

// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timer and Intervals

import React, {useState, useEffect, useRef} from "react";

function MyComponent(){

    // const [input1Focus, setInput1Focus] = useState(false);
    // const [input2Focus, setInput2Focus] = useState(false);
    // const [input3Focus, setInput3Focus] = useState(false);

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED")
    });

    // function handleButtonClick(inputNumber){
    //     setInput1Focus(inputNumber === 1);
    //     setInput2Focus(inputNumber === 2);
    //     setInput3Focus(inputNumber === 3);
    // }

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    };
    
    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    };

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    };

    return (
        <div>
            <button onClick={handleClick1}>
            Click Me 1
            </button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>
            Click Me 2
            </button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>
            Click Me 3
            </button>
            <input ref={inputRef3}/>
        </div>
        
    );
}

export default MyComponent;