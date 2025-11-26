import React, { useEffect } from "react";
import Navbar from "../comman/Navbar/Navbar";
import Hero from "../comman/Hero/Hero";
import Destinations from "../comman/Destinations/Destinations";
import Footer from "../comman/Footer/Footer";

import "./Dashboard.css";
// import Enquiry from "../entities/enquiry";

export default function Dashboard() {

  return (
    <>
      
      <main>
        <Navbar />
        <Hero />
        <Destinations />
        <Footer />
      </main>
    </>
  );
}
