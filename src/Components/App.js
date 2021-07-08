import CookiePan from './CookiePan';

import logo from '../logo.svg';
import '../CSS/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">   
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Cookie Miner</h1>
      </header>
      <CookiePan />
    </div>
  );
}

export default App;
