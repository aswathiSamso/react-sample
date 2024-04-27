import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import EmplyeeCreate from "./components/Employee/EmplyeeCreate";
import EmplyeeDetail from "./components/Employee/EmplyeeDetail";
import EmplyeeList from "./components/Employee/EmplyeeList";
import EmplyeeUpdate from "./components/Employee/EmplyeeUpdate";
import Parent from "./components/Test/Parent";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmplyeeList />}></Route>
          <Route path="/create" element={<EmplyeeCreate />}></Route>
          <Route path="/update/:empid" element={<EmplyeeUpdate />}></Route>
          <Route path="/detail/:empid" element={<EmplyeeDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
