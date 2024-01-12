import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1> React Todo App</h1>
       <div className="input-wrapper">
        <input type="text" name="todo" placeholder="Create a new Todo" />
        <button className="add-button">Add</button>
       </div>
    </div>
  );
}

export default App;
