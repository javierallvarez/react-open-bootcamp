import logo from './logo.svg';
import './App.css';
import ClockFunctional from './components/pure/clock-functional';
//import Clock from './components/pure/clock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClockFunctional></ClockFunctional>
        {/* <Clock></Clock> */}
      </header>
    </div>
  );
}

export default App;
