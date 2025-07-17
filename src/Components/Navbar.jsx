import logo from "../assets/logo.png";
import searchIcon from "../assets/search_icon.svg";
import bellIcon from "../assets/bell_icon.svg";
import profileImage from "../assets/profile_img.png";
import dropDown from "../assets/caret_icon.svg";

import "../Components/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="netflix-logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="search-icon" className="icons" />
        <img src={bellIcon} alt="bell-icon" className="icons" />

        <div className="navbar-profile">
          <img src={profileImage} alt="profile-image" className="profile" />
          <img src={dropDown} alt="drop-down" />
          <div className="dropdown">
            <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}
