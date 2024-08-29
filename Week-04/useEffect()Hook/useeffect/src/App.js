import React from "react";
import ExampleComponent from "../src/Basic Usage of useEffect/ExampleComponent"; // Correct the path here
import TimerComponent from './Effect Hook with Cleanup/TimerComponent'
import FetchDataComponent from './Conditional Effects/FetchDataComponent'
import MultipleEffectsComponent from './Using Multiple useEffect Hooks/MultipleEffectsComponent'
import UseRef from './UseState,UseEffect,and,UseRef/UseRef'
import BlogApp from "./BlogApp Project/BlogApp";
import Counter from "./UseReducer() Hook/useReducer";

function App() {

  return(
    <>
    <div style={{textAlign:'center', background:'yellow'}}>
        <h2>Basic Usage of useEffect</h2> 
      <ExampleComponent />
    </div>
    <br/>
    <div style={{textAlign:'center', background:'MediumSeaGreen'}}>
    <h2>Effect Hook with Cleanup</h2>
     <TimerComponent/>
    </div>
    <br/>
    <div style={{textAlign:'center', background:'rgb(255, 0, 0)'}}>
      <h2>Conditional Effects</h2>
      <FetchDataComponent />  
    </div>
    <br/>
    <div style={{textAlign:'center', background:'#f2f'}}>
      <h2>Using Multiple useEffect Hooks</h2>
      <MultipleEffectsComponent />  {/* Correct the component name here */}  
    </div>
    <br/>
     <div style={{background:'#ffa500'}}>
     <BlogApp/>
     </div>
     <br/>
     <div style={{textAlign:'center', background:'#f9f9'}}>
      <h2>UseState, UseEffect, and UseRef</h2>
      <UseRef />  {/* Correct the component name here */}
     </div>
     <br/>
     <div style={{textAlign:'center', background:'#f5f'}}>
      <h2>UseReducer() Hook</h2>  
      <Counter/>

     </div>
     
    </>
   
  );
}

export default App;
