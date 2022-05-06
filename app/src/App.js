import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";

import {Header} from "./components/Header";
import {Watchlist} from "./components/Watchlist";

import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Watchlist/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
