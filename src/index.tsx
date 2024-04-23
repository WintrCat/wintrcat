import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "@pages/Home";
import Unfound from "@pages/Unfound";

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