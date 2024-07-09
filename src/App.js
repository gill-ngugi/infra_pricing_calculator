import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import CalculatePage from './components/calculatePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/calculate" exact element={<CalculatePage />} />
        </Routes>
      </Router>
      GOD IS GREAT!!!
    </div>
  );
}

export default App;
