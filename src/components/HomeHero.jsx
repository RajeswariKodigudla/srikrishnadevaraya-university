import { useEffect, useState } from "react";
import heroImages from "../data/heroImages";
import "../styles/homeHero.css";

export default function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {heroImages.map((slide, i) => (
        <img
          key={slide.id}
          src={slide.img}
          alt={slide.alt}
          className={i === index ? "hero-slide active" : "hero-slide"}
        />
      ))}

      <button
        className="hero-arrow left"
        onClick={() =>
          setIndex(index === 0 ? heroImages.length - 1 : index - 1)
        }
      >
        ❮
      </button>

      <button
        className="hero-arrow right"
        onClick={() =>
          setIndex(index === heroImages.length - 1 ? 0 : index + 1)
        }
      >
        ❯
      </button>
    </div>
  );
}
