
import './App.css';
import Counter from './Counter';
import UserProfile from './UserProfile';
import TodoList from './TodoList';
function App() {
  return (
  <>
  <div style={{textAlign:'center', background:'red'}}>
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

    
  </>
  );
}

export default App;
