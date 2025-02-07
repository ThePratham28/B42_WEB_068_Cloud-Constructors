// Hero Section with Parallax Effect
import React from "react";
import "../styles.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Plan, Organize, and Manage Your Events</h1>
        <p>Seamlessly create and track events with ease.</p>
        <button className="btn">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
