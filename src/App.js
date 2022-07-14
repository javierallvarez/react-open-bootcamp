import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/container/contact_list';
import ClockFunctional from './components/pure/clock-functional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Ejercicios sesiones 1, 2, y 3 */}
        <ComponenteA></ComponenteA>
        {/* Ejercicios sesiones 4, 5 y 6 */}
        <ClockFunctional></ClockFunctional>
      </header>
    </div>
  );
}

export default App;
