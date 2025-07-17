import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import TitleCard from "../Components/TitleCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="more-cards">
        <TitleCard title="Blockbuster Movies" category="top_rated" />
        <TitleCard title="Only On Netflix" category="popular" />
        <TitleCard title="Upcoming" category="upcoming" />
        <TitleCard title="Top Picks For You" category="now_playing" />
      </div>
      <Footer />
    </div>
  );
}
