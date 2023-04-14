import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../container/home";

export default function Router(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}