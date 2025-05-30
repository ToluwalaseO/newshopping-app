import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import Header2 from './Header2';
import TopSection from './TopSection';
import Header3 from './Header3';
import Listing from './Listing';
import WeeklyPopular from './WeeklyPopular';
import Services from './Services';
import Homepage from './Homepage';
import Buy from "./Buy";
import Popular from "./Popular";
import Product from "./Product";

// Create a layout component for your home page structure
const HomeLayout = () => (
  <div>
    <Homepage />
    <TopSection />
    <Header3 />
    <Listing />
    <WeeklyPopular />
    <Services />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Header2 />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/product/:id" element={<Product />} /> {/* Updated to include product ID */}
        <Route path="/popular" element={<Popular />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
  // Consider showing a user-friendly error in production
  document.body.innerHTML = '<div class="error">Application failed to load</div>';
}

export default App;