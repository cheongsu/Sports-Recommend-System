import './App.css'; 
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./component/Header";
import Mainpg from './component/Mainpg';
import Intro from './component/Intro';
import Recomm from './component/Recomm';
import KUinfo from './component/KUinfo';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Mainpg />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/recomm" element={<Recomm />} />
          <Route path="/KUinfo" element={<KUinfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
