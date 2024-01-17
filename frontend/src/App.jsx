import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import LandingPage from "./pages/Landingpage";
import DetailSeite from "./pages/Detailseite";
import AdminSeite from "./pages/AdminSeite";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detail/:id" element={<DetailSeite />} />
          <Route path="/admin" element={<AdminSeite />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
