import './App.css';
import { Route, Routes } from "react-router-dom";
import Test from "./components/templates/testbdd";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/test" element={<Test />} /> {/* Use the Profile component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;