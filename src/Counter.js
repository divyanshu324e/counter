// import React from "react";
import { useState } from "react";
import "./Counter.css";

//////////////////Class based component////////////////

// class Counter extends React.Component {

//     //in class there are two function render() - to show html content and contructor()

//     constructor() {
//         super();
//         this.state = {
//             counter: 0,
//         }
//     }

//     increment() {
//         this.setState((prevState)=>{
//             return {
//                 counter: prevState.counter + 1,
//             };
//         });
//     }

//     decrement() {
//         this.setState((prevState)=>{
//             var count = prevState.counter;
//             if(count > 0){
//                 return {
//                     counter: count - 1,
//                 };
//             }
//         });
//     }

//     reset() {
//         this.setState(()=>{
//             return {
//                 counter: 0,
//             };
//         });
//     }

//     render() {
//         return (
//             <div className="counterContainer">
//                 <h2 className="counterValue">{this.state.counter}</h2>
//                 <button className="counterButton" onClick={() => {
//                     console.log("Button Clicked!!");
//                     this.increment();
//                 }}>Increment</button>

//                 <button className="counterButton" onClick={() => {
//                     console.log("Button Clicked!!");
//                     this.decrement();
//                 }}>Decrement</button>

//                 <button className="counterButton" onClick={() => {
//                     console.log("Button Clicked!!");
//                     this.reset();
//                 }}>Reset</button>
//             </div>
//         );
//     }
// }

/////////////////////function based component////////////////

function Counter(){
    const [val,setVal]=useState(0)
  
    function do_inc(){
      if(val<10)
      setVal(val+1);
    }
    function do_dec(){
      if(val>0)
      setVal(val-1);
      else{
        alert("inventory can't be less then zero")
      }
    }
    function reset(){
      setVal(0);
    }
    return (
      <div className='counterContainer'>
        <button className='counterButton' onClick={do_inc}>+</button>
        <div className='counterValue'>{val}</div>
        <button className='counterButton' onClick={do_dec}>-</button>
        <div><button className='counterButton' onClick={reset}>Reset</button></div>
      </div>
    );  
}

export default Counter;