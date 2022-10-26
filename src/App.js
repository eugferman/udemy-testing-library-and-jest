import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import Quiz21 from './quiz/Quiz21';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button>Test button</button>
        <input type="checkbox" data-testid="app-checkbox"/>
        <Button />
        <Quiz21 />
      </header>
    </div>
  );
}

export default App;
