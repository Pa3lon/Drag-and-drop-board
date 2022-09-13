import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./board/Board";
import "./index.css";
import Nav from "./shared/Nav";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex-1 h-full p-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Board />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </React.StrictMode>
);
