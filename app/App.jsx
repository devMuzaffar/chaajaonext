"use client";
import { Banner, Navbar, Hero, Blogs, Courses, Features } from "./components";
import { useEffect, useState } from "react";

const App = () => {

  const [isScroll, setIsScroll] = useState(false);

  const captureWindowScroll = () => {

    // This variable measures scroll distance from Top <App />
    // To Scrollable most bottom Child component
    const scrollY = window.scrollY;

    if(scrollY > 100){
      setIsScroll(true);
    }
    else{
      setIsScroll(false);
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', captureWindowScroll);
    return () => {
      window.removeEventListener('scroll', captureWindowScroll)
    }
  }, []);
  

  


  return (
    <div onScroll={(e) => captureWindowScroll(e)} className="app">
        <Banner />
        <Navbar isScroll={isScroll}/>
        <Hero />
        <Blogs />
        <Courses />
        <Features />
    </div>
  )
}

export default App