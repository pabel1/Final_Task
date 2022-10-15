import "./App.css";
import MasterLayout from "./MasterLayout";
// import Navbar from './Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import InvoiceContent from "./InvoiceContent/InvoiceContent";

import Dashboard from "./Dashboard/Dashboard";
import CardContent from "./CardsContent/CardContent";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<InvoiceContent  />} />
          <Route path="cards" element={<CardContent  />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      {/* <MasterLayout/> */}
    </div>
  );
}

export default App;
