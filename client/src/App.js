import  Navigation from './domain/Navigation/index.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation/>
    </div>
  );
}

export default App;
