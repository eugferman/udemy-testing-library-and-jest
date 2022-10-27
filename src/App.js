
import './App.css';

import Button from './components/Button';
import Quiz21 from './quiz/Quiz21';
import Quiz22 from './quiz/Quiz22';
import Quiz26 from './quiz/Quiz26';

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
        <input type="checkbox" id="app-checkbox"/>
        <label htmlFor="app-checkbox">App Checkbox</label>
        <Button />
        <Quiz21 />
        <Quiz22 />
        <Quiz26 />
      </header>
    </div>
  );
}

export default App;
