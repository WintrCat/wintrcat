import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "@pages/Home/Home";
import Unfound from "@pages/Unfound/Unfound";

import "./index.css";

ReactDOM.createRoot(
    document.querySelector(".root")!
).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/> }/>

            <Route path="*" element={ <Unfound/> }/>
        </Routes>
    </BrowserRouter>
);