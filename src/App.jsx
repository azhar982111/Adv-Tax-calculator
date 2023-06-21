

import './App.css';
import AdvanceTaxCalculator from './pages/AdvanceTaxCalculator';
import HouseRent from './pages/HouseRent';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/advTax" element={<AdvanceTaxCalculator />}></Route>
        <Route path="/" element={<HouseRent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
