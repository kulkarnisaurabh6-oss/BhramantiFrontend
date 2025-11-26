import React from "react";
import Navbar from "../comman/Navbar/Navbar";
import Hero from "../comman/Hero/Hero";
import Destinations from "../comman/Destinations/Destinations";
import Footer from "../comman/Footer/Footer";
import Packages from "../comman/Packages/Packages";

import "./Dashboard.css";
// import Enquiry from "../entities/enquiry";

export default function Dashboard() {

  return (
    <>
      
      <main>
        <Navbar />
        <Hero />
        <Destinations />
        <Packages />
        <Footer />
      </main>
    </>
  );
}
