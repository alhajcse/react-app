import logo from './logo.svg';
import './App.css';
import Hello from "./component-alhaj/Hello";
import Welcome from "./component-alhaj/Welcome";

function App() {
  return (
    <div className="App">
      <Hello age="23" name="alhaj"></Hello>

      <Welcome name="house"></Welcome>

    </div>
  );
}

export default App;
