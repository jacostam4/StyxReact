import logo from './logo.svg';
import './App.css';
import Component from './components/Component';
import HeaderC from './components/HeaderC';
function App() {
  return (
    <div className="App">
      <HeaderC />
        <img src={logo} className="App-logo" alt="logo" />
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
        <Component />
    </div>
  );
}

export default App;
