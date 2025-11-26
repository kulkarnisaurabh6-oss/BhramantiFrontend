import React, { useRef } from "react";

import "./Packages.css";
import bg from "../../../Images/16159.jpg";

const places = [
  {
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    title: "Himachal — Mountains & Adventure",
    desc: "Snow-capped peaks, trekking trails and adventure sports. Best time: Mar to Jun & Sep to Nov."
  },
  {
    img: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=800&q=80",
    title: "Shimla — Hill Station Beauty",
    desc: "Colonial charm, scenic views and pine forests. Best time: Mar to Jun & Oct to Feb."
  },
  {
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    title: "Manali — Adventure & Nature",
    desc: "Rohtang Pass, river rafting and adventure activities. Best time: Mar to Jun & Sep to Nov."
  },
  {
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    title: "Kullu Valley — Scenic Trails",
    desc: "Apple orchards, paragliding and riverside camps. Best time: Mar to Jun & Sep to Oct."
  },
  {
    img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80",
    title: "Spiti Valley — Remote Beauty",
    desc: "Desert landscape, ancient monasteries and high altitude trekking. Best time: May to Sep."
  },
  {
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    title: "Kinnaur — Hidden Gems",
    desc: "Apple plantations, mountain views and tribal culture. Best time: Mar to Oct."
  }
];

export default function Packages() {
  const cardsRef = useRef(null);

  const scroll = (direction) => {
    if (cardsRef.current) {
      const scrollAmount = 280;
      cardsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="places"
      className="packages"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <h2 className="reveal">Packages</h2>
      
      <div className="carousel-wrapper">
        <button className="nav prev" onClick={() => scroll("left")}>‹</button>
        
        <div className="cards" ref={cardsRef} style={{ marginTop: "14px" }}>
          {places.map((p, i) => (
            <article key={i} className="card reveal tilt" data-tilt>
              <div className="image"><img src={p.img} alt={p.title} /></div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <div className="tilt-layer"></div>
            </article>
          ))}
        </div>
        
        <button className="nav next" onClick={() => scroll("right")}>›</button>
      </div>
    </section>
  );
}