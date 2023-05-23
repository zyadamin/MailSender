import React from "react";
import './App.css';

//import {BrowserRouter as Router,Switch,Route,}  from "react-router-dom";
import { AddMessage } from './AddMessage';
import { SendMessage } from './SendMessage';
import { BrowserRouter as Router,Route,Routes } from "../node_modules/react-router-dom/dist/index";

function App() {
  return (
    <div className="App">
      {
        <Router>
          <Routes>
            <Route path='/' element={<AddMessage/>} />
            <Route path='/Send/:id' element={<SendMessage/>} />
          </Routes>

        </Router>
  }
    </div>
  );
}

export default App;
