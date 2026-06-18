import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import EventsSection from "./components/EventsSection";
import DisciplinesSection from "./components/DisciplinesSection";
import MedalTallySection from "./components/MedalTallySection";
import LeadershipSection from "./components/LeadershipSection";
import InsideIFI from "./components/InsideIFI";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

function App() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("ifi_cookie_consent");
    if (!accepted) {
      const t = setTimeout(() => setShowCookie(true), 1000);
      return () => clearTimeout(t);
    }
  }, []);

  const dismissCookie = () => {
    localStorage.setItem("ifi_cookie_consent", "1");
    setShowCookie(false);
  };

  return (
    <div className="App min-h-screen bg-white font-sans text-[#143a55]">
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <EventsSection />
        <DisciplinesSection />
        <MedalTallySection />
        <LeadershipSection />
        <InsideIFI />
      </main>
      <Footer />
      {showCookie && <CookieBanner onDismiss={dismissCookie} />}
    </div>
  );
}

export default App;
