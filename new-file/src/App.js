import React from "react";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
