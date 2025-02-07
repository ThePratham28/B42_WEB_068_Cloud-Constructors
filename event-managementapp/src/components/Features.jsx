import React, { useState, useEffect } from "react";
import "../styles.css";

const Features = () => {
  const featuresList = [
    {
      title: "Event Creation Wizard",
      description: "Create events with a step-by-step guided process.",
      image: "event_wizard.jpg"
    },
    {
      title: "RSVP Tracking",
      description: "Track guest responses and send automated reminders.",
      image: "rsvp_tracking.jpg"
    },
    {
      title: "Event Timeline",
      description: "View all your past and upcoming events in one place.",
      image: "event_timeline.jpg"
    },
    {
      title: "User Engagement",
      description: "Customize invitations and enable event discussions.",
      image: "user_engagement.jpg"
    },
    {
      title: "AI Recommendations",
      description: "Get event suggestions based on your interests.",
      image: "ai_recommendations.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % featuresList.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % featuresList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuresList.length - 3 : prevIndex - 3));
  };

  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
        <div className="feature-cards">
          {featuresList.slice(currentIndex, currentIndex + 3).map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
};

export default Features;
