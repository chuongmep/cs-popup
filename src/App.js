import logo from './logo.svg';
import './App.css';
import Popup from "./popup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Welcome to My React Website</h1>
          <Popup />
        </div>
      </header>
    </div>
  );
}

export default App;
