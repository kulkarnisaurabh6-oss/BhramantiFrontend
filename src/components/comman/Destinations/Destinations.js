import React from "react";
import "../Destinations/Destinations.css";

const places = [
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Goa — Beaches & Nightlife",
    desc: "Golden beaches, water-sports and vibrant nightlife. Best time: Nov to Feb."
  },
  {
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    title: "Kashmir — Lakes & Mountains",
    desc: "Snowy peaks, Dal Lake houseboats and serene valleys. Best time: Mar to Jun."
  },
  {
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    title: "Rajasthan — Forts & Culture",
    desc: "Historic forts, royal palaces and desert safaris. Best time: Oct to Mar."
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Kerala — Backwaters & Wellness",
    desc: "Houseboats, ayurvedic retreats and lush green landscapes. Best time: Sep to Mar."
  },
  {
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    title: "Andaman — Islands & Diving",
    desc: "Clear waters, coral reefs and diving spots. Best time: Nov to May."
  },
  {
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
    title: "Lakshadweep — Untouched Islands",
    desc: "Remote islands, turquoise lagoons and pristine reefs. Best time: Oct to Feb."
  }
];

export default function Destinations() {
  return (
    <section id="places" style={{ maxWidth: "1200px", margin: "20px auto", padding: "0 20px" }}>
      <h2 className="reveal">Top Destinations</h2>
      <div className="cards" style={{ marginTop: "14px" }}>
        {places.map((p, i) => (
          <article key={i} className="card reveal tilt" data-tilt>
            <div className="image"><img src={p.img} alt={p.title} /></div>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
            <div className="tilt-layer"></div>
          </article>
        ))}
      </div>
    </section>
  );
}