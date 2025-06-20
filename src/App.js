import {Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import Homepage from "./pages/Home";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
