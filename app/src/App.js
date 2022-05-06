import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";

import {Header} from "./components/Header";
import {Watchlist} from "./components/Watchlist";
import {Add} from "./components/Add";
import {GlobalProvider} from "./context/GlobalState";


import './App.css';

function App() {
  return (
    <>
    <GlobalProvider>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<Watchlist/>}/>
                        <Route exact path="/add" element={<Add/>}/>
                    </Routes>
                </BrowserRouter>
            </GlobalProvider>
    </>
  );
}

export default App;
