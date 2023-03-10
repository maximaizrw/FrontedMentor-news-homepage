import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen font-inter px-8 md:px-20 lg:px-40 py-8 text-15 bg-neutral-off-white">
      <header className="pb-8">
        <Navbar />
      </header>
      <Hero />
      <footer className="pt-10">
        
      </footer>
    </div>
  );
};

export default App;
