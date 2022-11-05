import logo from './inbank_blue.png';
import './App.css';

function App() {
  function goToSavingsForm(event) {
    window.location.assign('/savingsForm');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          alt="logo"
          className="DBLogo"
          onClick={goToSavingsForm}
        />
      </header>
      <div></div>
    </div>
  );
}

export default App;
