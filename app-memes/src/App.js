import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="nav-logo">
          <a href="#">REACT APP MEMES</a>
        </div>
        <div className="menu">
          <a href="#" className="nav-menu">
            Home
          </a>
          <a href="#" className="nav-menu">
            About us
          </a>
          <a href="#" className="nav-menu">
            Services
          </a>
          <a href="#" className="nav-menu">
            Contact
          </a>
        </div>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
          <br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="button-name">Geovanny Días</div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
