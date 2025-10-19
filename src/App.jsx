// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryInfo from "./pages/CountryInfo";
import Header from "./components/Header";
import Auth from "./pages/Auth"; 
import MyPage from "./pages/MyPage";
import { auth } from "./firebase";
import Exchange from "./pages/Exchange";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryCode" element={<CountryInfo />} />
        <Route path="/exchange" element={<Exchange />} /> 
        <Route path="/auth" element={<Auth />} />
         <Route path="/me" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
