import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import EventHighlights from "../components/EventHighlights";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Features />
      <EventHighlights />
    </div>
  );
};

export default Home;
