import heroBanner from "../../../assets/hero_banner.jpg";
import heroTitle from "../../../assets/hero_title.png";
import playIcon from "../../../assets/play_icon.png";
import infoIcon from "../../../assets/info_icon.png";

import "../Components/HeroSection.css";
import TitleCard from "./TitleCard";

export default function HeroSection() {
  return (
    <div className="hero">
      <img src={heroBanner} alt="hero-banner-image" className="banner-image" />
      <div className="hero-caption">
        <img src={heroTitle} alt="hero-title-image" className="caption-image" />
        <p>
          Discovering his ties to a secret ancient order, a young man living in
          modern instanbul embarks on a quest to save the city from an immortal
          enemy
        </p>
        <div className="hero-btns">
          <button className="btn">
            <img src={playIcon} alt="play-icon" />
            Play
          </button>
          <button className="btn dark-btn">
            <img src={infoIcon} alt="info-icon" />
            More Info
          </button>
        </div>
        <TitleCard />
      </div>
    </div>
  );
}
