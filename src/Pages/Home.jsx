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
        <TitleCard title="Blockbuster Movies" />
        <TitleCard title="Only On Netflix" />
        <TitleCard title="Upcoming" />
        <TitleCard title="Top Picks For You" />
      </div>
      <Footer />
    </div>
  );
}
