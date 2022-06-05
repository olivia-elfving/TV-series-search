import { Routes, Route } from "react-router-dom";
import './App.css';
import Search from './components/search';
import Show from './components/show';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="shows/:id" element={<Show />} />
        <Route path="*" element={<Search />} />
      </Routes>
    </div>
  );       
}

export default App;
