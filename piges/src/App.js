// Piges/piges/src/App.js
import './App.css';
import { Route, Routes } from "react-router-dom";
import Test from "./components/templates/testbdd";
import Login from "./components/templates/login/login";
import Info from "./components/templates/info/info";
import TestUI from './components/templates/testui';
import { BrowserRouter as Router } from 'react-router-dom';
import Activite from './components/templates/activite/activite';
import Creationtar from './components/templates/creatar/creatar';
import Consmodtar from './components/templates/consmodtar/consmodtar';
import Consmodan from './components/templates/consmodan/consmodan';
import Creationan from './components/templates/creatan/creatan';
import Creationpi from './components/templates/creatpi/creatpi';
import Consmodpi from './components/templates/consmodpi/consmodpi';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/testui" element={<TestUI />} />

          <Route path="/info" element={<Info />} /> {/*Navbar*/}
          <Route path="/act" element={<Activite />} /> {/*Navbar*/}
          <Route path="/creatar" element={<Creationtar />} /> {/*Navbar*/}
          <Route path="/consmodtar" element={<Consmodtar />} /> {/*Navbar*/}
          <Route path="/creatan" element={<Creationan />} /> {/*Navbar*/}
          <Route path="/consmodtan" element={<Consmodan />} />{/*Navbar*/}
          <Route path="/creatpi" element={<Creationpi />} />{/*Navbar*/}
          <Route path="/consmodpi" element={<Consmodpi />} />{/*Navbar*/}

        </Routes>
      </div>
    </Router>
  );
}

export default App;