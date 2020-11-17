import "./App.css";
import Padre from "./components/app/training/context/Padre";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Padre titulo="Este es el padre" />
      </header>
    </div>
  );
}

export default App;
