"use client";
import {
  Banner,
  Navbar,
  Hero,
  Blogs,
  Courses,
  Features,
  FeatureTabs,
  OurMap,
  YoutubeList,
  DownloadApp,
  Testimonial,
  AvailNow,
  Footer,
} from "./components";
import { useEffect, useState } from "react";
import Achievements from "./components/achievements/Achievements";

const App = () => {
  const [isScroll, setIsScroll] = useState(false);
  const captureWindowScroll = () => {
    const scrollY = window.scrollY;

    // Changes Navbar position Type on scroll
    if (scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", captureWindowScroll);
    return () => {
      window.removeEventListener("scroll", captureWindowScroll);
    };
  }, []);

  return (
    <div onScroll={(e) => captureWindowScroll(e)} className="app">
      <Banner />
      <Navbar isScroll={isScroll} />
      <Hero />
      <Blogs />
      <Courses />
      <Features />
      <FeatureTabs />
      <Achievements />
      <OurMap />
      <YoutubeList />
      <DownloadApp />
      <Testimonial />
      <AvailNow />
      <Footer />
    </div>
  );
};

export default App;
