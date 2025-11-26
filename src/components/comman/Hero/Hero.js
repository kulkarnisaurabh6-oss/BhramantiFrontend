import React from "react";
import QuoteForm from "../QuoteForm/QuoteForm";
import "./Hero.css";




export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="left">
                <h1>Bhramanti — Discover beautiful places</h1>
                <p className="lead">
                    Immersive and modern travel ideas — beaches, mountains, snowy peaks, islands and heritage.
                </p>

                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <a href="#places" className="cta">Explore</a>
                    <a href="#contact" style={{ color: "var(--muted)", textDecoration: "underline" }}>
                        Contact Us
                    </a>
                </div>

                <div className="features reveal" style={{ marginTop: "22px" }}>
                    <div className="feature">
                        <div style={{ fontSize: "22px" }}>🗺️</div>
                        <h3>Curated Trips</h3>
                        <p>Hand-picked itineraries for every type of traveler.</p>
                    </div>
                    <div className="feature">
                        <div style={{ fontSize: "22px" }}>🛡️</div>
                        <h3>Safe Travel</h3>
                        <p>Trusted partners and verified guides across India.</p>
                    </div>
                    <div className="feature">
                        <div style={{ fontSize: "22px" }}>⭐</div>
                        <h3>Top Rated</h3>
                        <p>Traveler reviews and responsive customer support.</p>
                    </div>
                </div>
            </div>
            <div className="right">
                 <QuoteForm/>

            </div>
            
        </section>
    );
}
