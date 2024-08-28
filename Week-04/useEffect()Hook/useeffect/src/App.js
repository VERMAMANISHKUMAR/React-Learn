import React from "react";
import ExampleComponent from "../src/Basic Usage of useEffect/ExampleComponent"; // Correct the path here
import TimerComponent from './Effect Hook with Cleanup/TimerComponent'
import FetchDataComponent from './Conditional Effects/FetchDataComponent'
import MultipleEffectsComponent from './Using Multiple useEffect Hooks/MultipleEffectsComponent'
import BlogApp from "./BlogApp/BlogApp";

function App() {

  return(
    <>
    <div style={{textAlign:'center', background:'yellow'}}>
        <h2>Basic Usage of useEffect</h2> 
      <ExampleComponent />
    </div>
    <div style={{textAlign:'center', background:'MediumSeaGreen'}}>
    <h2>Effect Hook with Cleanup</h2>
     <TimerComponent/>
    </div>
    <div style={{textAlign:'center', background:'rgb(255, 0, 0)'}}>
      <h2>Conditional Effects</h2>
      <FetchDataComponent />  
    </div>
    <div style={{textAlign:'center', background:'#f9f9f9'}}>
      <h2>Using Multiple useEffect Hooks</h2>
      <MultipleEffectsComponent />  {/* Correct the component name here */}  
    </div>
     <div style={{background:'#ffa500'}}>
     <BlogApp/>
     </div>
     
    </>
   
  );
}

export default App;
