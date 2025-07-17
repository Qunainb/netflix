import twitterIcon from "../../../assets/twitter_icon.png";
import youtubeIcon from "../../../assets/youtube_icon.png";
import instaIcon from "../../../assets/instagram_icon.png";
import facebookIcon from "../../../assets/facebook_icon.png";

import "../Components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <img src={facebookIcon} alt="facebook-icon" />
        <img src={instaIcon} alt="instagram-icon" />
        <img src={twitterIcon} alt="twitter-icon" />
        <img src={youtubeIcon} alt="youtube-icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p>©️ 1997-2025 Netflix, Inc.</p>
    </footer>
  );
}
