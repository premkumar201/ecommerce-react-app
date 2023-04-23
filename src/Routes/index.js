import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../container/home";

export default function Router(){
    return(
        <div>
            <HashRouter hashType="hashbang">
            <Routes>
                <Route path="*" element={<Home/>}/>
            </Routes>
            </HashRouter>
        </div>
    )
}