import { useState } from "react";
// import { Navbar, Welcome, Services, Transactions, Footer } from "./components";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
    </div>
  );
};

export default App;
