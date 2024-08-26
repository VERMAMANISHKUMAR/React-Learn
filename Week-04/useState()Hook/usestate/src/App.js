
import './App.css';
import Counter from './Counter';
import UserProfile from './UserProfile';
import TodoList from './TodoList';
import DataFetchingComponent from './DataFetchingComponent'
import TimerComponent from './TimerComponent';
import DataFetcher from './DataFetcher'
//import SubscriptionComponent from './SubscriptionComponent'
function App() {
  return (
  <>
  <div style={{textAlign:'center', background:'#ff6347'}}>
    <h1 >useState()Hook</h1>
    <p>This counter increments every second.</p>
    < Counter/>
    </div>
    <div style={{textAlign:'center', background:'Blue'}}>
      <h2>useState() Hook with Object</h2>
      <UserProfile />
    </div>
    <div style={{textAlign:'center', background:'yellow'}}>
      <h3>useState() Hook with Array</h3>
      <TodoList /> 
    </div>
    <div style={{textAlign:'center', background:'Violet'}}>
      <h3>Fetching Data using useEffect From Api</h3>
      <p>
      1. Side Effect: - Fetching data from an API.<br/>
      2. Cleanup: - Not required here since the fetch call does not need cleanup.<br/>
      3. Dependencies: - The empty array ensures the effect runs only once.
      </p>
      <DataFetchingComponent />  
    </div>
    <div style={{textAlign:'center', background:'yellow'}}>
     <h3>Subscribing to a Service:</h3>
     <p>
     1. Side Effect: Subscribing to a service.<br/>
2. Cleanup: Unsubscribing when the component unmounts.<br/>
3. Dependencies: The empty array ensures the effect runs only once.
     </p>
      {/* <SubscriptionComponent/> */}
    </div>
   <div style={{textAlign:'center', background:'Blue'}}>
   <h3>Setting Up a Timer: using useEffect</h3>
   <TimerComponent/>
   </div>
<div  style={{textAlign:'center', background:'SlateBlue'}}>
<h3>componentDidMount And componentDidUpdate</h3>
  <DataFetcher/>
</div>    
  </>
  );
}

export default App;
